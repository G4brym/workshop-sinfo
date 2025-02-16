import {WorkflowEntrypoint, type WorkflowEvent, type WorkflowStep,} from "cloudflare:workers";
import type {Env} from "./bindings";


export class ResearchWorkflow extends WorkflowEntrypoint<Env, any> {
    async run(event: WorkflowEvent<any>, step: WorkflowStep) {
        // TODO
    }
}
