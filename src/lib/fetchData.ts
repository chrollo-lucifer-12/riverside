"use server"

export const getProjectVideos = async (projectId : string) => {
    const videos = await prisma?.media.findMany({where : {projectId}});
    return videos;
}

export const getProjects = async (slug : string) =>  {
    const projects = await prisma?.project.findMany({where : {studio : {slug}}});
    return projects
}