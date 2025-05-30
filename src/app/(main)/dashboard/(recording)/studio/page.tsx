import {getCurrentSession} from "@/lib/cookie";
import {redirect} from "next/navigation";

const Page = async () => {
    const {user, session} = await getCurrentSession();
    if (!session) redirect("/dashboard")

    const findStudio = await prisma?.studio.findUnique({where : {ownerId : user.id}, select : {slug : true}});

    redirect(`/dashboard/studio/${findStudio!.slug}`);
}

export default Page;