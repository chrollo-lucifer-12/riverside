"use client"

import {ProjectVideos} from "@/lib/definitions";
import Image from "next/image";
import {useRouter} from "next/navigation";

const VideoDisplay = ({videos} : {videos : ProjectVideos}) => {
    const router = useRouter()
    return  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
        {videos.map((video) => (
            <div
                key={video.id}
                className="border border-gray-10 rounded-lg p-4 shadow-sm"
            >
                {
                    video.preview_url ? (<Image
                        className="w-full rounded-md"
                        onClick={() => {
                            router.push(`/video/${video.id}`)
                        }}
                        src={video.preview_url}
                        width={32}
                        height={20}
                        alt={""}
                    />) : (<div className={"w-full"}>loading</div>)
                }

                <div className="mt-2">
                    <p className="font-semibold text-lg truncate">{video.filename}</p>
                    <p className="text-sm text-gray-500">
                        {video.video.isProcessing ? "Processing..." : "Ready"}
                    </p>
                    <p className="text-xs text-gray-400">
                        {new Date(video.createdAt).toLocaleString()}
                    </p>
                </div>
            </div>
        ))}
    </div>
}

export default VideoDisplay