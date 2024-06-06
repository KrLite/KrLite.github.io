---
title: Playground
author: KrLite
createTime: 2024/06/04 19:10:05
permalink: /article/79bmqa5b/
tags:
  - test
---

This is a ==highlighted text.==

Th==is is a te==xt with high==lighted secti==ons.

**==Highlighted text in bold.==**

_==Highlighted text in italic.==_

_**==Highlighted text in bold and italic.==**_

[Link](https://www.google.com)

**[Bold link](https://www.google.com)**

_[Italic link](https://www.google.com)_

==[Highlighted link](https://www.google.com)==

[Highlighted ==link text==](https://www.google.com)

::: note
[Link within a note block](https://www.google.com)

`Code within a note block.`

==Highlighted text within a note block.==

==[Highlighted link within a note block](https://www.google.com)==
:::

::: info
[Link within a info block](https://www.google.com)

`Code within a info block.`

==Highlighted text within a info block.==

==[Highlighted link within a info block](https://www.google.com)==
:::

::: tip
[Link within a tip block](https://www.google.com)

`Code within a tip block.`

==Highlighted text within a tip block.==

==[Highlighted link within a tip block](https://www.google.com)==
:::

::: warning
[Link within a warning block](https://www.google.com)

`Code within a warning block.`

==Highlighted text within a warning block.==

==[Highlighted link within a warning block](https://www.google.com)==
:::

::: caution
[Link within a caution block](https://www.google.com)

`Code within a caution block.`

==Highlighted text within a caution block.==

==[Highlighted link within a caution block](https://www.google.com)==
:::

---

::: details Details Block
This is the content of the details block.

==Highlighted text within a details block.==
:::

::: details Details Code Block
```typescript
function add(a: number, b: number): number {
  return a + b;
}
```
:::

---

::: tip
This is a tip with `::: tip` syntax.
:::

> [!TIP]
> This is a tip with `[!TIP]` syntax.

---

::: details Font Ligatures Test
```java:no-line-numbers
// Stream API Example
import java.util.stream.Stream;

public class StreamExample {
  public static void main(String[] args) {
    Stream.of("apple", "banana", "orange")
       .filter(fruit -> fruit.length() > 5)
       .sorted()
       .forEach(System.out::println);
  }
}
```
:::
