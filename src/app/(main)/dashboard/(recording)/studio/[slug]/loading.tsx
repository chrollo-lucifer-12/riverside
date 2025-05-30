const Loading = () => {
    return <div className={"w-full pt-20 pl-8 pr-8 pb-20"}>
        <div className={"flex w-full justify-between items-center"}>
            <div className={"rounded-lg bg-gray-8 w-20 h-10"} />
            <div  className={"rounded-lg bg-gray-8 w-20 h-10"}/>
        </div>
        <div className={"mt-10 flex flex-col  gap-y-2"}>
            <div className={"bg-gray-8 rounded-md w-[360px] h-[215px]"}/>
            <div className={"bg-gray-8 rounded-2xl w-[100px] h-[10px]"} />
        </div>
    </div>
}

export default Loading