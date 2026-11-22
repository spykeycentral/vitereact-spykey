import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

app.notFound((c) => {
	if (c.req.path.startsWith("/api/")) {
		return c.json({ error: "Not found" }, 404);
	}

	return c.env.ASSETS.fetch(c.req.raw);
});

export default app;
