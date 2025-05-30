"use client"

import Image from "next/image";
import CustomButton from "@/components/custom-button";
import {PlusIcon} from "lucide-react";

interface StudioPageProps {
    projects : {name : string}[]
}

const ProjectsPage = ({projects} : StudioPageProps) => {

    if (!projects.length) {
        return <div className={"flex flex-col gap-y-4 items-center justify-center mt-[300px]"}>
            <Image src={"/projects-empty.png"} alt={""} width={120} height={120} />
            <p className={"text-lg font-bold"}>Your masterpiece from A to Z</p>
            <p className={"text-xs text-gray-7"}>Stay organized and keep all your episode assets
                in one spot for easy access.</p>
            <CustomButton type={"button"} cn={"bg-blue-500 hover:bg-blue-[#3182ce]"}>
                <div className={"flex gap-x-2 items-center pl-4 pr-4"}>
                    <PlusIcon className={"w-4 h-4"} />
                    <p className={"text-sm font-semibold"}>New Project</p>
                </div>
            </CustomButton>
        </div>
    }

    return <div>

    </div>

}

export default ProjectsPage