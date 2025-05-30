"use server"

export const UpdateProjectTitle = async (projectId : string, newTitle : string) => {
    try {
        await prisma?.project.update({where : {id : projectId}, data : {name : newTitle}});
    } catch (e) {
        console.log(e);
    }
}