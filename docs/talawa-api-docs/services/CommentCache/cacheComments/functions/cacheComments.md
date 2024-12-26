[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [services/CommentCache/cacheComments](../README.md) / cacheComments

# Function: cacheComments()

\> **cacheComments**(`comments`): `Promise`\<`void`\>

Stores comments in Redis cache with a specified time-to-live (TTL).

## Parameters

### comments

[`InterfaceComment`](../../../../models/Comment/interfaces/InterfaceComment.md)[]

Array of comments to be cached.

## Returns

`Promise`\<`void`\>

Promise\<void\>

## Defined in

[src/services/CommentCache/cacheComments.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/services/CommentCache/cacheComments.ts#L10)
