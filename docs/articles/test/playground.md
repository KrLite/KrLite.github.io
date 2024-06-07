---
title: Playground
author: KrLite
createTime: 2024/06/04 19:10:05
permalink: /article/79bmqa5b/
tags:
  - test
sticky: 1
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

::: md-demo Cheatsheet
# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

**Bold text**

_Italic text_

**_Bold and italic text_**

~~Strikethrough text~~

==Marked text==

H~2~O

10^-11^

[Link](https://google.com)

---

- Bullet point 1
- Bullet point 2
- Bullet point 3

---

1. Numbered item 1
2. Numbered item 2
3. Numbered item 3

---

- [x] Task 1
- [ ] Task 2
- [ ] Task 3

---

| Column 1 | Column 2 |
| -------- | -------- |
| Cell 1   | Cell 2   |

---

> Blockquote

```python{4-7}:no-line-numbers
def hello_world():
    print("Hello world!")

def highlighted_method():
	a = 100 ^ 2.0
	b = 1 / a
	print(b)
```

```python:line-numbers=2
def with_linenums_starting_at_2():
	print("The Peano Axioms!")
```

Line text `inline code` line text `#!python def inline_code_block()`[^inline_syntax_highlight] line text

[^inline_syntax_highlight]: Inline syntax highlighting is not supported yet.

$E = mc^2$

Footnote[^footnote]

[^footnote]: Footnote text

::: tip
This cheatsheet is migrated from [the deprecated site](https://github.com/KrLite/BrokenThoughts/blob/main/docs/cheatsheet.md?plain=1).
:::

---

::: md-demo Markdown Demo
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
:::

---

```typescript:no-line-numbers
function hello_world() {
  console.log("Hello, world!");
}
```

> A simple code block with no line numbers.

---

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

::: details Font Ligature Test

`a -> b -> c`

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

---

<Classic>
</Classic>

<Classic>
春潮带雨晚来急，野渡无人舟自横。
</Classic>

<Classic link="https://so.gushiwen.cn/mingju/juv_f9df0045bd8d.aspx" authorLink="https://so.gushiwen.cn/authorv_00ea9cc9fdbf.aspx">
春潮带雨晚来急，野渡无人舟自横。

<template #title>
《滁州西涧》
</template>

<template #author>
〔唐〕韦应物
</template>
</Classic>

::: center
<Classic link="https://so.gushiwen.cn/mingju/juv_f9df0045bd8d.aspx" authorLink="https://so.gushiwen.cn/authorv_00ea9cc9fdbf.aspx">
春潮带雨晚来急，野渡无人舟自横。

<template #title>
《滁州西涧》
</template>

<template #author>
〔唐〕韦应物
</template>

<template #description>
此句写荒津野渡之景，在水急舟横的悠闲景象中，蕴含着诗人不在位、不得其用的无奈、忧虑、悲伤的情怀。
</template>
</Classic>
:::

::: right
<Classic link="https://so.gushiwen.cn/mingju/juv_f9df0045bd8d.aspx" authorLink="https://so.gushiwen.cn/authorv_00ea9cc9fdbf.aspx">
春潮带雨晚来急，野渡无人舟自横。

<template #title>
《滁州西涧》
</template>

<template #author>
〔唐〕韦应物
</template>

<template #description>
此句写荒津野渡之景，在水急舟横的悠闲景象中，蕴含着诗人不在位、不得其用的无奈、忧虑、悲伤的情怀。
</template>
</Classic>
:::
