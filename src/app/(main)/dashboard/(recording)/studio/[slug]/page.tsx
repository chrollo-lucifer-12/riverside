import { prisma } from "@/lib/db";
import ProjectsPage from "@/components/projects-page";
import {QueryClient} from "@tanstack/react-query";
import {getProjects} from "@/lib/fetchData";

const Page = async (props : {params : Promise<{slug : string}>}) => {
    const  params  = await props.params;
    const slug = params.slug;

    const query = new QueryClient();

    await query.prefetchQuery({
        queryKey : ["projects"],
        queryFn : () => getProjects(slug)
    })

    return (
       <ProjectsPage  slug = {slug}/>
    );
};

export default Page;
