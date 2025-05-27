"use client"

interface CustomInputProps {
    inputMode : 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search' | "password"
    placeholder ?: string
    defaultValue ?: string
    hidden ?: boolean
    name ?: string
    error ?: string | string[]
}

const CustomInput = ({error,placeholder,name,defaultValue,hidden,inputMode} : CustomInputProps) => {
    return <input type={inputMode} placeholder={placeholder} defaultValue={defaultValue} hidden={hidden} name={name} id={name} className={`outline-none rounded-lg p-2 text-white  bg-input hover:bg-gray-9  transition duration-100 focus:border focus:border-purple-400 text-sm placeholder-gray-8 ${error && "border-1 border-red-300"}`} />
}
export default CustomInput