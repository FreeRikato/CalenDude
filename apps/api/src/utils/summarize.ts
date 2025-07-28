import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { groqModel } from "./models";
import { summaryRequest } from "../types/summary";
import { summaryPrompt } from "../templates/summary.prompt";

export const summarize = async ({ text, apiKey }: summaryRequest) => {
    const response = await groqModel(apiKey).invoke([
        new SystemMessage(summaryPrompt),
        new HumanMessage(text),
    ]);
    return response.content;
};
