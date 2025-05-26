const FeatureTitle = ({title, description, titleColor, descColor} : {title : string, description ?: string, titleColor : string, descColor ?: string}) => {
    return <div className={"flex flex-col gap-y-2 items-center justify-center"}>
        <p className={`text-[56px] font-[800] line-[57px]`} style={{color : titleColor}} >{title}</p>
        <p className={`mb-[13px] text-[18px] line-[26px] font-[300] max-w-[500px] text-center`} style={{color : descColor}}>{description}</p>
    </div>
}

export default FeatureTitle