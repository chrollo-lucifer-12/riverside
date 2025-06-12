import { getCurrentSession } from "@/lib/cookie";
import { redirect } from "next/navigation";
import AuthDialog from "@/components/auth-dialog";

const Dashboard = async () => {
    const { user, session } = await getCurrentSession();

    if (!session) return <AuthDialog />;

    if (user && !user.emailVerified) {
        redirect("/email-verification");
    }

    redirect("/dashboard/home");

//    return <div>dashbaord</div>
};

export default Dashboard;