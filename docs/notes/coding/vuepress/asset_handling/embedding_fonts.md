---
title: Embedding Fonts
icon: gravity-ui:font-case
author: KrLite
createTime: 2024/06/04 21:26:57
permalink: /notes/coding/vuepress/m7dwlzkj/
---

## TL;DR

To embed fonts, you simply put them in a static directory and reference them in your `css` stylesheets.

### Step 1: Configure the Static Directory

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

### Review

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
:::

### Step 2: Fill the Stylesheets


#### 1. Define the Font Face

In the font face stylesheet, define the font face using the `@font-face` rule.

::: warning
Make sure to use a path relative to the static directory instead of the stylesheet's directory in `url` in order to load the static asset correctly.

::: tip
You can refer to the [official documentation (from Vite)](https://vitejs.dev/guide/assets) for more information about how to handle static assets.
:::

::: caution
Adding a `format` parameter to the `src` attribute literally breaks the font embedding.
:::

::: info Example
::: code-tabs
@tab `.vuepress/styles/fonts/font.scss`
```scss
@font-face {
  font-family: "My Font";
  src: url("./fonts/font.otf"); // Relative path to the static directory // [!code warning]
  font-weight: normal;
  font-style: normal;
}
```
:::

#### 2. Import into the Stylesheet

In the main stylesheet, import the font face stylesheet and apply the font to the desired elements.

::: info Example
::: code-tabs
@tab `.vuepress/styles/index.scss`
```scss
@import "./fonts/font";

body {
  font-family: "My Font";
}
```
:::

### Review

::: code-tabs#example
@tab Current File Structure
```:no-line-numbers
.vuepress/
├── styles/
│   ├── index.scss // [!code warning]
│   ├── fonts/
│   │   ├── font.scss // [!code warning]
│   │   └── font.otf
```

@tab `index.scss`
```scss
@import "./fonts/font";

body {
  font-family: "My Font";
}
```

@tab `font.scss`
```scss
@font-face {
  font-family: "My Font";
  src: url("./fonts/font.otf");
  font-weight: normal;
  font-style: normal;
}
```
:::
