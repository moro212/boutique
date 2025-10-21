
import { GoogleGenAI } from "@google/genai";

const getStyleAdvice = async (userInput: string): Promise<string> => {
    // IMPORTANT: You must have the API_KEY environment variable set for this to work.
    if (!process.env.API_KEY) {
        throw new Error("API_KEY environment variable not set.");
    }
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    const model = 'gemini-2.5-flash';
    const prompt = `You are a fashion stylist for Diamantine, a brand specializing in modern, elegant traditional wear (caftans, djellabas, kmiss, mikhwar, zif). A customer is looking for style advice. Their request is: "${userInput}". Based on the brand's style, suggest 2-3 elegant outfit ideas. Describe each outfit briefly. Keep the response concise and inspiring. Use markdown for formatting (e.g., bold headings for each outfit idea).`;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });
        
        return response.text;
    } catch (error) {
        console.error("Error fetching style advice from Gemini:", error);
        return "Je suis désolé, je ne peux pas fournir de conseil pour le moment. Veuillez réessayer plus tard.";
    }
};

export { getStyleAdvice };