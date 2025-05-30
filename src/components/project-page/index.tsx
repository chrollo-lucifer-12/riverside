"use client";

import { startTransition, useOptimistic, useState } from "react";
import {UpdateProjectTitle} from "@/actions/projects";

interface ProjectPageProps {
    name: string;
    projectId : string
}

const ProjectPage = ({ name, projectId }: ProjectPageProps) => {
    const [title, setTitle] = useState(name);

    const [optimisticTitle, setOptimisticTitle] = useOptimistic(
        title,
        (_state, newTitle: string) => newTitle || "Untitled"
    );

    const updateProjectTitle = async (newTitle: string) => {
        await UpdateProjectTitle(projectId, newTitle)
        setTitle(newTitle);
    };

    return (
        <div className="pt-20 pb-20 pl-8 pr-8">
            <input
                value={optimisticTitle}
                onChange={(e) => {
                    const newTitle = e.target.value;

                    startTransition(() => {
                        setOptimisticTitle(newTitle);
                    });

                    updateProjectTitle(newTitle);
                }}
                className="text-2xl font-bold transition duration-200 w-full appearance-none outline-none"
                placeholder="Untitled"
            />
        </div>
    );
};

export default ProjectPage;
