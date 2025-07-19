"use server"
import {prisma} from "@/lib/db"

export const getProjectVideos = async (projectId : string) => {
    const videos = await prisma.metadata.findMany({where : {
        video : {
            projectId
        }
        }, include : {
        video : {
            select : {
                isProcessing : true
            }
        }
        }})
    return videos;
}

export const getProjects = async (slug : string) =>  {
    const projects = await prisma?.project.findMany({where : {studio : {slug}}});
    return projects
}