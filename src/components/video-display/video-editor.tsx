"use client"

import { Metadata } from "@/generated/prisma";
import { useQueryData } from "@/hooks/useQueryData";
import { prisma } from "@/lib/db";
import { useRef, useState, useEffect } from "react";
import { PlayIcon, RedoDotIcon, UndoDotIcon } from "lucide-react";
import {getPcmData, extractAudioBufferFromVideo, drawOnCanvas} from "@/lib/waveform"

const VideoEditor = ({ videoId }: { videoId: string }) => {
    const { data, isPending } = useQueryData(["video", videoId], () =>
        prisma.metadata.findUnique({ where: { mediaId: videoId } })
    );
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [timestamp, setTimestamp] = useState<number>(0);
    const [samples, setSamples] = useState<number[]>([])
    const [isDragging, setIsDragging] = useState(false);

    const video = data as Metadata;

    useEffect(() => {
        const fetchAndDecode = async () => {
            if (!canvasRef.current) return;
            try {
                const audioBuffer = await extractAudioBufferFromVideo(video.preview_url!);
                const pcmSamples = getPcmData(audioBuffer);
                setSamples(pcmSamples)
            } catch (err) {
                console.error("Error decoding video audio", err);
            }
        };

        fetchAndDecode();
    },[samples])

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
        if (videoRef.current && canvasRef.current) {
            setTimestamp(videoRef.current.currentTime);
            drawOnCanvas(samples, canvasRef.current, videoRef.current.duration, timestamp)
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
                        className="w-full cursor-pointer"
                        max={videoRef.current?.duration || 1}
                        value={timestamp}
                        onClick={(e) => {
                            const progress = e.currentTarget as HTMLProgressElement;
                            const rect = progress.getBoundingClientRect();
                            const clickX = e.clientX - rect.left;
                            const percentage = clickX / rect.width;

                            if (videoRef.current) {
                                const newTime = percentage * videoRef.current.duration;
                                videoRef.current.currentTime = newTime;
                                setTimestamp(newTime);
                            }
                        }}
                    />
                </div>
                <div className="p-2 flex gap-2 items-center justify-center">
                    <UndoDotIcon onClick={handleUndo} className="cursor-pointer" />
                    <PlayIcon onClick={handlePlay} className="cursor-pointer" />
                    <RedoDotIcon onClick={handleRedo} className="cursor-pointer" />
                </div>
                <div
                    className="relative w-full h-20"
                    onMouseMove={(e) => {
                        if (!isDragging || !videoRef.current) return;
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const percentage = Math.min(Math.max(x / rect.width, 0), 1);
                        const newTime = percentage * videoRef.current.duration;
                        videoRef.current.currentTime = newTime;
                        setTimestamp(newTime);
                    }}
                    onMouseUp={() => setIsDragging(false)}
                    onMouseLeave={() => setIsDragging(false)}
                >
                    <canvas ref={canvasRef} className="w-full h-20" />
                    <div
                        className="absolute top-0 bottom-0 w-[2px] bg-red-500 cursor-pointer z-10"
                        style={{
                            left: `${(timestamp / (videoRef.current?.duration || 1)) * 100}%`,
                            transform: "translateX(-1px)",
                        }}
                        onMouseDown={() => setIsDragging(true)}
                    />
                </div>


            </div>
        </div>
    );
};

export default VideoEditor;
