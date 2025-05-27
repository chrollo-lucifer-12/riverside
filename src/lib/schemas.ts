import {z, ZodSchema} from "zod";

const NAME_REQUIRED_ERROR = "Name is required."
const EMAIL_REQUIRED_ERROR = "Please enter a valid email address."
const PASSWORD_ERRORS = {
    REQUIRED_ERROR : "Password should contain at least 8 characters.",
    CAPITAL_ERROR : "Password should contain at least 1 capital letter.",
    LOWER_ERROR : "Password should contain at least 1 lower-case letter.",
    SPECIAL_CHARACTER_ERROR : "Password should contain at least 1 special character (!@#$..)."
}

export const EmailSignupFormSchema = z.object({
    name : z.string().min(1,{message : NAME_REQUIRED_ERROR}),
    email : z.string().email({message : EMAIL_REQUIRED_ERROR}),
    password : z.string().min(8, {message : PASSWORD_ERRORS.REQUIRED_ERROR}).refine((password) => /[A-Z]/.test(password), {message : PASSWORD_ERRORS.CAPITAL_ERROR}).refine((password) => /[a-z]/.test(password),{message : PASSWORD_ERRORS.LOWER_ERROR}).refine((password) => /[(!@#$%^&*)]/.test(password),{message : PASSWORD_ERRORS.SPECIAL_CHARACTER_ERROR})
})




export const validateData = <T extends z.ZodTypeAny>(schema: T, data: unknown) => {
    const result = schema.safeParse(data);

    if (!result.success) {
        return {
            data: null,
            errors: result.error.flatten().fieldErrors
        };
    }

    return {
        data: result.data,
        errors: null
    };
};
