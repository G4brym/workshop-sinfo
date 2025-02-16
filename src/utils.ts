import { createGoogleGenerativeAI } from "@ai-sdk/google";
import type { Env } from "./bindings";

export function getModel(env: Env) {
	const google = createGoogleGenerativeAI({
		apiKey: env.GOOGLE_API_KEY,
	});

	return google("gemini-2.0-flash-001");
}
export function getModelThinking(env: Env) {
	const google = createGoogleGenerativeAI({
		apiKey: env.GOOGLE_API_KEY,
	});

	return google("gemini-2.0-flash-thinking-exp-01-21");
}
