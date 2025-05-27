"use client"

import {useState} from "react";
import UserMenu from "@/components/sidebar/user-menu";
import {motion} from "framer-motion"

const UserAvatar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return <div tabIndex={0} onBlur={() => setIsOpen(false)} className={"flex flex-col gap-y-2  ml-6 mb-6"}>
        {
            isOpen && <motion.div key={"menu"}  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  transition={{ duration: 0.3, ease: "easeInOut" }}>
                <UserMenu/>
            </motion.div>
        }
        <div className={"bg-white w-8 h-8 rounded-full hover:ring-6 hover:ring-gray-10 cursor-pointer transition duration-200"} onClick={() => setIsOpen(prevState => !prevState)} >

        </div>
    </div>
}

export default UserAvatar