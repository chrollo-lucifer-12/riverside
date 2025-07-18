"use client"

import {TrashIcon, XIcon} from "lucide-react";
import Image from "next/image";
import {useState} from "react";
import CustomButton from "@/components/custom-button";
import {useMutationData} from "@/hooks/useMutationData";
import {UploadFile} from "@/actions/video";

type UploadVideoInput = {
    selectedFile: File;
    projectId: string;
};

type UploadVideoResponse = {
    message: string;
    videoId: string;
    url: string;
};


const VideoUploadDialog = ({setIsOpen, projectId} : {setIsOpen : (res : boolean) => void, projectId : string}) => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const { isPending, mutate } = useMutationData(
        ["upload-video"],
        (data) => UploadFile(data.selectedFile, data.projectId),
        "project-videos"
    );


    const formatSizeMB = (bytes: number) => {
        return (bytes / (1024 * 1024)).toFixed(2);
    };

    return <div
        className="absolute border border-gray-10 z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-2 rounded-[16px] bg-gray-12 p-6">
        <header className={"w-full flex justify-between items-center"}>
            <p className={"text-lg font-bold"}>Upload file</p>
            <XIcon className={"cursor-pointer w-3 h-3 text-gray-6"} onClick={() => {
                setIsOpen(false)
            }}/>
        </header>
        <p className={"text-sm text-gray-7"}>Upload audio or video files to use in Riverside.</p>
        {
            selectedFile ? (
                <div className={"flex justify-between items-center mt-4"}>
                    <div className={"flex items-center gap-x-6"}>
                        <video width={"20%"}>
                            <source src={URL.createObjectURL(selectedFile)}/>
                        </video>
                        <div className={"flex flex-col gap-y-2"}>
                            <p className={"font-semibold"}>{selectedFile.name}</p>
                            <p className={"text-xs text-gray-7"}>{formatSizeMB(selectedFile.size)} MB</p>
                        </div>
                    </div>
                    <TrashIcon className={"w-10 h-10 cursor-pointer"} onClick={() => {
                        setSelectedFile(null)
                    }}/>
                </div>
            ) : (<div
                className="mt-4 bg-gray-11 w-[600px] flex items-center justify-center p-[80px] rounded-md border-3 border-dashed border-gray-9">
                <div>
                    <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
                        <Image src="/select-file.png" alt="" width={80} height={80}/>
                        <p className={"text-purple-600 text-xs font-semibold"}>Select File</p>
                    </label>
                    <input
                        type="file"
                        accept=".mp3,.wav,.mp4"
                        id="file-upload"
                        className="hidden"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) setSelectedFile(file);
                        }}
                    />
                </div>
            </div>)
        }
        {
            selectedFile &&  <footer className={"mt-4 w-full"}>
                <CustomButton onClick={() => mutate({selectedFile,projectId})} disabled={isPending} type={"button"} cn={"w-full bg-blue-500 hover:bg-blue-600"}>
                    {
                        isPending ? ( <p className={"font-bold text-white"}>
                              Uploading
                        </p>) : (<p className={"font-bold text-white"}>
                            Upload
                        </p>)
                    }
                </CustomButton>
            </footer>
        }

    </div>
}

export default VideoUploadDialog