[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/likePost](../README.md) / likePost

# Variable: likePost

\> `const` **likePost**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"likePost"`\]

This function enables to like a post.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the user exists
2. If the post exists
3. If the user has already liked the post.

## Returns

Post without the like

## Defined in

[src/resolvers/Mutation/likePost.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/resolvers/Mutation/likePost.ts#L18)
