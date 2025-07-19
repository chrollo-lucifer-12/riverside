"use client"

import { Metadata } from "@/generated/prisma";
import { useQueryData } from "@/hooks/useQueryData";
import { prisma } from "@/lib/db";
import { useRef, useState, useEffect } from "react";
import { PlayIcon, RedoDotIcon, UndoDotIcon } from "lucide-react";

const VideoEditor = ({ videoId }: { videoId: string }) => {
    const { data, isPending } = useQueryData(["video", videoId], () =>
        prisma.metadata.findUnique({ where: { mediaId: videoId } })
    );
    const videoRef = useRef<HTMLVideoElement>(null);
    const [timestamp, setTimestamp] = useState<number>(0);

    const video = data as Metadata;

    const handleJumpToTime = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = timestamp;
        }
    };

    const handlePlay = async () => {
        if (videoRef.current?.paused) {
            await videoRef.current?.play();
        } else {
            videoRef.current?.pause();
        }
    };

    const handleUndo = () => {
        if (videoRef.current) {
            const updatedTimeStamp = Math.max(0, videoRef.current.currentTime - 10);
            videoRef.current.currentTime = updatedTimeStamp;
            setTimestamp(updatedTimeStamp);
        }
    };

    const handleRedo = () => {
        if (videoRef.current) {
            const updatedTimeStamp = Math.min(
                videoRef.current.currentTime + 10,
                videoRef.current.duration
            );
            videoRef.current.currentTime = updatedTimeStamp;
            setTimestamp(updatedTimeStamp);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setTimestamp(videoRef.current.currentTime);
        }
    };

    if (isPending) return <div>loading...</div>;

    return (
        <div className="w-full h-screen mx-auto space-y-4">
            <video
                ref={videoRef}
                src={video.preview_url!}
                preload="metadata"
                className="w-full rounded border h-[40%]"
                onTimeUpdate={handleTimeUpdate}
            />

            <div className="w-full h-[60%] border">
                <div className="w-full px-4">
                    <progress
                        className="w-full"
                        max={videoRef.current?.duration || 1}
                        value={timestamp}
                    />
                </div>
                <div className="p-2 flex gap-2 items-center justify-center">
                    <UndoDotIcon onClick={handleUndo} className="cursor-pointer" />
                    <PlayIcon onClick={handlePlay} className="cursor-pointer" />
                    <RedoDotIcon onClick={handleRedo} className="cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default VideoEditor;
