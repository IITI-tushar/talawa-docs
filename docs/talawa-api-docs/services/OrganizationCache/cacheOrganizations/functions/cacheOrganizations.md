[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [services/OrganizationCache/cacheOrganizations](../README.md) / cacheOrganizations

# Function: cacheOrganizations()

\> **cacheOrganizations**(`organizations`): `Promise`\<`void`\>

Stores organizations in Redis cache with a specified time-to-live (TTL).

## Parameters

### organizations

[`InterfaceOrganization`](../../../../models/Organization/interfaces/InterfaceOrganization.md)[]

Array of organizations to be cached.

## Returns

`Promise`\<`void`\>

Promise\<void\>

## Defined in

[src/services/OrganizationCache/cacheOrganizations.ts:10](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/services/OrganizationCache/cacheOrganizations.ts#L10)
