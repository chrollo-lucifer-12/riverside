"use client"

import CustomButton from "@/components/custom-button";
import Image from "next/image";
import CustomInput from "@/components/custom-input";

const LoginForm = ({handleSwitchTab} : {handleSwitchTab : () => void
}) => {
    return <>
        <h1 className={"text-2xl font-bold"}>Log in to Riverside</h1>
        <span className={"text-xs flex gap-x-2"}><p>Don't have an account?</p> <p onClick={handleSwitchTab} className={"cursor-pointer text-purple-500"}>Sign up</p></span>
        <div className={"mt-4 flex gap-x-2"}>
            <CustomButton type={"button"}>
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
        <form className={"flex flex-col gap-y-2 w-[70%]"}>
            <CustomInput inputMode={"email"} placeholder={"Email"} />
            <CustomInput inputMode={"password"} placeholder={"Password"} />
            <CustomButton cn="bg-purple-500 hover:bg-purple-600" type={"button"} >
                Log in
            </CustomButton>
        </form>
    </>
}

export default LoginForm