import {ReactNode} from "react";
import Sidebar from "@/components/sidebar";

const Layout = ({children} : {children : ReactNode}) => {
    return <main className={"min-h-screen flex  bg-gray-12"}>
        <Sidebar/>
        <div className="mt-2 mr-2 w-[83%] rounded-t-xl border border-gray-10 bg-[#0d0d0d]">
            {children}
        </div>
    </main>
}

export default Layout