import { NextRequest, NextResponse } from 'next/server';
import {prisma} from "@/lib/db"
import {getCurrentSession} from "@/lib/cookie";
import {nanoid} from "nanoid"

type Props = Promise<{params : {token : string}}>

export async function GET(req: NextRequest, props : Props) {

    const {params} = await props;
    const token = params.token;

    const findToken = await prisma.verificationToken.findUnique({where : {token}});
    const {user,session} = await getCurrentSession();

    if (!session) {
        return NextResponse.redirect(new URL("/dashboard", req.url))
    }

    const studioName = `${user.email.slice(0,6)}-studios-${crypto.randomUUID()}-${nanoid(6)}`

    await prisma.user.update({where : {id : user.id}, data : {emailVerified : new Date()}});
    await prisma.verificationToken.delete({where : {token}});
    await prisma.studio.create({data : {
        ownerId : user.id,
            slug : studioName
        }})

    return NextResponse.redirect(new URL("/dashboard", req.url))
}
