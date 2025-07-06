"use client";

import StartCreating from "@/components/project-page/start-creating";
import { useQueryData } from "@/hooks/useQueryData";
import { getProjectVideos } from "@/lib/fetchData";
import { ProjectVideos } from "@/lib/definitions";
import CustomButton from "@/components/custom-button";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import VideoUploadDialog from "@/components/project-page/video-upload-dialog";
import Image from "next/image";

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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        className="border border-gray-10 rounded-lg p-4 shadow-sm"
                    >
                        {
                            video.preview_url ? (<Image
                                className="w-full rounded-md"
                                src={video.preview_url}
                                width={32}
                                height={20}
                                alt={""}
                            />) : (<div className={"w-full"}>loading</div>)
                        }

                        <div className="mt-2">
                            <p className="font-semibold text-lg truncate">{video.title}</p>
                            <p className="text-sm text-gray-500">
                                {video.isProcessing ? "Processing..." : "Ready"}
                            </p>
                            <p className="text-xs text-gray-400">
                                {new Date(video.createdAt).toLocaleString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
