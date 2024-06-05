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

---

::: details Details Block
This is the content of the details block.
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
This is a tip with `:::` syntax.
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
