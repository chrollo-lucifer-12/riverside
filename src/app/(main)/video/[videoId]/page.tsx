import {prisma} from "@/lib/db";
import VideoEditor from "@/components/video-display/video-editor";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";


const VideoPage = async (props : {params : Promise<{videoId : string}>}) => {

    const  params  = await props.params;
    const videoId = params.videoId;

   // const video = await prisma.metadata.findUnique({where : {mediaId : videoId}})

    const queryClient = new QueryClient();


    await queryClient.prefetchQuery({
        queryKey : ["video", videoId],
        queryFn :  () =>  prisma.metadata.findUnique({where : {mediaId : videoId}})
    })

    return <HydrationBoundary state={dehydrate(queryClient)}>
        <VideoEditor videoId={videoId}/>
    </HydrationBoundary>

}

export default VideoPage