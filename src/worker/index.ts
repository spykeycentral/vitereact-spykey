import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

export default app;
export interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/status') {
      const cf = (request as Request & { cf?: { colo?: string; country?: string } }).cf;
      return Response.json({
        status: 'OPERATIONAL',
        colo: cf?.colo ?? 'ARN',
        country: cf?.country ?? 'SE',
        timestamp: new Date().toISOString(),
      });
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
