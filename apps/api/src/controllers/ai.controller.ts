import { Context } from "hono";
import { notifyService, summarizeService } from "../services/ai.service";

export const summarizeController = async (c: Context) => {
    const text = await c.req.text();
    const summary = await summarizeService({text, apiKey: c.env.GROQ_API_KEY});
    return c.json({ summary });
};

export const notifyContoller = async (c: Context) => {
    const email = await c.req.text();
    const notifyResponse = await notifyService({email, apiKey: c.env.GROQ_API_KEY});
    return c.json({ notifyResponse: notifyResponse.notify });
};
