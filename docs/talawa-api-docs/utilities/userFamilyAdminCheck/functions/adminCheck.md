[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/userFamilyAdminCheck](../README.md) / adminCheck

# Function: adminCheck()

\> **adminCheck**(`userId`, `userFamily`): `Promise`\<`void`\>

Checks if the current user is an admin of the organization or a super admin.
Throws an UnauthorizedError if the user is neither an admin nor a super admin.

## Parameters

### userId

The ID of the current user.

`string` | `ObjectId`

### userFamily

[`InterfaceUserFamily`](../../../models/userFamily/interfaces/InterfaceUserFamily.md)

The user family data of type `InterfaceUserFamily`.

## Returns

`Promise`\<`void`\>

## Remarks

This function queries the `userFamily` to check if the `userId` is listed as an admin.
Additionally, it queries the `AppUserProfile` to check if the `userId` is a super admin.

## Defined in

[src/utilities/userFamilyAdminCheck.ts:19](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/utilities/userFamilyAdminCheck.ts#L19)
