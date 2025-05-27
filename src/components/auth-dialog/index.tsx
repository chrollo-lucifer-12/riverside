"use client";
import Image from "next/image";
import LoginForm from "@/components/auth-dialog/login-form";
import SignupForm from "@/components/auth-dialog/signup-form";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import EmailSignupForm from "@/components/auth-dialog/email-signup-form";

const AuthDialog = () => {
    const [tab, setTab] = useState<"login" | "signup" | "email">("login");

    const renderTabContent = () => {
        switch (tab) {
            case "signup":
                return (
                    <motion.div
                        key="signup"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-full flex flex-col gap-y-2 items-center justify-center"
                    >
                        <SignupForm
                            handleSwitchTab={(tabName: "signup" | "email" | "login") => setTab(tabName)}
                        />
                    </motion.div>
                );

            case "login":
                return (
                    <motion.div
                        key="login"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-full flex flex-col gap-y-2 items-center justify-center"
                    >
                        <LoginForm
                            handleSwitchTab={() => setTab("signup")}
                        />
                    </motion.div>
                );
            default:
                return (
                    <motion.div
                        key="email"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="w-full flex flex-col gap-y-2 items-center justify-center"
                    >
                        <EmailSignupForm handleSwitchTab={() => setTab("login")} />
                    </motion.div>
                );
        }
    };

    return (
        <div className="absolute w-[912px] border border-gray-10 z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center rounded-[16px] bg-gray-12">
            <div className="w-[412px] flex flex-col items-center justify-center gap-y-2">
                <AnimatePresence mode="wait">
                    {renderTabContent()}
                </AnimatePresence>
            </div>
            <div className="w-[500px] bg-[#0e0e0e] pl-[36px] items-center pt-20 pb-20">
                <Image
                    src="https://app.riverside.fm/6.71.15/static/media/imagex2.0cd44f4ff92315ffe723.png"
                    alt=""
                    width={464}
                    height={460}
                />
            </div>
        </div>
    );
};

export default AuthDialog;
