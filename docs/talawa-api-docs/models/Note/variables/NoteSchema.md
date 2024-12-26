[**talawa-api**](../../../README.md)

***

[talawa-api](../../../modules.md) / [models/Note](../README.md) / NoteSchema

# Variable: NoteSchema

\> `const` **NoteSchema**: `Schema`\<`Model`, \{ `agendaItemId`: `ObjectId`; `content`: `string`; `createdAt`: `Date`; `createdBy`: `ObjectId`; `updatedAt`: `Date`; `updatedBy`: `null` \| `ObjectId`; \}, `Document`\<`unknown`, \{\}, `FlatRecord`\<\{ `agendaItemId`: `ObjectId`; `content`: `string`; `createdAt`: `Date`; `createdBy`: `ObjectId`; `updatedAt`: `Date`; `updatedBy`: `null` \| `ObjectId`; \}\>\> & `FlatRecord`\<\{ `agendaItemId`: `ObjectId`; `content`: `string`; `createdAt`: `Date`; `createdBy`: `ObjectId`; `updatedAt`: `Date`; `updatedBy`: `null` \| `ObjectId`; \}\> & `object`\>

Mongoose schema definition for Note documents.

## Param

The content of the note.

## Param

The ID of the user who created the note.

## Param

Optional: The ID of the user who last updated the note.

## Param

The date when the note was created.

## Param

Optional: The date when the note was last updated.

## Param

The ID of the agenda item associated with the note.

## Defined in

[src/models/Note.ts:27](https://github.com/PalisadoesFoundation/talawa-api/blob/4b5c74fd36bcfc2e36f3a06b67d517e865c188be/src/models/Note.ts#L27)
