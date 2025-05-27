"use client"

import CustomInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";
import {useActionState} from "react";
import {EmailSignupAction} from "@/actions/auth";
import Form from "next/form";
import {EmailSignupActionState} from "@/lib/definitions";
import FormError from "@/components/form-error";

const EmailSignupForm = ({handleSwitchTab} : {handleSwitchTab : () => void
}) => {

    const[state, action, pending] = useActionState<EmailSignupActionState, FormData>(EmailSignupAction, undefined);

    return <>
        <h1 className={"text-2xl font-bold"}>Create your account</h1>
        <span className={"text-xs flex gap-x-2 text-gray-7 mt-2"}>Sign up to join Riverside it's free
</span>
        <Form action={action} className={"flex flex-col gap-y-2 w-[70%] mt-4"}>
            <CustomInput inputMode={"text"} placeholder={"Name"} name={"name"} error={state?.errors?.name} />
            <CustomInput inputMode={"email"} placeholder={"Email"} name={"email"} error={state?.errors?.email} />
            <CustomInput inputMode={"password"} placeholder={"Password"} name={"password"} error={state?.errors?.password} />
            {
                state?.errors && <FormError errors={Object.values(state.errors).flat().filter(Boolean).slice(0,3)}/>
            }
            <CustomButton cn="bg-purple-500 hover:bg-purple-600" type={"submit"} >
                Create your account
            </CustomButton>
        </Form>
        <p className={"text-xs  gap-x-2 text-gray-7 mt-6"}>By signing up, you agree to our Terms & Privacy Policy</p>
        <span className={"text-xs flex gap-x-2 mt-4"}><p>Have an account?</p> <p onClick={handleSwitchTab} className={"cursor-pointer text-purple-500"}>Log in</p></span>
    </>
}

export default EmailSignupForm