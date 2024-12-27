[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/chatsByUserId](../README.md) / chatsByUserId

# Variable: chatsByUserId

\> `const` **chatsByUserId**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"chatsByUserId"`\]

This query will fetch all the Chats for the current user from the database.

## Param

## Param

An object that contains `id` of the user.

## Returns

An object `chats` that contains all chats of the current user.
If the `Chats` object is null then returns an empty array.

## Remarks

You can learn about GraphQL `Resolvers`
[here](https://www.apollographql.com/docs/apollo-server/data/resolvers/).

## Defined in

[src/resolvers/Query/chatsByUserId.ts:12](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/resolvers/Query/chatsByUserId.ts#L12)
