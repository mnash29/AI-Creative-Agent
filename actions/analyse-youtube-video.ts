"use server";

import { redirect } from "next/navigation";
export async function AnalyseYoutubeVideo(formData: FormData) {
    const url = formData.get("url")?.toString();

    if (!url) return;

    // TODO: implement videoId
    const videoId = "abc";
    if (!videoId) return;

    redirect(`/video/${videoId}/analysis`);
}