import { groqModel } from "./models";
import { JsonOutputParser } from "@langchain/core/output_parsers";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { notifyFormatInstruction, notifyPrompt } from "../templates/notify.prompt";
import { notifyRequest, notifyResponse } from "../types/notify";


export const notify = async ({email, apiKey}: notifyRequest) => {
    const parser = new JsonOutputParser<notifyResponse>();
    const prompt = ChatPromptTemplate.fromTemplate(
        "{format_instructions}\n{prompt}\n{email}"
    );
    const partialedPrompt = await prompt.partial({
        format_instructions: notifyFormatInstruction,
    });

    const chain = partialedPrompt.pipe(groqModel(apiKey)).pipe(parser);

    const response = await chain.invoke({
        prompt: notifyPrompt,
        email: email,
    });

    return response;
};
