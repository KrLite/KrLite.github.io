---
title: Move Branches Seamlessly Between Repositories
author: KrLite
icon: ri:git-branch-fill
createTime: 2025/04/13 16:36:27
permalink: /notes/coding/tips/56930csl/
---

Sometimes we need to move branches between repositories. A practical way is through `git bundle`:

Let's say we have two repositories, `repo1` and `repo2`, and we want to move a branch named `feature-branch` from `repo1` to `repo2`. It might contain totally unrelated commits, but we want to keep the history of `feature-branch` intact.

::: file-tree

- repo1
  - **feature-branch**
  - main
- repo2
  - main

:::

::: steps

1. Create a Bundle

   Open a terminal and navigate to `repo1`. Create a bundle file that contains the `feature-branch`:

   ```bash :no-line-numbers
   cd /path/to/repo1
   git bundle create feature-branch.bundle feature-branch
   ```

2. Move the Bundle to Somewhere You Can Access (Optional)

3. Navigate to `repo2`

   ```bash :no-line-numbers
   cd /path/to/repo2
   ```

4. Fetch the Bundle

   ```bash :no-line-numbers
   git fetch /path/to/feature-branch.bundle feature-branch:feature-branch # [!code word:feature-branch\:feature-branch]
   ```

   ::: tip
   As for the syntax `feature-branch:feature-branch`, the branch name before the colon is the remote branch name, while the one after the colon is the local branch name. You should always consider filling both of them.

:::

Now you have the `feature-branch` in `repo2` with all its history intact. It's safe to delete the bundle and the original branch in `repo1`.
