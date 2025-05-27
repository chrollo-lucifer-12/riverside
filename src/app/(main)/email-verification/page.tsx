import {CheckIcon} from "lucide-react";
import {getCurrentSession} from "@/lib/cookie";
import {redirect} from "next/navigation";

const EmailVerificationPage = async () => {

    const {user} = await getCurrentSession();

    if (!user || user.emailVerified) {
        redirect("/dashboard")
    }

    return <div className={"w-full h-screen flex flex-col  gap-y-4 items-center justify-center"}>
        <CheckIcon className={"w-6 h-6"} />
        <p className={"text-2xl font-bold"}>Great! Check your inbox to continue</p>
        <p className={"text-sm font-semibold text-gray-7"}>Check your email to verify your free account and start creating.</p>
    </div>
}

export default EmailVerificationPage