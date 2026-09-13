---
layout: archive
title: "论文发表"
permalink: /publications/
author_profile: true
---

{% include base_path %}

<p style="font-size:0.95rem;color:#555;">
共发表学术论文 <b>18 篇</b>，第一位授权发明专利 <b>2 项</b>。
以下列出代表性论文（带 <b>*</b> 为通讯作者）。
</p>

## 期刊论文

{% for post in site.publications reversed %}
  {% if post.category == 'manuscripts' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

## 会议论文

{% for post in site.publications reversed %}
  {% if post.category == 'conferences' %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

---

## 发明专利

首位授权发明专利 <b>2 项</b>。

---

<p style="font-size:0.88rem;color:#777;">
<svg class="ico" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> 论文信息来源于<a href="https://computer.ytu.edu.cn/info/1020/5511.htm">烟台大学计算机与控制工程学院官方教师主页</a>及 Crossref 学术数据库。
</p>
