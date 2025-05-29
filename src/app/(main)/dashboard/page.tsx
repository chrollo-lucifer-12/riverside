import { getCurrentSession } from "@/lib/cookie";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import AuthDialog from "@/components/auth-dialog";

const DashboardContent = async () => {
    const { user, session } = await getCurrentSession();

    if (!session) return <AuthDialog />;

    if (user && !user.emailVerified) {
        redirect("/email-verification");
    }

    redirect("/dashboard/home");

//    return <div>dashbaord</div>
};

const Dashboard = () => {
    return (
        <Suspense fallback={<div className="absolute w-[912px] border border-gray-10 z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-[16px] bg-gray-12">
            laoding....
        </div>}>
            <DashboardContent />
        </Suspense>
    );
};

export default Dashboard;