[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [utilities/graphQLConnection/parseGraphQLConnectionArguments](../README.md) / ParseGraphQLConnectionCursorResult

# Type Alias: ParseGraphQLConnectionCursorResult\<T0\>

\> **ParseGraphQLConnectionCursorResult**\<`T0`\>: `Promise`\<\{ `errors`: [`DefaultGraphQLArgumentError`](../../type-aliases/DefaultGraphQLArgumentError.md)[]; `isSuccessful`: `false`; \} \| \{ `isSuccessful`: `true`; `parsedCursor`: `T0`; \}\>

This is typescript type of object returned from the callback function `parseCursor` passed
as an argument to `parseGraphQLConnectionArguments`, `parseGraphQLConnectionArgumentsWithSortedBy`,
`parseGraphQLConnectionArgumentsWithWhere` and `parseGraphQLConnectionArgumentsWithSortedByAndWhere`
functions.

## Type Parameters

• **T0**

## Defined in

[src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts:25](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/utilities/graphQLConnection/parseGraphQLConnectionArguments.ts#L25)
