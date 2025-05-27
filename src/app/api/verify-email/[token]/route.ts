import { NextRequest, NextResponse } from 'next/server';
import {prisma} from "@/lib/db"
import {getCurrentSession} from "@/lib/cookie";

type Props = Promise<{params : {token : string}}>

export async function GET(req: NextRequest, props : Props) {

    const {params} = await props;
    const token = params.token;

    const findToken = await prisma.verificationToken.findUnique({where : {token}});
    const {user} = await getCurrentSession();

    if (!user) {
        return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    await prisma.user.update({where : {id : user.id}, data : {emailVerified : new Date()}})
    await prisma.verificationToken.delete({where : {token}});

    return NextResponse.redirect(new URL("/dashboard", req.url))
}
