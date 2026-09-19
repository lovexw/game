# 🖼 游戏封面规范

本文件夹存放所有游戏封面图片。

## 命名规范

- **文件名 = 游戏 id + `.jpg`**
- 游戏 id 在 `data.js` 中定义，英文小写，单词用连字符 `-` 分隔
- 示例：`cs15.jpg`、`red-alert.jpg`、`breath-of-the-wild.jpg`

## 图片要求

| 项目 | 要求 |
|---|---|
| 格式 | **JPG**（.jpg），不要用 PNG / WebP |
| 比例 | **横版优先**，16:9 或 16:10 最佳（页面卡片容器就是 16:9） |
| 分辨率 | 宽度 ≥ 800px，推荐 1200px 以上 |
| 大小 | 单张 < 500KB 为宜，太大可压缩 |
| 内容 | 优先选带游戏标题 logo 的官方 key art / banner / box art |

> 注意：页面用 `object-fit: cover` 裁切，竖版 box art 会被裁掉上下部分，**尽量选横版宣传图**。

## 去哪里找封面

### 推荐来源（按优先级）

1. **Steam 商店页** — 每个游戏都有 header capsule（横版大图，16:9 比例，完美适配）
   - 格式示例：`https://cdn.cloudflare.steamstatic.com/steam/apps/{appid}/header.jpg`
2. **Nintendo eShop / PlayStation Store** — 官方 banner 图
3. **Wikipedia** — 搜游戏英文名，词条里的 box art 质量不错
4. **MobyGames / GameFAQs** — 老牌游戏数据库，cover art 齐全
5. **Google 图片搜索** — 关键词 `"游戏英文名" + "key art" / "banner" / "official art"`

### 搜索关键词模板

```
"游戏英文名" key art
"游戏英文名" banner
"游戏英文名" official cover art
"游戏英文名" 官方宣传图
```

### 下载后检查

- [ ] 文件名和 `data.js` 里的 `cover` 路径一致
- [ ] 图片能正常打开，不是损坏文件
- [ ] 比例接近横版（避免极端竖图或方图）
- [ ] 没有明显的水印/网址/logo 叠加（干净的官方图最佳）

## 旧版 SVG 文件

本文件夹下的 `.svg` 文件是早期手绘风占位图，现在已全部替换为真实 JPG 封面。
如无需要可以删除，保留也不影响页面（页面已改为引用 .jpg）。
