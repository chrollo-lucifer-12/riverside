import {prisma} from "@/lib/db"
import ProjectPage from "@/components/project-page";

const Page = async (props : {params : Promise<{projectId : string}>}) => {
    const params = await props.params;
    const {projectId} = params;

    const project = await prisma.project.findUnique({where : {id : projectId}, select : {name : true}});

    return <ProjectPage name={project!.name} projectId = {projectId} />

}

export default Page