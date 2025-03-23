"use server";

import { fetchAndExtractPDFText } from "@/utils/langchain";
import { generatePDFSummaryFromOpenAI } from "@/utils/open-ai";
export async function generatePDFSummary(uploadResponse: {
    serverData: {
        userId: string;
        file: {
            url: string;
            name: string;
        }
    }
}) {
    if (!uploadResponse) {
        return {
            success: false,
        message:"file upload failed",
            data: null
    }
    }

    const{serverData:{
        userId,
        file:{url:pdfUrl, name:fileName}
    }} = uploadResponse;

    if (!pdfUrl) {
        return {
            success: false,
            message: "PDF file not found",
            data: null
        }
    }
    try{
        const pdfText = await fetchAndExtractPDFText(pdfUrl);
        console.log({pdfText});

        let summary ;
        try{
         summary = await generatePDFSummaryFromOpenAI(pdfUrl);
            console.log({summary});
        }catch(error){
            console.error("Error generating PDF summary:", error);
        }
        if(!summary){
            return {
                success: false,
                message: "Error generating PDF summary",
                data: null
            }
        }
    }catch(error){
        return {
            success: false,
            message: "Error fetching PDF text",
            data: null
        }
    }
    }
    
    

