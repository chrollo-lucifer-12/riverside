"use client";

import { startTransition, useOptimistic, useState, useCallback } from "react";
import { UpdateProjectTitle } from "@/actions/projects";
import { debounce } from "lodash";
import StartCreating from "@/components/project-page/start-creating";

interface ProjectPageProps {
    name: string;
    projectId: string;
}

const ProjectPage = ({ name, projectId }: ProjectPageProps) => {
    const [title, setTitle] = useState(name);

    const [optimisticTitle, setOptimisticTitle] = useOptimistic(
        title,
        (_state, newTitle: string) => newTitle || "Untitled"
    );

    const debouncedUpdate = useCallback(
        debounce(async (newTitle: string) => {
            await UpdateProjectTitle(projectId, newTitle);
            setTitle(newTitle);
        }, 500),
        [projectId]
    );

    return (
        <div className="pt-20 pb-20 pl-8 pr-8 flex flex-col ">
            <input
                value={optimisticTitle}
                onChange={(e) => {
                    const newTitle = e.target.value;
                    startTransition(() => {
                        setOptimisticTitle(newTitle);
                    });
                    debouncedUpdate(newTitle);
                }}
                className="text-2xl font-bold transition duration-200 w-full appearance-none outline-none"
                placeholder="Untitled"
            />

            <StartCreating/>

        </div>
    );
};

export default ProjectPage;