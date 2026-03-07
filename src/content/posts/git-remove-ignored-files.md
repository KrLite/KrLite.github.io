---
title: 移除Git中被忽略但已经被跟踪的文件
pubDate: '2026-03-07'
---

在Git中，如果某个文件已经被添加到版本控制，而后又被添加到了`.gitignore`文件中，那么这个文件仍然会被Git跟踪。要移除这些被忽略但已经被跟踪的文件，可以使用以下命令：

```bash
git rm -r --cached . && git add . && git commit -am "git: remove ignored files"
```

这个命令的作用是：

1. `git rm -r --cached .`：从Git的索引（缓存）中移除当前目录下的所有文件，但保留在工作区中
2. `git add .`：重新添加所有文件到索引中，除了被忽略的文件
3. `git commit -am "git: remove ignored files"`：提交更改

相比于用`git rm -r --cached <file>`逐个文件移除，这个命令组合更为简洁高效，尤其适用于大量被忽略但已经被跟踪的文件。
