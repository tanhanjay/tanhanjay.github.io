# 滕浩钧 · 学术主页

个人学术主页，基于 **Academic Pages** 模板（Jekyll），托管于 **GitHub Pages**。

- <svg class="ico" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px;"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> 线上地址：<https://tanhanjay.github.io>
- 🛠 技术栈：Jekyll + Markdown + Academic Pages 主题
- <svg class="ico" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px;"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> 主题来源：<https://github.com/academicpages/academicpages.github.io>

---

## ❗ 部署步骤（重要）

本仓库同时包含**新主页**（根目录）和**2016 年旧博客**（`blog/` 子目录）。

### 1. 上传文件到 GitHub

把本目录的**全部内容**上传到 `tanhanjay/tanhanjay.github.io` 仓库的 `master` 分支，
**覆盖**原有文件（旧博客已包含在 `blog/` 中，不会丢失）。

### 2. 开启 GitHub Pages

进入仓库 **Settings → Pages**：

- **Source** 选择 `Deploy from a branch`
- **Branch** 选择 `master`，目录选择 `/ (root)`
- 点击 **Save**

### 3. 等待构建

约 1–3 分钟后访问 <https://tanhanjay.github.io> 即可。

---

## 📁 目录结构

```
.
├── _config.yml           # 站点配置（名称、作者、主题色等）
├── Gemfile               # Ruby 依赖
├── _data/
│   └── navigation.yml    # 顶部导航菜单
├── _pages/               # 页面
│   ├── about.md          #   首页
│   ├── cv.md             #   个人简介
│   ├── publications.md   #   论文列表页
│   ├── projects.md       #   科研项目
│   └── teaching.md       #   教学
├── _publications/        # 单篇论文数据（每篇一个文件）
├── _layouts/             # 主题布局
├── _includes/            # 主题片段
├── _sass/                # 主题样式
├── assets/               # CSS / JS
├── images/
│   └── profile.png       # 个人头像（请替换成真实照片）
└── blog/                 # 2016 年旧博客（静态 HTML，原样保留）
```

---

## ✏ 如何修改内容

### 换头像

把真实照片命名为 `profile.png`，覆盖 `images/profile.png`（建议正方形，400×400 以上）。

### 改站点信息

编辑 `_config.yml`：

```yaml
author:
  name     : "滕浩钧"
  bio      : "烟台大学<br>计算机与控制工程学院<br>讲师 · 工学博士"
  email    : "tenghaojun@ytu.edu.cn"
  github   : "tanhanjay"
```

### 换主题配色

`_config.yml` 里的 `site_theme` 可选：

```
default  air  sunrise  mint  dirt  contrast
```

### 加一篇论文

在 `_publications/` 下新建文件，命名格式 `YYYY-MM-DD-短名.md`：

```markdown
---
title: "论文标题"
collection: publications
category: manuscripts      # manuscripts=期刊, conferences=会议, books=专著
permalink: /publication/你的短名
excerpt: '一句话摘要'
date: 2025-01-01
venue: '期刊或会议名称, 年份, 卷(期): 页码'
citation: '作者. (年份). &quot;标题.&quot; <i>期刊名</i>.'
---
```

### 改导航菜单

编辑 `_data/navigation.yml`。

### 加新页面

在 `_pages/` 下新建 `.md`：

```markdown
---
layout: archive
title: "页面标题"
permalink: /your-url/
author_profile: true
---

正文内容……
```

然后在 `_data/navigation.yml` 加一行。

---

## 👀 本地预览（可选）

需要 Ruby 3.x：

```bash
bundle install
bundle exec jekyll serve
# 打开 http://127.0.0.1:4000
```

---

## ⚠ 已知问题

### 旧博客（`blog/`）样式可能丢失

旧博客是 2016 年用 Hexo 生成的，引用了两个**已停服**的服务：

| 服务 | 用途 | 状态 |
|---|---|---|
| `cdn.bootcss.com` | CSS / jQuery 等前端库 | ❌ 已停止服务 |
| 多说评论 (duoshuo) | 评论系统 | ❌ 2017 年关闭 |

所以旧博客页面**内容能看，但样式会走样、评论区空白**。

**如需修复**：可以把 `cdn.bootcss.com` 替换成 `cdnjs.cloudflare.com` 或 `cdn.jsdelivr.net`，
评论系统建议直接移除。这属于旧存档，也可以保持原样不动。

---

## <svg class="ico" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px;"><path d="M18 20V10M12 20V4M6 20v-6"/></svg> 数据来源

- 教师信息：[烟台大学计算机与控制工程学院官方主页](https://computer.ytu.edu.cn/info/1020/5511.htm)
- 论文核实：Crossref 学术数据库

> ⚠ **教育背景**（博士毕业年份）官方主页未列出，是页面里的 `—` 占位符，请自行补充。
> **完整论文列表（共 18 篇）** 官方主页仅列出 7 篇代表作，其余请自行补充。
