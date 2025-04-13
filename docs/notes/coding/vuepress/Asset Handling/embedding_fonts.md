---
title: Embedding Fonts
author: KrLite
icon: gravity-ui:font-case
createTime: 2024/06/04 21:26:57
permalink: /notes/coding/vuepress/asset_handling/m7dwlzkj/
---

::: warning
This article is a tutorial for **embedding local font files** into your VuePress site. For fonts that are available on the web, you can simply **use their CDN links** in your stylesheet.
:::

::: warning
`ttf (truetype)` files may appear to be broken in some cases (e.g., in Visual Studio Code Simple Browser), while `otf (opentype)` files work fine. Other types are untested.

**It is suggeseted to use `otf` files for better compatibility.**
:::

## TL;DR

To embed fonts, you simply put the files under a static directory and reference them in your stylesheets.

The static reference takes effort in [configuring an alias](#alias) for the static directory in your `config.ts` configuration file.

## Step 1: Configure the Static Directory

### 1. Create a Static Directory

Create a static directory right under your `.vuepress` directory.

::: info Example
Let's assume the static directory is `.vuepress/styles`, and the font file you want to embed is named `font.otf`.
:::

::: tip
You can refer to the [official documentation (from theme Hope)](https://theme-hope.vuejs.press/guide/component/sfc.html) for more information about aliases.
:::

### 2. Create an Alias {#alias}

In your `config.ts`, add an alias for the static directory.

::: info Example
As our static directory is `.vuepress/styles`, we can consider adding an alias `@styles` for it.

::: code-tabs
@tab `.vuepress/config.ts`

```typescript
export default defineUserConfig({
  ...
  alias: {
    "@styles": path.resolve(__dirname, "./styles")
  },
  ...
});
```

:::

### 3. Create & Reference the Stylesheet

Create a stylesheet file under the static directory and reference it in your `client.ts` configuration file by importing it.

::: info Example
Let's assume the file name is `index.scss`.
:::

### 4. Add the Font File

Copy the font file to somewhere under the static directory.

::: info Example
Let's assume the font file is located at `.vuepress/styles/fonts/font.otf`.
:::

For better maintainability, you can create a stylesheet to define the font face separately.

::: info Example
Let's assume the font face stylesheet is located at `.vuepress/styles/fonts/font.scss`.
:::

### Review

::: file-tree

- .vuepress
  - styles
    - **index.scss**
  - fonts
    - **font.scss**
    - **font.otf**

:::

## Step 2: Fill the Stylesheets

### 1. Define the Font Face

In the font face stylesheet, define the font face using the [`@font-face`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face) rule.

::: warning
Make sure to use a path in `url` that is _**relative to the static directory from the [alias](#alias)** instead of **the stylesheet's directory**_ in order to load the static asset correctly.

::: tip
You can refer to the [official documentation (from Vite)](https://vitejs.dev/guide/assets) for more information about how to handle static assets.
:::

::: caution
Adding a `format` parameter to the `src` attribute literally breaks the font embedding for no reason, **unless the file format is `otf` and the parameter is `format("opentype")`.**
:::

::: info Example
::: code-tabs
@tab `.vuepress/styles/fonts/font.scss`

```scss
@font-face {
  font-family: "My Font";
  src: url("@styles/fonts/font.otf"); // [!code warning]
  font-weight: normal;
  font-style: normal;
}
```

:::

### 2. Import into the Stylesheet

In the main stylesheet, import the font face stylesheet and apply the font to the desired elements.

::: info Example
::: code-tabs
@tab `.vuepress/styles/index.scss`

```scss
@import "./fonts/font.scss";

body {
  font-family: "My Font";
}
```

:::

### Review

::: file-tree

- vuepress
  - styles
    - **index.scss**
  - fonts
    - **font.scss**
    - font.otf

:::

::: code-tabs#example
@tab `index.scss`

```scss
@import "./fonts/font.scss";

body {
  font-family: "My Font";
}
```

@tab `font.scss`

```scss
@font-face {
  font-family: "My Font";
  src: url("@styles/fonts/font.otf");
  font-weight: normal;
  font-style: normal;
}
```

:::

## Result

This site embeds [SFMono Nerd Font Ligaturized](https://github.com/shaunsingh/SFMono-Nerd-Font-Ligaturized) as the default monospace font. You can preview it here:

```elixir
<!-- @include: @src/snippets/firacode_examples/snippet.ex -->
```

Related: [FiraCode Examples](/article/zqachzvi/)
