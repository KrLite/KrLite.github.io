---
title: Embedding Fonts
icon: gravity-ui:font-case
author: KrLite
createTime: 2024/06/04 21:26:57
permalink: /notes/coding/vuepress/m7dwlzkj/
---

## TL;DR

To embed fonts, you simply put them in a static directory and reference them in your `css` stylesheets.

### Steps

#### 1. Create a Static Directory

Create a static directory right under your `.vuepress` directory.

::: info Example
Let's assume the static directory is `.vuepress/styles`, and the font file you want to embed is named `font.otf`.
:::

#### 2. Create & Reference the Stylesheet

Create a stylesheet file under the static directory and reference it in your `client.ts` configuration file by importing it.

::: info Example
Let's assume the file name is `index.scss`.
:::

#### 3. Add the Font File

Copy the font file to somewhere under the static directory.

::: info Example
Let's assume the font file is located at `.vuepress/styles/fonts/font.otf`.
:::

For better maintainability, you can create a stylesheet to define the font face separately.

::: info Example
Let's assume the font face stylesheet is located at `.vuepress/styles/fonts/font.scss`.
:::

::: code-tabs#example
@tab Current File Structure
```:no-line-numbers
.vuepress/
├── styles/
│   ├── index.scss // [!code ++]
│   ├── fonts/
│   │   ├── font.scss // [!code ++]
│   │   └── font.otf // [!code ++]
```

@tab index.scss
```scss
:::
