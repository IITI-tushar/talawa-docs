[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [models/AgendaCategory](../README.md) / AgendaCategorySchema

# Variable: AgendaCategorySchema

\> `const` **AgendaCategorySchema**: `Schema`\<`Model`, \{ `createdAt`: `Date`; `createdBy`: `ObjectId`; `description`: `null` \| `string`; `name`: `string`; `organizationId`: `null` \| `ObjectId`; `updatedAt`: `Date`; `updatedBy`: `null` \| `ObjectId`; \}, `Document`\<`unknown`, \{\}, `FlatRecord`\<\{ `createdAt`: `Date`; `createdBy`: `ObjectId`; `description`: `null` \| `string`; `name`: `string`; `organizationId`: `null` \| `ObjectId`; `updatedAt`: `Date`; `updatedBy`: `null` \| `ObjectId`; \}\>\> & `FlatRecord`\<\{ `createdAt`: `Date`; `createdBy`: `ObjectId`; `description`: `null` \| `string`; `name`: `string`; `organizationId`: `null` \| `ObjectId`; `updatedAt`: `Date`; `updatedBy`: `null` \| `ObjectId`; \}\> & `object`\>

Mongoose schema definition for an agenda category document.

## Param

Name of the agenda category.

## Param

Optional description of the agenda category.

## Param

Reference to the organization associated with the agenda category.

## Param

Reference to the user who created the agenda category.

## Param

Reference to the user who last updated the agenda category.

## Param

Date when the agenda category was created.

## Param

Date when the agenda category was last updated.

## Defined in

[src/models/AgendaCategory.ts:32](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/models/AgendaCategory.ts#L32)
