import {prisma} from "@/lib/db";

export async function POST(req : Request) {
    try {
        const body = await req.json();
        console.log(body);

        const {playbackUrl, thumbnailUrl, videoId} = body;

        await prisma.media.update({where : {id : videoId}, data : {
            preview_url : thumbnailUrl,
                download_url : playbackUrl,
                isProcessing : false,
            }})

    } catch (e) {
        console.log(e);
    }
}