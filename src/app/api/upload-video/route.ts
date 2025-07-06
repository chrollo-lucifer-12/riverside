import { NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import axios from "axios";
import FormData from "form-data"; // Node.js form-data
import { Readable } from "stream";

// 👇 node-compatible FormData; not web FormData
export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();

        const file = formData.get("file") as File;
        const projectId = formData.get("projectId") as string;

        if (!file || !projectId) {
            return new Response("Missing file or projectId", { status: 400 });
        }

        const video = await prisma.media.create({
            data: {
                isProcessing: true,
                title: file.name,
                download_url: "",
                preview_url: "",
                type: "VIDEO",
                projectId,
            },
        });
        console.log(video);
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const nodeForm = new FormData();
        nodeForm.append("file", buffer, file.name);
        nodeForm.append("videoId", video.id);
        await axios.post("http://localhost:4000/api/v1/upload", nodeForm, {
            headers: nodeForm.getHeaders(),
            maxBodyLength: Infinity, // 👈 important for large files
        });

        return new Response(JSON.stringify({ message: "Uploaded", videoId: video.id }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (e) {
        console.error("Upload error:", e);
        return new Response("Server error", { status: 500 });
    }
}
