import { Hono } from "hono";
import { notifyContoller, summarizeController } from "../controllers/ai.controller";

const aiRoutes = new Hono()

aiRoutes.post("/summary", summarizeController);
aiRoutes.post("/notification", notifyContoller);

export default aiRoutes