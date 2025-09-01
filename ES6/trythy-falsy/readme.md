# Truthy vs Falsy Values in JavaScript

## 🔴 Falsy Values (Total 8)
| Value        | Description                   |
|--------------|-------------------------------|
| `false`      | Boolean false                 |
| `0`          | Number zero                   |
| `-0`         | Negative zero                 |
| `0n`         | BigInt zero                   |
| `""`         | Empty string                  |
| `null`       | Absence of any value          |
| `undefined`  | Variable not assigned         |
| `NaN`        | Not a Number                  |

## 🟢 Truthy Values (Examples)
Everything else is **truthy**.
Some examples:

| Value          | Description                |
|----------------|----------------------------|
| `true`         | Boolean true               |
| `1, -1, 100`   | Any non-zero number        |
| `"hello"`      | Non-empty string           |
| `" "`          | String with space          |
| `[]`           | Empty array                |
| `{}`           | Empty object               |
| `function(){}` | Any function               |
| `Infinity`     | Infinity number            |
