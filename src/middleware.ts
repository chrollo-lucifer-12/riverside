import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentSession } from "@/lib/cookie";

const protectedRoutes = ["/dashboard/home"];
const allowedOrigins = [process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"];

export async function middleware(request: NextRequest): Promise<NextResponse> {
    if (request.method === "GET") {
        return NextResponse.next();
    }

    const originHeader = request.headers.get("Origin");
    const hostHeader = request.headers.get("Host");

    if (!originHeader || !hostHeader) {
        return new NextResponse(null, { status: 403 });
    }

    // Simple CSRF protection by validating the Origin
    if (!allowedOrigins.includes(originHeader)) {
        return new NextResponse(null, { status: 403 });
    }

    // Path-based session protection
    if (protectedRoutes.includes(new URL(request.url).pathname)) {
        const { session } = await getCurrentSession();
        if (!session) {
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }
    }

    return NextResponse.next();
}
