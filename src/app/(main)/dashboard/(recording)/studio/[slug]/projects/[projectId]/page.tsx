import {prisma} from "@/lib/db"
import ProjectPage from "@/components/project-page";
import {HydrationBoundary, QueryClient, dehydrate} from "@tanstack/react-query";
import {getProjectVideos} from "@/lib/fetchData";

const Page = async (props : {params : Promise<{projectId : string}>}) => {
    const params = await props.params;
    const {projectId} = params;

    const query = new QueryClient();

    const project = await prisma.project.findUnique({where : {id : projectId}, select : {name : true}});

    await query.prefetchQuery({
        queryKey : ["project-videos"],
        queryFn :  () => getProjectVideos(projectId)
    })

    return <HydrationBoundary state={dehydrate(query)}>
        <ProjectPage name={project!.name} projectId = {projectId} />
    </HydrationBoundary>
}

export default Page