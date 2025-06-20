/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as Respeecher from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const Chunk: core.serialization.ObjectSchema<serializers.tts.Chunk.Raw, Respeecher.tts.Chunk> =
    core.serialization.object({
        data: core.serialization.string(),
    });

export declare namespace Chunk {
    export interface Raw {
        data: string;
    }
}
