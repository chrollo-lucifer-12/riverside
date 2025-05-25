import Image from "next/image";
import {CirclePlayIcon} from "lucide-react"

const VideoDisplay = ({src, title} : {src : string, title : string}) => {
    return <div className={"text-gray-6 cursor-pointer font-[300] text-[16px] line-[22px] rounded-md bg-gray-11 w-[300px] p-2  flex flex-col gap-y-1"}>
       <Image src={src}
              alt={title}
              width={514}
              height={289}
              className="w-full rounded-md" />
        <div className={"flex justify-between items-center mt-1 mb-2"}>
            <p className={"max-w-[150px]"}>{title}</p>
            <CirclePlayIcon className={"w-6 h-6"} />
        </div>
    </div>
}

export default VideoDisplay