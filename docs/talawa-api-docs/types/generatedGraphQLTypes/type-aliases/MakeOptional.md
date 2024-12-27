[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / MakeOptional

# Type Alias: MakeOptional\<T, K\>

\> **MakeOptional**\<`T`, `K`\>: [`Omit`](Omit.md)\<`T`, `K`\> & `\{ [SubKey in K]?: Maybe\<T[SubKey]\> \}`

## Type Parameters

• **T**

• **K** *extends* keyof `T`

## Defined in

[src/types/generatedGraphQLTypes.ts:41](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/types/generatedGraphQLTypes.ts#L41)
