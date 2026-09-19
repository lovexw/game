# 🎮 小吴游戏库

一个纯静态的个人游戏收藏馆网页：卡片式展示、真实封面、平台标签、游戏时长、个人成就和评分，点卡片还有详情弹窗。

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
game/
├── index.html   页面结构
├── style.css    明亮风样式
├── app.js       渲染逻辑（统计、筛选、排序、搜索、弹窗）
├── data.js      ★ 游戏数据，全部在这里维护
└── covers/      游戏封面图片（真实游戏封面，JPG 格式）
    └── README.md  封面命名规范与找图指南
```

## 快速上手：添加新游戏

### 第 1 步：加数据

打开 `data.js`，复制任意一个 `{ ... }` 游戏对象，粘贴到 `GAMES` 数组里修改即可，页面会自动重新统计。

常用字段说明：

| 字段 | 说明 | 示例 |
|---|---|---|
| `id` | **唯一标识**，英文小写连字符，和封面文件名对应 | `"elden-ring"` |
| `title` | 游戏中文名 | `"艾尔登法环"` |
| `subtitle` | 英文名 / 副标题 | `"Elden Ring"` |
| `cover` | 封面路径，指向 `covers/` 下的文件 | `"covers/elden-ring.jpg"` |
| `platforms` | 平台数组，可选 `"PC" / "Switch" / "PS"` | `["PC", "PS"]` |
| `genre` | 类型标签 | `"开放世界 · 动作 RPG"` |
| `year` | 发行年份 | `2022` |
| `playtime` | 游戏时长（小时） | `120` |
| `rating` | 个人评分（10 分制，支持小数） | `9.5` |
| `favorite` | 是否最爱（显示 ❤） | `true / false` |
| `firstPlayed` / `lastPlayed` | 首次 / 最近游玩年份 | `"2022" / "至今"` |
| `status` | 当前状态 | `"已通关" / "游玩中" / "偶尔重温"` |
| `description` | 游戏介绍（卡片截断，弹窗显示全文） | — |
| `achievements` | 个人成就数组：`{ icon, name, desc }` | — |

### 第 2 步：加封面图

1. 按游戏 `id` 命名，放到 `covers/` 文件夹，例如 `covers/elden-ring.jpg`
2. 封面要求：**JPG 格式、横版优先（16:9 或 16:10 最佳）、分辨率 ≥ 800px 宽**
3. 找图方法见 [`covers/README.md`](./covers/README.md)

### 第 3 步：验证 & 部署

本地双击 `index.html` 确认新游戏正常显示，封面加载成功后执行：

```bash
./deploy.sh "添加新游戏：XXX"
```

## 功能

- 🏠 顶部统计：游戏总数 / 总时长 / 平均评分 / 最爱数量
- 🏷 平台筛选（全部 / PC / Switch / PS）、🔍 搜索、↕ 排序（评分 / 时长 / 名称）
- 🃏 卡片：封面、平台标签、评分徽章、状态、成就速览、时长与成就数
- 🖼 点击卡片打开详情弹窗：星级评分、游玩时间线、完整介绍、成就墙
- 📱 响应式布局，手机上也能看

---

## 🤖 AI 维护指南

> 本节供后续 AI 助手接手项目时参考，确保风格一致、不出错。

### 维护原则

1. **只动 `data.js` 和 `covers/`**：页面逻辑、样式、HTML 结构不要改，除非明确要求
2. **保持字段风格统一**：类型标签用 `"大类 · 子类"` 格式，状态用词参考现有数据
3. **封面命名严格对齐 `id`**：`covers/{id}.jpg`，不要自创文件名
4. **不要删除旧数据**：新增游戏追加到数组末尾，不要重排顺序
5. **图片加载失败有兜底**：`app.js` 已处理 onerror 隐藏坏图，不影响布局，但提交前务必本地验证

### 添加新游戏的 AI 工作流

```
1. 用户说「加个游戏：XXX」
2. 确认/补全信息：中文名、英文名、平台、类型、年份、评分、时长
3. 搜封面图 → 下载到 covers/{id}.jpg（横版优先）
4. 在 data.js 的 GAMES 数组末尾追加对象，id 用英文小写连字符
5. 本地打开 index.html 确认显示正常
6. 提醒用户运行 ./deploy.sh 部署（或用户明确要求时再执行）
```

### 评分与风格参考

- 评分尺度：神作 9.5+，优秀 8.5-9.4，不错 7.5-8.4，一般 6-7.4
- 描述语气：个人向、有记忆点、带青春/情怀感，不要写官方简介腔
- 成就设计：3-4 个，icon 用 emoji，name 要有点中二/情怀感，desc 写具体场景

### 封面图获取建议

- **首选**：游戏官方官网、Steam 商店页、Nintendo eShop 的 banner/key art（横版大图）
- **备选**：Wikipedia、MobyGames、GameFAQs 的 box art（注意竖版 box art 会被裁切，优先找横版 key art）
- **关键词**：`"游戏英文名" + "key art" / "banner" / "cover art"`
- 详见 [`covers/README.md`](./covers/README.md)
