[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [middleware/fileUpload](../README.md) / fileUpload

# Function: fileUpload()

\> **fileUpload**(`fieldName`): `RequestHandler`

A middleware for handling optional file uploads.
All data must be sent as multipart/form-data, but the file field is optional.

## Parameters

### fieldName

`string`

The name of the file field in the form

## Returns

`RequestHandler`

Express middleware for handling file upload

## Defined in

[src/middleware/fileUpload.ts:22](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/middleware/fileUpload.ts#L22)
