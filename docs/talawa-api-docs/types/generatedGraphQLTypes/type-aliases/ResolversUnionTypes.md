[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / ResolversUnionTypes

# Type Alias: ResolversUnionTypes\<_RefType\>

\> **ResolversUnionTypes**\<`_RefType`\>: `object`

Mapping of union types

## Type Parameters

• **_RefType** *extends* `Record`\<`string`, `unknown`\>

## Type declaration

### ConnectionError

\> **ConnectionError**: [`InvalidCursor`](InvalidCursor.md) \| [`MaximumValueError`](MaximumValueError.md)

### CreateAdminError

\> **CreateAdminError**: [`OrganizationMemberNotFoundError`](OrganizationMemberNotFoundError.md) \| [`OrganizationNotFoundError`](OrganizationNotFoundError.md) \| [`UserNotAuthorizedError`](UserNotAuthorizedError.md) \| [`UserNotFoundError`](UserNotFoundError.md)

### CreateCommentError

\> **CreateCommentError**: [`PostNotFoundError`](PostNotFoundError.md)

### CreateMemberError

\> **CreateMemberError**: [`MemberNotFoundError`](MemberNotFoundError.md) \| [`OrganizationNotFoundError`](OrganizationNotFoundError.md) \| [`UserNotAuthorizedAdminError`](UserNotAuthorizedAdminError.md) \| [`UserNotAuthorizedError`](UserNotAuthorizedError.md) \| [`UserNotFoundError`](UserNotFoundError.md)

## Defined in

[src/types/generatedGraphQLTypes.ts:3427](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/types/generatedGraphQLTypes.ts#L3427)
