import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import {getCurrentSession} from "@/lib/cookie";

const protectedRoutes = ["/dashboard/home"]

export async function middleware(request: NextRequest): Promise<NextResponse> {
    if (request.method === "GET") {
        return NextResponse.next();
    }
    const originHeader = request.headers.get("Origin");
    const hostHeader = request.headers.get("Host");
    if (originHeader === null || hostHeader === null) {
        return new NextResponse(null, {
            status: 403
        });
    }
    let origin: URL;
    try {
        origin = new URL(originHeader);
    } catch {
        return new NextResponse(null, {
            status: 403
        });
    }
    if (origin.host !== hostHeader) {
        return new NextResponse(null, {
            status: 403
        });
    }

    if (protectedRoutes.includes(origin.pathname)) {
        const {session} = await getCurrentSession();
        if (!session) {
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }
    }

    return NextResponse.next();
}
