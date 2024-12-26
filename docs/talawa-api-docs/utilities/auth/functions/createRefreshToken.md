[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [utilities/auth](../README.md) / createRefreshToken

# Function: createRefreshToken()

\> **createRefreshToken**(`user`, `appUserProfile`): `string`

Creates a refresh token (JWT) for a user that expires in 30 days.
The token contains user data and is signed with the refresh token secret.

## Parameters

### user

[`InterfaceUser`](../../../models/User/interfaces/InterfaceUser.md)

User data

### appUserProfile

[`InterfaceAppUserProfile`](../../../models/AppUserProfile/interfaces/InterfaceAppUserProfile.md)

Application user profile data

## Returns

`string`

JSON Web Token string payload

## Defined in

[src/utilities/auth.ts:60](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/utilities/auth.ts#L60)
