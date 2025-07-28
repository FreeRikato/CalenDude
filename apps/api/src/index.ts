import { Hono } from "hono";
import Bindings from "./types/binding";
import aiRoutes from "./routes/ai.routes";

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", (c) => {
    return c.text("Hono server running successfully");
});

app.route("/api/v1/ai/", aiRoutes)

export default app;
