"use client"

import PlanButton from "@/components/project-page/plan-button";
import RecordButton from "@/components/project-page/record-button";
import UploadButton from "@/components/project-page/upload-button";
import EditButton from "@/components/project-page/edit-button";
import VoiceButton from "@/components/project-page/voice-button";

const StartCreating = () => {
    return <div className={"mt-30 flex flex-col gap-y-2 items-center justify-center"}>
        <h1 className={"font-bold text-xl"}>Start Creating</h1>
        <p className={"text-sm text-gray-7"}>Record something new or dive into editing.
        </p>
        <div className={"mt-8 flex w-full justify-between pl-10 pr-10"}>
            <PlanButton/>
            <RecordButton/>
            <UploadButton/>
            <EditButton/>
            <VoiceButton/>
        </div>
    </div>
}


export default StartCreating