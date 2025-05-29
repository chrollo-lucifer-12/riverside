import {getCurrentSession} from "@/lib/cookie";
import {redirect} from "next/navigation";

const Page = async () => {

    const {session} = await getCurrentSession();
    if (!session) {
        redirect("/dashboard");
    }

    return <div className={""}>

    </div>
}

export default Page