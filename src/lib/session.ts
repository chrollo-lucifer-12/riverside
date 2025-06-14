import "server-only"

import { prisma } from "./db";
import { encodeBase32LowerCaseNoPadding, encodeHexLowerCase } from "@oslojs/encoding";
import { sha256 } from "@oslojs/crypto/sha2";
import {Session} from "@/generated/prisma";

export function generateSessionToken(): string {
    const bytes = new Uint8Array(20);
    crypto.getRandomValues(bytes);
    const token = encodeBase32LowerCaseNoPadding(bytes);
    return token;
}

export async function createSession(token: string, userId: number) {
    const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
    const session : Session = {
        id: sessionId,
        userId,
        expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
    };
    await prisma.session.create({
        data: session
    });
    return session;
}

export async function validateSessionToken(token: string) {
    const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
    const now = Date.now();
    const fifteenDays = 1000 * 60 * 60 * 24 * 15;
    const thirtyDays = 1000 * 60 * 60 * 24 * 30;

    const result = await prisma.session.findUnique({
        where: { id: sessionId },
        select: {
            id: true,
            expiresAt: true,
            user: { select: { id: true, email: true, emailVerified: true } }
        }
    });

    if (!result) return { session: null, user: null };

    const { user, ...session } = result;

    if (now >= session.expiresAt.getTime()) {
        await prisma.session.delete({ where: { id: sessionId } });
        return { session: null, user: null };
    }

    if (now >= session.expiresAt.getTime() - fifteenDays) {
        const newExpiry = new Date(now + thirtyDays);
        if (Math.abs(session.expiresAt.getTime() - newExpiry.getTime()) > 1000 * 60 * 60 * 24) {
            session.expiresAt = newExpiry;
            await prisma.session.update({
                where: { id: session.id },
                data: { expiresAt: session.expiresAt }
            });
        }
    }

    return { session, user };
}


export async function invalidateSession(sessionId: string): Promise<void> {
    await prisma.session.delete({ where: { id: sessionId } });
}

export async function invalidateAllSessions(userId: number): Promise<void> {
    await prisma.session.deleteMany({
        where: {
            userId: userId
        }
    });
}
