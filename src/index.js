import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { createGiftCodeRoutes } from './gift-codes/routes.js';
import { createVersionRoutes } from './version/routes.js';

const app = new Hono();
const port = Number(process.env.PORT) || 8787;

app.use('*', cors({
  origin: (origin) => origin || '*',
  credentials: true
}));

app.get('/health', (context) => context.json({ ok: true }));

app.route('/', createGiftCodeRoutes());
app.route('/', createVersionRoutes());

serve({ fetch: app.fetch, port }, () => {
  console.log(`服务已启动 http://127.0.0.1:${port}`);
});
