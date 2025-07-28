import { notifyRequest } from "../types/notify";
import { summaryRequest } from "../types/summary";
import { notify } from "../utils/notify";
import { summarize } from "../utils/summarize";

export const summarizeService = async ({text, apiKey}: summaryRequest) => {
    return summarize({text, apiKey})
}

export const notifyService = async ({email, apiKey}: notifyRequest) => {
    return notify({email, apiKey})
}