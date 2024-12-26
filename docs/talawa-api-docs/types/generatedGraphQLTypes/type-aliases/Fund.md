[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [types/generatedGraphQLTypes](../README.md) / Fund

# Type Alias: Fund

\> **Fund**: `object`

## Type declaration

### \_\_typename?

\> `optional` **\_\_typename**: `"Fund"`

### \_id

\> **\_id**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### campaigns?

\> `optional` **campaigns**: [`Maybe`](Maybe.md)\<[`Maybe`](Maybe.md)\<[`FundraisingCampaign`](FundraisingCampaign.md)\>[]\>

### createdAt

\> **createdAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

### creator?

\> `optional` **creator**: [`Maybe`](Maybe.md)\<[`User`](User.md)\>

### isArchived

\> **isArchived**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

### isDefault

\> **isDefault**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

### name

\> **name**: [`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]

### organizationId

\> **organizationId**: [`Scalars`](Scalars.md)\[`"ID"`\]\[`"output"`\]

### refrenceNumber?

\> `optional` **refrenceNumber**: [`Maybe`](Maybe.md)\<[`Scalars`](Scalars.md)\[`"String"`\]\[`"output"`\]\>

### taxDeductible

\> **taxDeductible**: [`Scalars`](Scalars.md)\[`"Boolean"`\]\[`"output"`\]

### updatedAt

\> **updatedAt**: [`Scalars`](Scalars.md)\[`"DateTime"`\]\[`"output"`\]

## Defined in

[src/types/generatedGraphQLTypes.ts:999](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/types/generatedGraphQLTypes.ts#L999)
