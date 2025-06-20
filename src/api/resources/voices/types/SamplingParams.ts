/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface SamplingParams {
    /** Generations with the same parameters _including_ a non-null `seed` are identical. */
    seed?: number;
    /** Smaller values correspond to more stable but less expressive speech. Must be greater than or equal to 0. */
    temperature?: number;
    /** Must be -1 or greater than 0. */
    topK?: number;
    /** Must be greater than 0 and less than or equal to 1. */
    topP?: number;
    /** Must be between 0 and 1, inclusive. */
    minP?: number;
    /** Must be between 1 and 2, inclusive. */
    repetitionPenalty?: number;
    /** Must be between 0 and 2, inclusive. */
    frequencyPenalty?: number;
}
