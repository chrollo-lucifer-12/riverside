"use client";
import StartCreating from "@/components/project-page/start-creating";

interface ProjectPageProps {
    name: string;
    projectId: string;
}

const ProjectPage = ({ name, projectId }: ProjectPageProps) => {

    return (
        <div className="pt-20 pb-20 pl-8 pr-8 flex flex-col ">
            <input
                value={name}
                className="text-2xl font-bold transition duration-200 w-full appearance-none outline-none"
                placeholder="Untitled"
            />
            <StartCreating projectId = {projectId}/>
        </div>
    );
};

export default ProjectPage;