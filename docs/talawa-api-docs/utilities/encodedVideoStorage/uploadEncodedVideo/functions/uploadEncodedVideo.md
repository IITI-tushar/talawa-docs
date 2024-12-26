[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [utilities/encodedVideoStorage/uploadEncodedVideo](../README.md) / uploadEncodedVideo

# Function: uploadEncodedVideo()

\> **uploadEncodedVideo**(`encodedVideoURL`, `previousVideoPath`?): `Promise`\<`string`\>

Uploads an encoded video to the server.

## Parameters

### encodedVideoURL

`string`

The URL or content of the encoded video to upload.

### previousVideoPath?

Optional. The path of the previous video to delete before uploading the new one.

`null` | `string`

## Returns

`Promise`\<`string`\>

The file name of the uploaded video.

## Defined in

[src/utilities/encodedVideoStorage/uploadEncodedVideo.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/utilities/encodedVideoStorage/uploadEncodedVideo.ts#L18)
