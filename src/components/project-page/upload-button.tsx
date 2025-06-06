"use client"

import {  UploadIcon} from "lucide-react";
import ButtonLayout from "@/components/project-page/button-layout";
import {useState} from "react";
import VideoUploadDialog from "@/components/project-page/video-upload-dialog";

const UploadButton = ({projectId} : {projectId :string}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {
                isOpen && <VideoUploadDialog setIsOpen={setIsOpen} projectId = {projectId} />
            }
            <ButtonLayout onClick={() => {
                setIsOpen(true)
            }} heading={"Upload"} description={"Edit and transcribe files."} icon={UploadIcon}/>
        </>
    )
}

export default UploadButton