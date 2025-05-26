const FeatureTitle = ({title, description, titleColor, descColor} : {title : string, description ?: string, titleColor : string, descColor ?: string}) => {
    return <div className={"flex flex-col gap-y-2 items-center justify-center pl-2 pr-2 sm:p-0"}>
        <p className={`sm:text-[56px] text-[30px] text-center font-[800] line-[57px]`} style={{color : titleColor}} >{title}</p>
        <p className={`mb-[13px] sm:text-[18px] text-[15px] line-[26px] font-[300] max-w-[500px] text-center`} style={{color : descColor}}>{description}</p>
    </div>
}

export default FeatureTitle