import { serve } from '@hono/node-server'
import { PrismaClient } from './generated/prisma/index.js'
import { Hono } from 'hono'
import { mainRouter } from './routes/index.route.ts'

const app = new Hono()
export const db = new PrismaClient()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
app.route("", mainRouter);