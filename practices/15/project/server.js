import path from "node:path";
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import fs from "node:fs";

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyStatic, {
  root: path.resolve(import.meta.dirname, "dist"),
  list: true,
  // prefix: '/client'
});

fastify.get("/", async function handler(_request, reply) {
  const html = fs.readFileSync(`./dist/index.html`, "utf-8");
  reply.type("text/html; charset=utf-8");
  return html;
  // return html.replace(
  //   "<!--VARIABLES-->",
  //   `<script>globalThis.BASE_API="${process.env.BASE_API}"</script>`,
  // );
});

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
