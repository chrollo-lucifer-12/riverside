"use client"

import CustomInput from "@/components/custom-input";
import CustomButton from "@/components/custom-button";

const EmailSignupForm = ({handleSwitchTab} : {handleSwitchTab : () => void
}) => {
    return <>
        <h1 className={"text-2xl font-bold"}>Create your account</h1>
        <span className={"text-xs flex gap-x-2 text-gray-7 mt-2"}>Sign up to join Riverside it's free
</span>
        <form className={"flex flex-col gap-y-2 w-[70%] mt-4"}>
            <CustomInput inputMode={"text"} placeholder={"Name"} />
            <CustomInput inputMode={"email"} placeholder={"Email"} />
            <CustomInput inputMode={"password"} placeholder={"Password"} />
            <CustomButton cn="bg-purple-500 hover:bg-purple-600" type={"button"} >
                Create your account
            </CustomButton>
        </form>
        <p className={"text-xs  gap-x-2 text-gray-7 mt-6"}>By signing up, you agree to our Terms & Privacy Policy</p>
        <span className={"text-xs flex gap-x-2 mt-4"}><p>Have an account?</p> <p onClick={handleSwitchTab} className={"cursor-pointer text-purple-500"}>Log in</p></span>
    </>
}

export default EmailSignupForm