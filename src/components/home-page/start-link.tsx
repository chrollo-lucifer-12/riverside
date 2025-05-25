import Link from "next/link";
import React from "react";

const StartLink = () => {
    return <Link href={"/"}
                 className={"bg-purple-500 text-white pt-[15px] pr-[30px] pb-[16px] pl-[30px] text-center rounded-[4px] text-[14px] font-[700] line-[17px] mt-6 w-[200px] hover:bg-purple-500 transition duration-200"}>
        Start for free
    </Link>
}

export default StartLink