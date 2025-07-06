"use client"

import {Media} from "@/generated/prisma";
import {useRef, useEffect} from "react";
import Hls from 'hls.js'

const VideoPlayer = ({video} : {video : Media}) => {

    const videoRef = useRef<HTMLVideoElement>(null)
    useEffect(() => {
        if (videoRef.current) {
            if (Hls.isSupported()) {
                const hls = new Hls()
                hls.loadSource(video.download_url)
                hls.attachMedia(videoRef.current)

                return () => {
                    hls.destroy()
                }
            } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
                videoRef.current.src = video.download_url
            }
        }
    }, [video])


    return <video
        ref={videoRef}
        controls
        className="w-full rounded-lg"

    />
}

export default VideoPlayer