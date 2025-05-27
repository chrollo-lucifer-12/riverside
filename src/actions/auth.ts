"use server"

import {EmailSignupFormSchema, validateData} from "@/lib/schemas";
import {EmailSignupActionState} from "@/lib/definitions";

export const EmailSignupAction = async (state : EmailSignupActionState , formData : FormData) => {
    const data = {
        name : formData.get("name"),
        email : formData.get("email"),
        password : formData.get("password")
    }

    const validationResult = validateData(EmailSignupFormSchema, data)

    if (validationResult.errors) {
        console.log(validationResult.errors);
        return {
            errors : validationResult.errors
        }
    }

    console.log(validationResult.data)
}