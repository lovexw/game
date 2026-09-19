# 🎮 小吴游戏库

一个纯静态的个人游戏收藏馆网页：卡片式展示、封面、平台标签、游戏时长、个人成就和评分，点卡片还有详情弹窗。

- 🌐 线上地址：**https://game-34j.pages.dev**（Cloudflare Pages）
- 🐙 代码仓库：**https://github.com/lovexw/game**
- 📱 无需任何依赖，本地双击 `index.html` 也能打开

## 更新 & 部署

改完代码后一键同步 GitHub + 部署 Cloudflare（账号 0471666@gmail.com）：

```bash
./deploy.sh "本次更新说明"
```

只部署不同步 GitHub：`wrangler pages deploy . --project-name=game --branch=main`
（首次使用需先 `wrangler login` 授权 Cloudflare；GitHub 凭证由 `gh` CLI 管理，账号 lovexw）

## 文件结构

```
xiaowu-game-library/
├── index.html   页面结构
├── style.css    明亮风样式
├── app.js       渲染逻辑（统计、筛选、排序、搜索、弹窗）
├── data.js      ★ 游戏数据，全部在这里维护
└── covers/      游戏封面（目前是手绘风 SVG，可换成真实图片）
```

## 如何添加新游戏

打开 `data.js`，复制任意一个 `{ ... }` 游戏对象，粘贴到 `GAMES` 数组里修改即可，页面会自动重新统计。

常用字段：`platforms`（`"PC" / "Switch" / "PS"`，可多选）、`playtime`（小时）、`rating`（10 分制）、`favorite`（是否显示 ❤）、`achievements`（成就列表）、`status`（当前状态）。

## 如何换真实封面

把图片放进 `covers/` 文件夹（如 `covers/botw.jpg`），然后在 `data.js` 里把对应游戏的 `cover` 改成 `"covers/botw.jpg"` 即可；图片加载失败会自动隐藏，不影响布局。

## 功能

- 🏠 顶部统计：游戏总数 / 总时长 / 平均评分 / 最爱数量
- 🏷 平台筛选（全部 / PC / Switch / PS）、🔍 搜索、↕ 排序（评分 / 时长 / 名称）
- 🃏 卡片：封面、平台标签、评分徽章、状态、成就速览、时长与成就数
- 🖼 点击卡片打开详情弹窗：星级评分、游玩时间线、完整介绍、成就墙
- 📱 响应式布局，手机上也能看
