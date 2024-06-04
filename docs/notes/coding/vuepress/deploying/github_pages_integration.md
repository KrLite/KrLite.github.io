---
title: GitHub Pages Integration
icon: bxl:github
author: KrLite
createTime: 2024/06/02 20:06:25
permalink: /notes/coding/vuepress/deploying/wqervoc2/
---

::: tip
You can refer to the [official documentation](https://v2.vuepress.vuejs.org/guide/deployment.html#github-pages) for more details.
:::

## The Workflow

Currently, this site is deployed to GitHub Pages through the workflow defined below. It is more practical than the default workflow provided by [VuePress](https://vuepress.vuejs.org).

::: details
::: code-tabs
@tab `.github/workflows/deploy.yml`
@[code](deploy.yml)
:::

## The Configuration

### Repository Settings

You simply need to enable the GitHub Pages feature on your repository in the settings.

1. Go to **Settings** > **Pages** > **Build and deployment.**
2. From **Source,** select **GitHub Actions.**

## Known Issues

### Vue Router

Vue Router won't work properly on GitHub Pages sites unless they are deployed to the repository `<USERNAME>.github.io` directly, which means, it cannot handle a `base` option beyond `/`.

This is unfixable as it also happens in single page applications that use Vue Router. I recommend **using a custom domain** or **using [VitePress](https://vitepress.dev) instead.**
