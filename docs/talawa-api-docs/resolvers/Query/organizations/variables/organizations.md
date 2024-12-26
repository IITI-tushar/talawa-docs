[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/organizations](../README.md) / organizations

# Variable: organizations

\> `const` **organizations**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"organizations"`\]

If a 'id' is specified, this query will return an organisation;
otherwise, it will return all organisations with a size of limit 100.

## Param

## Param

An object containing `orderBy` and `id` of the Organization.

## Returns

The organization if valid `id` is provided else return organizations with size limit 100.

## Remarks

`id` in the args is optional.

## Defined in

[src/resolvers/Query/organizations.ts:16](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/resolvers/Query/organizations.ts#L16)
