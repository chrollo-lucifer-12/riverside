"use server"
import {prisma}  from "@/lib/db"
import axios from "axios";
export const UploadFile = async (file : File, projectId : string) => {
    try {
      const video =  await prisma.media.create({
            data : {
                isProcessing : true,
                title : file.name,
                download_url : "",
                preview_url : "",
                type : "VIDEO",
                projectId
            }
        })
        const formData = new FormData();
        formData.append("file", file);
        formData.append("videoId", video.id)
        await axios.post("http://localhost:4000/api/v1/upload", formData, {
             headers: {
                 'Content-Type': 'multipart/form-data',
             },
         });
    } catch (e) {
        console.log(e);
    }
}

