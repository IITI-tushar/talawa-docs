[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/customDataByOrganization](../README.md) / customDataByOrganization

# Variable: customDataByOrganization

\> `const` **customDataByOrganization**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"customDataByOrganization"`\]

This query will fetch all the customData of the members of the organization in the database.

## Param

## Param

An object that contains `id` of the organization.

## Returns

An object `customDatas` that contains all the custom fields of the specified organization.
The following checks are made:
 1. if the organization exists

## Defined in

[src/resolvers/Query/customDataByOrganization.ts:13](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/resolvers/Query/customDataByOrganization.ts#L13)
