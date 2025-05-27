"use client"

import CustomButton from "@/components/custom-button";
import Image from "next/image";

const SignupForm = ({handleSwitchTab} : {handleSwitchTab : (r : "login" | "email") => void
}) => {
    return <>
        <h1 className={"text-2xl font-bold"}>Create your account</h1>
        <span className={"text-xs flex gap-x-2 text-gray-7 mt-2"}>Sign up to join Riverside it's free
</span>
        <div className={"flex flex-col gap-y-2 w-[70%] mt-2"}>
            <CustomButton type={"button"} >
                <div className="relative flex items-center w-full">
                    <Image src="/icon_GOOGLE_color.svg" alt="Google icon" width={20} height={20} className="absolute left-0" />
                    <p className="flex-grow text-center font-bold">Continue with Google</p>
                </div>
            </CustomButton>
            <CustomButton type={"button"} >
                <div className="relative flex items-center w-full">
                    <Image src="/icon_APPLE.svg" alt="Google icon" width={20} height={20} className="absolute left-0" />
                    <p className="flex-grow text-center font-bold">Continue with Apple</p>
                </div>
            </CustomButton>
            <CustomButton type={"button"} >
                <div className="relative flex items-center w-full">
                    <Image src="/icon_SPOTIFY_color.svg" alt="Google icon" width={20} height={20} className="absolute left-0" />
                    <p className="flex-grow text-center font-bold">Continue with Spotify</p>
                </div>
            </CustomButton>
            <CustomButton type={"button"} onClick={() => handleSwitchTab("email")}>
                <div className="relative flex items-center w-full">
                    <Image src="/icon_EMAIL.svg" alt="Google icon" width={20} height={20} className="absolute left-0" />
                    <p className="flex-grow text-center font-bold">Continue with Email</p>
                </div>
            </CustomButton>
        </div>
        <p className={"text-xs  gap-x-2 text-gray-7 mt-6"}>By signing up, you agree to our Terms & Privacy Policy</p>
        <span className={"text-xs flex gap-x-2 mt-4"}><p>Have an account?</p> <p onClick={() => handleSwitchTab("login")} className={"cursor-pointer text-purple-500"}>Log in</p></span>
    </>
}

export default SignupForm