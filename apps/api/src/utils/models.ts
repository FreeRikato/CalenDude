import { ChatGroq } from "@langchain/groq";

export const groqModel = (apiKey: string) => {
    return new ChatGroq({
        model: "llama-3.3-70b-versatile",
        apiKey
    });
};
