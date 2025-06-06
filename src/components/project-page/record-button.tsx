import { VideoIcon} from "lucide-react";
import ButtonLayout from "@/components/project-page/button-layout";

const RecordButton = () => {
    return <ButtonLayout heading={"Record"} description={"Record or live stream."} icon={VideoIcon}/>
}

export default RecordButton