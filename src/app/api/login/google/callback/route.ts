import { generateSessionToken, createSession } from "@/lib/session";
import { google } from "@/lib/providers";
import { cookies } from "next/headers";
import { decodeIdToken } from "arctic";

import type { OAuth2Tokens } from "arctic";
import {prisma} from "@/lib/db";
import {setSessionTokenCookie} from "@/lib/cookie";

export async function GET(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const cookieStore = await cookies();
    const storedState = cookieStore.get("google_oauth_state")?.value ?? null;
    const codeVerifier = cookieStore.get("google_code_verifier")?.value ?? null;
    if (code === null || state === null || storedState === null || codeVerifier === null) {
        return new Response(null, {
            status: 400
        });
    }
    if (state !== storedState) {
        return new Response(null, {
            status: 400
        });
    }

    let tokens: OAuth2Tokens;
    try {
        tokens = await google.validateAuthorizationCode(code, codeVerifier);
    } catch (e) {
        return new Response(null, {
            status: 400
        });
    }
    const claims = decodeIdToken(tokens.idToken());
    const googleUserId = claims.sub;
    const username = claims.name;
    const email= claims.email;

    const existingUser = await prisma.user.findUnique({where : {googleId : googleUserId}})

    if (existingUser !== null) {
        const sessionToken = generateSessionToken();
        const session = await createSession(sessionToken, existingUser.id);
        await setSessionTokenCookie(sessionToken, session.expiresAt);
        return new Response(null, {
            status: 302,
            headers: {
                Location: "/"
            }
        });
    }

    const user = await prisma.user.create({
        data : {
            email,
            name : username,
            googleId : googleUserId,
            emailVerified : new Date()
        }
    })

    const sessionToken = generateSessionToken();
    const session = await createSession(sessionToken, user.id);
    await setSessionTokenCookie(sessionToken, session.expiresAt);
    return new Response(null, {
        status: 302,
        headers: {
            Location: "/dashboard"
        }
    });
}
