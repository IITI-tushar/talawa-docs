[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Query/actionItemCategoriesByOrganization](../README.md) / actionItemCategoriesByOrganization

# Variable: actionItemCategoriesByOrganization

\> `const` **actionItemCategoriesByOrganization**: [`QueryResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/QueryResolvers.md)\[`"actionItemCategoriesByOrganization"`\]

This query will fetch all categories for the organization from database.

## Param

## Param

An object that contains `organizationId` which is the _id of the Organization and `orderBy` which is the sorting order & where which is the filter.

## Returns

A `categories` object that holds all categories for the Organization.

## Defined in

[src/resolvers/Query/actionItemCategoriesByOrganization.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/resolvers/Query/actionItemCategoriesByOrganization.ts#L11)
