[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [libraries/requestTracing](../README.md) / middleware

# Function: middleware()

\> **middleware**(): (`req`, `res`, `next`) =\> `void`

Middleware to handle request tracing. It generates or retrieves a tracing ID,
sets it in the headers of the request and response, and stores it in the namespace context.

## Returns

`Function`

A middleware function.

### Parameters

#### req

`Request`

#### res

`Response`

#### next

`NextFunction`

### Returns

`void`

## Defined in

[src/libraries/requestTracing.ts:57](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/libraries/requestTracing.ts#L57)
