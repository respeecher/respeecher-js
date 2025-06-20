/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as Respeecher from "../../../../api/index.js";
import * as core from "../../../../core/index.js";

export const StreamingEncoding: core.serialization.Schema<
    serializers.tts.StreamingEncoding.Raw,
    Respeecher.tts.StreamingEncoding
> = core.serialization.enum_(["pcm_f32le", "pcm_s16le"]);

export declare namespace StreamingEncoding {
    export type Raw = "pcm_f32le" | "pcm_s16le";
}
