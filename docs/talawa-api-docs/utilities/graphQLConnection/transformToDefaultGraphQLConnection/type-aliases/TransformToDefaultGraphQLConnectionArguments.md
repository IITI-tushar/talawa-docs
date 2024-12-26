[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [utilities/graphQLConnection/transformToDefaultGraphQLConnection](../README.md) / TransformToDefaultGraphQLConnectionArguments

# Type Alias: TransformToDefaultGraphQLConnectionArguments\<T0, T1, T2\>

\> **TransformToDefaultGraphQLConnectionArguments**\<`T0`, `T1`, `T2`\>: `object`

## Type Parameters

• **T0**

• **T1**

• **T2**

## Type declaration

### createCursor?

\> `optional` **createCursor**: [`CreateCursor`](CreateCursor.md)\<`T1`\>

### createNode?

\> `optional` **createNode**: [`CreateNode`](CreateNode.md)\<`T1`, `T2`\>

### objectList

\> **objectList**: `T1`[]

### parsedArgs

\> **parsedArgs**: [`ParsedGraphQLConnectionArguments`](../../parseGraphQLConnectionArguments/type-aliases/ParsedGraphQLConnectionArguments.md)\<`T0`\>

### totalCount

\> **totalCount**: `number`

## Defined in

[src/utilities/graphQLConnection/transformToDefaultGraphQLConnection.ts:18](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/utilities/graphQLConnection/transformToDefaultGraphQLConnection.ts#L18)
