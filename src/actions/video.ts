"use server"
import {prisma}  from "@/lib/db"
import axios from "axios";

export const UploadFile = async (file : File, projectId : string) => {
    try {
      const video =  await prisma.media.create({
            data : {
                isProcessing : true,
                type : "VIDEO",
                projectId
            }
        })
        await prisma.metadata.create({
            data : {
                mediaId : video.id,
                filename : file.name,
            }
        })
        const formData = new FormData();
        formData.append("file", file);
        formData.append("videoId", video.id)
        const res = await axios.post("http://localhost:4000/api/v1/upload", formData, {
             headers: {
                 'Content-Type': 'multipart/form-data',
             },
         });
        console.log(res.data);
    } catch (e) {
        console.log(e);
    }
}

