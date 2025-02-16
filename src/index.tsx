import {Hono} from "hono";
import type {Env} from "./bindings";

export {ResearchWorkflow} from "./workflows";

const app = new Hono<{ Bindings: Env }>();

export default app;
