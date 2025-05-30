import { prisma } from "@/lib/db";
import ProjectsPage from "@/components/projects-page";

const Page = async (props : {params : Promise<{slug : string}>}) => {
    const  params  = await props.params;
    const slug = params.slug;

    const projects = await prisma.project.findMany({
        where: {
            studio: { slug },
        },
        select: {
            name: true,
        },
    });

    return (
       <ProjectsPage projects={projects}/>
    );
};

export default Page;
