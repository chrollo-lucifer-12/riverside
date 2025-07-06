"use client";

import StartCreating from "@/components/project-page/start-creating";
import { useQueryData } from "@/hooks/useQueryData";
import { getProjectVideos } from "@/lib/fetchData";
import { ProjectVideos } from "@/lib/definitions";
import CustomButton from "@/components/custom-button";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import VideoUploadDialog from "@/components/project-page/video-upload-dialog";
import VideoDisplay from "@/components/video-display";

interface ProjectPageProps {
    name: string;
    projectId: string;
}

const ProjectPage = ({ name, projectId }: ProjectPageProps) => {
    const [open, setOpen] = useState(false);

    const { data, isPending } = useQueryData(["project-videos"], () =>
        getProjectVideos(projectId)
    );

    const videos = data as ProjectVideos;
    console.log("videos ", videos);

    if (isPending) {
        return <div>loading...</div>;
    }

    if (!videos.length) {
        return (
            <div className="pt-20 pb-20 pl-8 pr-8 flex flex-col">
                <input
                    defaultValue={name}
                    className="text-2xl font-bold transition duration-200 w-full appearance-none outline-none"
                    placeholder="Untitled"
                />
                <StartCreating projectId={projectId} />
            </div>
        );
    }

    return (
        <div className="pt-20 pb-20 pl-8 pr-8">
            {open && (
                <VideoUploadDialog setIsOpen={setOpen} projectId={projectId} />
            )}

            <div className="flex justify-between items-center mb-6">
                <p className="text-2xl font-bold">{name}</p>
                <div className="flex items-center gap-x-2">
                    <CustomButton type="button">
                        <div className="flex items-center gap-x-2">
                            <PlusIcon className="w-4 h-4" />
                            <p className="font-semibold">Share</p>
                        </div>
                    </CustomButton>
                    <CustomButton
                        type="button"
                        cn="bg-blue-500"
                        onClick={() => setOpen((prev) => !prev)}
                    >
                        <div className="flex items-center gap-x-2">
                            <PlusIcon className="w-4 h-4" />
                            <p className="font-semibold">Create</p>
                        </div>
                    </CustomButton>
                </div>
            </div>

           <VideoDisplay videos={videos}/>
        </div>
    );
};

export default ProjectPage;
