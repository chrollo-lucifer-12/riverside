import {ReactNode} from "react";
import Sidebar from "@/components/sidebar";

const Layout = ({children} : {children : ReactNode}) => {
    return <main className={"min-h-screen flex-1 bg-[#0d0d0d]"}>
        <Sidebar/>
        {children}
    </main>
}

export default Layout