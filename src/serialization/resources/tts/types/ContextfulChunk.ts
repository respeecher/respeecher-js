/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as Respeecher from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { Chunk } from "./Chunk.js";

export const ContextfulChunk: core.serialization.ObjectSchema<
    serializers.tts.ContextfulChunk.Raw,
    Respeecher.tts.ContextfulChunk
> = core.serialization
    .object({
        contextId: core.serialization.property("context_id", core.serialization.string()),
    })
    .extend(Chunk);

export declare namespace ContextfulChunk {
    export interface Raw extends Chunk.Raw {
        context_id: string;
    }
}
