[**talawa-api**](../../README.md)

***

[talawa-api](../../modules.md) / [app](../README.md) / default

# Function: default()

## Call Signature

\> **default**(`req`, `res`): `any`

Express instance itself is a request handler, which could be invoked without
third argument.

### Parameters

#### req

`IncomingMessage` | `Request`

#### res

`ServerResponse` | `Response`

### Returns

`any`

### Defined in

[src/app.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/app.ts#L19)

## Call Signature

\> **default**(`req`, `res`, `next`): `void`

### Parameters

#### req

`Request`

#### res

`Response`

#### next

`NextFunction`

### Returns

`void`

### Defined in

[src/app.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/app.ts#L19)
