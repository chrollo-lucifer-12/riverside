"use client"

interface FormErrorProps {
    errors : string[]
}

const FormError = ({errors} : FormErrorProps) => {

   // console.log(errors);
    return <div className={"bg-[#312525] text-[#ff9999] text-xs font-semibold rounded-lg pt-[8px] pb-[8px] pl-[16px] pr-[16px]"}>
        <ul  className={"flex flex-col gap-y-0.5 list-disc"}>
            {
                errors.map((error) => <li>{error}</li>)
            }
        </ul>
    </div>
}

export default FormError