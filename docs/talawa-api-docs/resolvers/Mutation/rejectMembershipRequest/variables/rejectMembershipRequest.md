[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [resolvers/Mutation/rejectMembershipRequest](../README.md) / rejectMembershipRequest

# Variable: rejectMembershipRequest

\> `const` **rejectMembershipRequest**: [`MutationResolvers`](../../../../types/generatedGraphQLTypes/type-aliases/MutationResolvers.md)\[`"rejectMembershipRequest"`\]

This function enables to reject membership request.

## Param

parent of current request

## Param

payload provided with the request

## Param

context of entire application

## Remarks

The following checks are done:
1. If the membership request exists.
2. If the organization exists.
3. If the user to be rejected exists.
4. If the user is the admin of the organization.

## Returns

Deleted membership request.

## Defined in

[src/resolvers/Mutation/rejectMembershipRequest.ts:23](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/resolvers/Mutation/rejectMembershipRequest.ts#L23)
