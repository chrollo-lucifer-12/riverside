"use server"

import {EmailLoginSchema, EmailSignupFormSchema, validateData} from "@/lib/schemas";
import {EmailLoginActionState, EmailSignupActionState} from "@/lib/definitions";
import {prisma} from "@/lib/db"
import {hash, compare} from "bcrypt"
import {createSession, generateSessionToken} from "@/lib/session";
import {setSessionTokenCookie} from "@/lib/cookie";
import { Resend } from 'resend';
import {revalidatePath} from "next/cache";

const resend = new Resend(process.env.RESEND_KEY);

export const EmailSignupAction = async (state : EmailSignupActionState , formData : FormData) => {
    const data = {
        name : formData.get("name"),
        email : formData.get("email"),
        password : formData.get("password")
    }

    const validationResult = validateData(EmailSignupFormSchema, data)

    if (validationResult.errors) {
        return {
            errors : validationResult.errors
        }
    }

    const {name, email, password} = validationResult.data

    try {
        let userExists = await prisma?.user.findUnique({where : {email}});
        if (userExists) {
            return {
                errors : {
                    email : ["This email already exists."]
                }
            }
        }

        const hashedPassword = await hash(password, 10);

        userExists = await prisma.user.create({data : {
            name,email,password : hashedPassword
            }})

        const token = generateSessionToken();
        const session = await createSession(token, userExists.id)
        await setSessionTokenCookie(token, new Date(Date.now() + 1000 * 60 * 60 * 24 * 30))

        const verificationToken = await prisma.verificationToken.create({
            data : {
                userId : userExists.id,
                token : crypto.randomUUID(),
                expiresAt : new Date(Date.now() + 1000 * 60 * 60)
            }
        })

        const verifyLink = `${process.env.NEXT_PUBLIC_BASE_URL}/api/verify-email/${token}`

        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [email],
            subject: 'Email Verification',
            html: `<p>${verifyLink}</p>`,
        });

        revalidatePath("/dashboard")

    } catch (e) {
        console.log(e);
    }
}

export const EmailLoginAction = async (state : EmailLoginActionState, formData : FormData) => {
    const data = {
        email : formData.get("email"),
        password : formData.get("password")
    }

    const validationResult = validateData(EmailLoginSchema, data)

    if (validationResult.errors) {
        return {
            errors : validationResult.errors
        }
    }

    const {email, password} = validationResult.data

    try {
        let userExists = await prisma?.user.findUnique({where : {email}});
        if (!userExists) {
            return {
                errors : {
                    email : ["This email doesn't exist."]
                }
            }
        }

        const comparePassword = await compare(password, userExists.password!);

        if (!comparePassword) {
            return {
                errors : {
                    password : ["Wrong password, please try again."]
                }
            }
        }

        const token = generateSessionToken();
        await createSession(token, userExists.id)
        await setSessionTokenCookie(token, new Date(Date.now() + 1000 * 60 * 60 * 24 * 30))

        revalidatePath("/dashboard")
    } catch (e) {
        console.log(e);
    }


}