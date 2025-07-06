import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentSession } from "@/lib/cookie";

const protectedRoutes = ["/dashboard/home"];
const allowedOrigins = [process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"];

export async function middleware(request: NextRequest): Promise<NextResponse> {
    const pathname = new URL(request.url).pathname;

    // Allow all GET requests
    if (request.method === "GET") {
        return NextResponse.next();
    }

    const originHeader = request.headers.get("Origin");
    const hostHeader = request.headers.get("Host");
    const userAgent = request.headers.get("user-agent") || "";

    const isBrowserRequest = userAgent.includes("Mozilla");

    // Only apply CSRF protection to browser requests
    if (isBrowserRequest) {
        if (!originHeader || !hostHeader) {
            return new NextResponse(null, { status: 403 });
        }

        if (!allowedOrigins.includes(originHeader)) {
            return new NextResponse(null, { status: 403 });
        }
    }

    // Session protection for specific routes
    if (protectedRoutes.includes(pathname)) {
        const { session } = await getCurrentSession();
        if (!session) {
            return NextResponse.redirect(new URL("/dashboard", request.url));
        }
    }

    return NextResponse.next();
}
