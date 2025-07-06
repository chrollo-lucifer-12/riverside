"use client"

import Image from "next/image";
import CustomButton from "@/components/custom-button";
import {ArrowDownWideNarrowIcon, FolderClosedIcon, ListIcon, PlusIcon, SearchIcon} from "lucide-react";
import Link from "next/link";
import {useQueryData} from "@/hooks/useQueryData";
import {getProjects} from "@/lib/fetchData";
import {Projects} from "@/lib/definitions";
import ProjectSkeleton from "@/components/skeletons/project-skeleton";

interface StudioPageProps {
    slug : string
}

const ProjectsPage = ({ slug} : StudioPageProps) => {

    const {data,isPending} = useQueryData(["projects"], () => getProjects(slug));

    if (isPending) {
        return <ProjectSkeleton/>
    }

    const projects = data as Projects

    if (!projects.length) {
        return <div className={"flex flex-col gap-y-4 items-center justify-center mt-[300px]"}>
            <Image src={"/projects-empty.png"} alt={""} width={120} height={120}/>
            <p className={"text-lg font-bold"}>Your masterpiece from A to Z</p>
            <p className={"text-xs text-gray-7"}>Stay organized and keep all your episode assets
                in one spot for easy access.</p>
            <CustomButton type={"button"} cn={"bg-blue-500 hover:bg-blue-[#3182ce]"}>
                <div className={"flex gap-x-2 items-center pl-4 pr-4"}>
                    <PlusIcon className={"w-4 h-4"}/>
                    <p className={"text-sm font-semibold"}>New Project</p>
                </div>
            </CustomButton>
        </div>
    }

    return <div className={"w-full pt-20 pl-10 pr-10 flex flex-col gap-y-2"}>
        <div className={"flex items-center justify-between w-full"}>
            <p className={"font-bold text-xl"}>
                Projects
            </p>
            <div className={"flex gap-x-6 items-center"}>
                <div className={"p-2 rounded-md hover:bg-gray-8 cursor-pointer transition duration-150"}>
                    <SearchIcon className={"w-4 h-4"}/>
                </div>
                <div className={"p-2 rounded-md hover:bg-gray-8 cursor-pointer transition duration-150"}>
                    <ArrowDownWideNarrowIcon className={"w-4 h-4"}/>
                </div>
                <div className={"p-2 rounded-md hover:bg-gray-8 cursor-pointer transition duration-150"}>
                    <ListIcon className={"w-4 h-4"}/>
                </div>
                <CustomButton type={"button"}>
                    <div className={"flex items-center gap-x-2"}>
                        <PlusIcon className={"w-4 h-4"}/>
                        <p className={"text-sm font-semibold"}>New</p>
                    </div>
                </CustomButton>
            </div>
        </div>

        <div className={"mt-4 flex gap-x-2 min-w-[100vh]"}>
            {
                projects.map((project,i) => (
                    <Link href={`/dashboard/studio/${slug}/projects/${project.id}`} key={i} className={"mt-10 flex flex-col  gap-y-2"}>
                        <div className={"rounded-md w-[360px] h-[215px] flex items-center justify-center cursor-pointer bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-inner hover:from-gray-9 hover:to-gray-11 transition duration-200"}>
                            <FolderClosedIcon className={"w-8 h-8 text-gray-7"}/></div>
                        <p className={"font-semibold"}>{project.name}</p>
                    </Link>
                ))
            }
        </div>
    </div>
}

export default ProjectsPage