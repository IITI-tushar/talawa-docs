[**talawa-api**](../../../../README.md)

***

[talawa-api](../../../../modules.md) / [utilities/PII/decryption](../README.md) / decrypt

# Function: decrypt()

\> **decrypt**(`encryptedText`, `key`, `iv`): `string`

Decrypts the given encrypted text using AES-256-CBC decryption.

## Parameters

### encryptedText

`string`

The encrypted text to decrypt, encoded as a hexadecimal string.

### key

`string`

The encryption key used for decryption.

### iv

`string`

The initialization vector (IV), used to ensure different ciphertexts encrypt to different ciphertexts even if the plaintexts are identical.

## Returns

`string`

The decrypted plaintext string.

## Defined in

[src/utilities/PII/decryption.ts:11](https://github.com/PalisadoesFoundation/talawa-api/blob/5c5b29a0ea487bda8306089fe128f43f3be29f94/src/utilities/PII/decryption.ts#L11)
