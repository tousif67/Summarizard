
import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generatePDFSummaryFromOpenAI(pdfText: string) {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
        {
            role: "system",
            content: "You are a helpful assistant that can summarize PDF files."
        },
        {
            role: "user",
            content: "Are semicolons optional in JavaScript?",
        },
    ],
    temperature:0.7,
    max_tokens: 1500,
});
  return completion.choices[0].message.content;
} catch (error) {
    if(error instanceof OpenAI.APIError) {
        throw new Error("Rate limit exceeded");
    }
    throw error;
}
}
