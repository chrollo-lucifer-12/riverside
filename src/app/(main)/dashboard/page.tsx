import AuthDialog from "@/components/auth-dialog";
import {getCurrentSession} from "@/lib/cookie";

const Dashboard = async () => {

    const {user} = await getCurrentSession();

   if (!user) return <AuthDialog/>
}

export default Dashboard