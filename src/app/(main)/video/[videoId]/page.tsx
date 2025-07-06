import {prisma} from "@/lib/db";
import VideoPlayer from "@/components/video-display/video-player";

const VideoPage = async (props : {params : Promise<{videoId : string}>}) => {

    const  params  = await props.params;
    const videoId = params.videoId;

    const video = await prisma.media.findUnique({where : {id : videoId}});


    return <VideoPlayer video={video!}/>
}

export default VideoPage