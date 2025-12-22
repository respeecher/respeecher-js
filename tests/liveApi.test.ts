import { RespeecherClient } from "../src";

describe("Test the client against the live API", () => {
    /* The API key is taken from the environment (RESPEECHER_API_KEY)
     * if not passed as an argument to the constructor. */
    const client = new RespeecherClient();

    it("should return a non-empty list of voices", async () => {
        const voices = await client.voices.list();

        expect(voices.length).toBeGreaterThan(0);
    });

    const sampleRequest = {
        transcript: "A quick brown fox jumps over the lazy dog!",
        voice: {
            id: "samantha",
        },
    };

    it("should generate audio over WebSockets", async () => {
        const socket = await client.tts.connect();
        const contextId = "abc";

        await socket.waitForOpen();
        await socket.sendGenerate({
            contextId,
            ...sampleRequest,
        });

        await new Promise((resolve) => {
            let audioDurationInSeconds = 0;

            socket.on("message", (message) => {
                if (message.type === "chunk") {
                    expect(message.contextId).toBe(contextId);

                    const audio = Buffer.from(message.data, "base64");
                    const sampleWidth = 4;

                    expect(audio.length % sampleWidth).toBe(0);

                    audioDurationInSeconds += audio.length / sampleWidth;
                } else {
                    expect(message.type).toBe("done");
                    expect(audioDurationInSeconds).toBeGreaterThan(1);

                    resolve(null);
                }
            });
        });

        socket.close();
    });

    it("should generate audio over the Bytes endpoint", async () => {
        const response = await client.tts.bytes(sampleRequest);
        let bytesReceivedCount = 0;

        for await (const chunk of response.stream()) {
            bytesReceivedCount += chunk.length;
        }

        expect(bytesReceivedCount).toBeGreaterThan(1024);
    });

    it("should generate audio over the SSE endpoint", async () => {
        const response = await client.tts.sse(sampleRequest);
        let eventsReceivedCount = 0;

        for await (const event of response) {
            expect(event.type).toBe("chunk");

            eventsReceivedCount += 1;
        }

        expect(eventsReceivedCount).toBeGreaterThan(0);
    });
});
