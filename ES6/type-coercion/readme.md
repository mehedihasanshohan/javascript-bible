# JavaScript Type Coercion Cheat Sheet

JavaScript is famous (or infamous) for its **type coercion** rules. This happens when JS automatically converts values from one type to another during comparisons, arithmetic, or logical operations.

This cheat sheet covers **all the weird and common cases** with explanations.

---

## 1. Equality Comparisons (`==` vs `===`)

| Expression               | Result  | Explanation |
|---------------------------|---------|-------------|
| `[] == ''`                | true    | `[]` → `''` (toString), then `'' == ''` |
| `[] == 0`                 | true    | `[]` → `''` → `0`, then `0 == 0` |
| `'' == 0`                 | true    | `''` → `0`, then `0 == 0` |
| `NaN == NaN`              | false   | NaN is never equal to anything |
| `null == undefined`       | true    | Special rule: null equals undefined |
| `0 == false`              | true    | `false` → `0`, then `0 == 0` |
| `'' == false`             | true    | `''` → `0`, `false` → `0` |
| `'5' == ['5']`            | true    | `['5']` → `'5'`, `'5' == '5'` |
| `[1,2] == '1,2'`          | true    | `[1,2]` → `'1,2'` |
| `0 == '0'`                | true    | `'0'` → `0` |
| `false == 'false'`        | false   | `'false'` → NaN, `false` → 0 |
| `{} + []`                 | '[object Object]' or 0 | Depends on context: string concatenation or unary + conversion |

**Tip:** Use `===` to avoid coercion. `===` checks **strict equality** without type conversion.

---

## 2. Truthy and Falsy Values

JavaScript considers some values as **false in boolean context**:

| Falsy Values | Notes |
|--------------|-------|
| `false`      | Boolean false |
| `0`          | Number zero |
| `-0`         | Negative zero |
| `0n`         | BigInt zero |
| `''`         | Empty string |
| `null`       | Null value |
| `undefined`  | Undefined value |
| `NaN`        | Not-a-Number |

Everything else is **truthy**, including `'0'`, `'false'`, `[]`, `{}`, `function(){}`.

---

## 3. Type Conversion in Arithmetic

| Expression        | Result | Explanation |
|------------------|--------|-------------|
| `'5' - 2`         | 3      | `'5'` → 5 (number), then 5 - 2 = 3 |
| `'5' + 2`         | '52'   | `'5'` + 2 → string concatenation |
| `true + 1`        | 2      | `true` → 1 |
| `false + 5`       | 5      | `false` → 0 |
| `null + 1`        | 1      | `null` → 0 |
| `undefined + 1`   | NaN    | `undefined` → NaN |
| `[] + []`         | ''     | Both arrays → empty string, concatenated |
| `[1] + [2]`       | '12'   | Each array → string, concatenated |

---

## 4. Special Cases

| Expression           | Result | Explanation |
|---------------------|--------|-------------|
| `typeof NaN`         | 'number' | Quirky: NaN is considered a number |
| `typeof null`        | 'object' | Legacy bug in JS |
| `[] == ![]`          | true    | `![]` → false, then `[] == false` → true |
| `{} == {}`           | false   | Objects are compared by reference |
| `0 == '\n'`          | true    | '\n' → 0 after type coercion |
| `' \t\r\n' == 0`     | true    | Whitespace → 0 |

---

## 5. Key Takeaways

1. **Always prefer `===` and `!==`** to avoid unexpected results.
2. Be careful with **empty arrays, empty objects, and strings**, because they can behave oddly with `==`.
3. `NaN` is never equal to anything — use `Number.isNaN()` to check it.
4. Boolean context can make **truthy and falsy values** act differently.
5. Arithmetic operations can **coerce types unexpectedly**, especially with `+` (string concatenation) vs `-`, `*`, `/`.

---

## References

- [MDN Type Conversion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)
- [You Don’t Know JS: Types & Grammar](https://github.com/getify/You-Dont-Know-JS)
