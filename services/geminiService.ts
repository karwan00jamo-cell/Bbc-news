
import { GoogleGenAI, Type } from "@google/genai";
import { Story, AIInsight } from "../types";

export const getAIInsight = async (story: Story): Promise<AIInsight> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Please analyze this news article and provide a friendly, insightful summary.
    
    Title: ${story.title}
    Content: ${story.content}
    
    Provide your response in JSON format including:
    1. A concise 2-sentence summary.
    2. 3 key points.
    3. Brief historical background context.
    4. Future implications of this news.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          summary: { type: Type.STRING },
          keyPoints: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          background: { type: Type.STRING },
          implications: { type: Type.STRING }
        },
        required: ["summary", "keyPoints", "background", "implications"]
      }
    }
  });

  try {
    return JSON.parse(response.text || '{}') as AIInsight;
  } catch (error) {
    console.error("Failed to parse AI response:", error);
    throw new Error("Could not generate AI insights.");
  }
};
