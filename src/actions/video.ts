"use server"
import {prisma}  from "@/lib/db"
export const UploadFile = async (title : string, projectId : string) => {
    try {
        const video = await prisma.media.create({
            data : {
                isProcessing : true,
                title,
                download_url : "",
                preview_url : "",
                projectId,
                type : "VIDEO"
            }
        })


        return video.id;
    } catch (e) {
        console.log(e);
    }
}

