"use client"

import CustomButton from "@/components/custom-button";
import Image from "next/image";
import CustomInput from "@/components/custom-input";
import {useRouter} from "next/navigation";
import {useActionState} from "react";
import {EmailLoginAction} from "@/actions/auth";
import Form from "next/form";
import FormError from "@/components/form-error";
import {EmailLoginActionState, EmailSignupActionState} from "@/lib/definitions";

const LoginForm = ({handleSwitchTab} : {handleSwitchTab : () => void
}) => {
    const[state,action,pending] = useActionState<EmailLoginActionState, FormData>(EmailLoginAction,undefined);
    const router = useRouter();
    return <>
        <h1 className={"text-2xl font-bold"}>Log in to Riverside</h1>
        <span className={"text-xs flex gap-x-2"}><p>Don't have an account?</p> <p onClick={handleSwitchTab} className={"cursor-pointer text-purple-500"}>Sign up</p></span>
        <div className={"mt-4 flex gap-x-2"}>
            <CustomButton onClick={() => {
                router.push(`${process.env.NEXT_PUBLIC_LOGIN_GOOGLE}`)
            }} type={"button"}>
                <Image src={"/icon_GOOGLE.svg"} alt={""} width={20} height={20} />
            </CustomButton>
            <CustomButton type={"button"}>
                <Image src={"/icon_APPLE.svg"} alt={""} width={20} height={20} />
            </CustomButton>
            <CustomButton type={"button"}>
                <Image src={"/icon_SPOTIFY.svg"} alt={""} width={20} height={20} />
            </CustomButton>
        </div>
        <p className={"mt-4  mb-4 text-xs text-gray-8 font-bold"}>Or</p>
        <Form action={action} className={"flex flex-col gap-y-2 w-[70%]"}>
            <CustomInput inputMode={"email"} placeholder={"Email"} name={"email"} error={state?.errors?.email} />
            <CustomInput inputMode={"password"} placeholder={"Password"} name={"password"} error={state?.errors?.password} />
            {
                state?.errors && <FormError errors={Object.values(state.errors).flat().filter(Boolean).slice(0,3)}/>
            }
            <CustomButton cn="bg-purple-500 hover:bg-purple-600" type={"submit"} disabled={pending} >
                Log in
            </CustomButton>
        </Form>
    </>
}

export default LoginForm