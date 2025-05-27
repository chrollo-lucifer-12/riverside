import AuthDialog from "@/components/auth-dialog";
import {getCurrentSession} from "@/lib/cookie";
import {redirect} from "next/navigation";

const Dashboard = async () => {
    const { user } = await getCurrentSession()

   if (!user) return <AuthDialog/>

   if (user && !user.emailVerified) {
        redirect("/email-verification")
   }

   redirect("/dashboard/home")
}

export default Dashboard