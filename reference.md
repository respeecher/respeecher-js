# Reference
## Tts
<details><summary><code>client.tts.<a href="/src/api/resources/tts/client/Client.ts">bytes</a>({ ...params }) -> core.BinaryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

The easiest way to generate text-to-speech audio. Not suitable for latency-sensitive applications.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tts.bytes({
    transcript: "Hello, World!",
    voice: {
        id: "samantha"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Respeecher.BytesGenerationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TtsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tts.<a href="/src/api/resources/tts/client/Client.ts">sse</a>({ ...params }) -> core.Stream<Respeecher.ServerSentEvent></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Stream text-to-speech audio as JSONL (JSON lines) objects over HTTP. A less performant alternative to WebSockets, without text input streaming.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.tts.sse({
    transcript: "Hello, World!",
    voice: {
        id: "samantha"
    }
});
for await (const item of response) {
    console.log(item);
}

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Respeecher.StreamingGenerationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TtsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Voices
<details><summary><code>client.voices.<a href="/src/api/resources/voices/client/Client.ts">list</a>() -> Respeecher.Voice[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List of available voices with IDs and metadata.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.voices.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `VoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
