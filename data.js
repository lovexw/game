// ============================================================
//  小吴游戏库 · 游戏数据
// ------------------------------------------------------------
//  后续补充新游戏：复制下面任意一个 { ... } 对象，粘贴到数组里，
//  改掉内容即可，页面会自动统计和展示。
//
//  字段说明：
//  id          唯一标识（英文，不要和其他游戏重复）
//  title       游戏中文名
//  subtitle    英文名 / 副标题
//  cover       封面图片路径（也可以换成真实图片，如 covers/xxx.jpg）
//  platforms   平台数组，可选值："PC" / "Switch" / "PS"
//  genre       类型标签
//  year        发行年份
//  playtime    游戏时长（小时）
//  rating      个人评分（10 分制，支持小数）
//  favorite    是否最爱（显示 ❤）
//  firstPlayed / lastPlayed  首次 / 最近游玩年份（写字符串即可，如 "2004" / "至今"）
//  status      当前状态（如：已通关 / 游玩中 / 已退坑 / 偶尔重温）
//  description 游戏介绍（卡片上会截断，弹窗里显示全文）
//  achievements 个人成就数组：icon（emoji）+ name + desc
// ============================================================

const GAMES = [
  {
    id: "cs15",
    title: "反恐精英 1.5",
    subtitle: "Counter-Strike 1.5",
    cover: "covers/cs15.svg",
    platforms: ["PC"],
    genre: "FPS · 竞技射击",
    year: 2002,
    playtime: 800,
    rating: 9.2,
    favorite: true,
    firstPlayed: "2004",
    lastPlayed: "2008",
    status: "怀旧收藏",
    description:
      "竞技射击的启蒙之作。Dust2 的每一个拐角、每一条闪光弹的抛物线都刻在记忆里。当年放学冲进网吧，五打五、买枪、rush B，那是属于局域网和青春的枪声。",
    achievements: [
      { icon: "🎯", name: "AWP 之王", desc: "用 AWP 在单局完成 10 次爆头击杀" },
      { icon: "💣", name: "拆弹专家", desc: "累计成功拆除 100 枚 C4" },
      { icon: "🏆", name: "网吧五连冠", desc: "局域网对战拿到五连胜" },
    ],
  },
  {
    id: "red-alert",
    title: "红色警戒 2",
    subtitle: "Command & Conquer: Red Alert 2",
    cover: "covers/red-alert.svg",
    platforms: ["PC"],
    genre: "RTS · 即时战略",
    year: 2000,
    playtime: 400,
    rating: 9.5,
    favorite: true,
    firstPlayed: "2003",
    lastPlayed: "2010",
    status: "偶尔重温",
    description:
      "「建造完毕！」「基洛夫空艇报告！」苏联的钢铁洪流、盟军的光棱坦克，共和国之辉里疯狂暴兵的快乐。和同学局域网对战到天黑的夜晚，是 RTS 的黄金时代。",
    achievements: [
      { icon: "🚁", name: "基洛夫报幕", desc: "一波 8 艘基洛夫空艇平推对手基地" },
      { icon: "🛡️", name: "钢铁洪流", desc: "20 辆天启坦克同时出击" },
      { icon: "⚡", name: "闪电翻盘", desc: "用超级武器在劣势局完成翻盘" },
    ],
  },
  {
    id: "meteor-butterfly-sword",
    title: "流星蝴蝶剑",
    subtitle: "Meteor Butterfly Sword",
    cover: "covers/meteor-butterfly-sword.svg",
    platforms: ["PC"],
    genre: "动作 · 武侠格斗",
    year: 2002,
    playtime: 300,
    rating: 9.0,
    favorite: false,
    firstPlayed: "2005",
    lastPlayed: "2008",
    status: "已通关",
    description:
      "国产武侠动作游戏的巅峰记忆。孟星魂的连招、暗器与轻功，在网吧里和同学互相切磋「化骨绵掌」。古龙笔下的江湖，刀光剑影，快意恩仇。",
    achievements: [
      { icon: "🦋", name: "蝶舞连击", desc: "打出 30 连击不落地" },
      { icon: "🗡️", name: "快意恩仇", desc: "通关全部剧情关卡" },
      { icon: "👊", name: "化骨绵掌", desc: "徒手击败一名持械高手" },
    ],
  },
  {
    id: "botw",
    title: "塞尔达传说：旷野之息",
    subtitle: "The Legend of Zelda: Breath of the Wild",
    cover: "covers/botw.svg",
    platforms: ["Switch"],
    genre: "开放世界 · 动作冒险",
    year: 2017,
    playtime: 145,
    rating: 9.8,
    favorite: true,
    firstPlayed: "2018",
    lastPlayed: "2020",
    status: "已通关 · 二周目",
    description:
      "Switch 时代的开放世界标杆。从初始台地纵身滑下的那一刻，海拉鲁的自由空气扑面而来。爬山、做饭、盾滑、砍树造桥，900 个呀哈哈收集到停不下来。",
    achievements: [
      { icon: "🍄", name: "海拉鲁大厨", desc: "解锁 60 种料理配方" },
      { icon: "🌰", name: "呀哈哈猎人", desc: "收集 300 颗克洛格种子" },
      { icon: "🐉", name: "逐龙者", desc: "集齐三条龙的全部素材" },
      { icon: "⚔️", name: "盖侬终结者", desc: "击败灾厄盖侬" },
    ],
  },
  {
    id: "totk",
    title: "塞尔达传说：王国之泪",
    subtitle: "The Legend of Zelda: Tears of the Kingdom",
    cover: "covers/totk.svg",
    platforms: ["Switch"],
    genre: "开放世界 · 动作冒险",
    year: 2023,
    playtime: 165,
    rating: 9.6,
    favorite: true,
    firstPlayed: "2023",
    lastPlayed: "2024",
    status: "游玩中",
    description:
      "天空、地面、地底三层世界把「自由」进一步放大。用究极手拼出飞天摩托、用通天术穿出洞窟的瞬间——创造力就是海拉鲁最强的武器。",
    achievements: [
      { icon: "🛠️", name: "究极手", desc: "造出属于自己的飞天摩托" },
      { icon: "🕳️", name: "深渊行者", desc: "点亮地底的全部树根" },
      { icon: "🏝️", name: "天空冒险家", desc: "造访所有天空神庙" },
    ],
  },
  {
    id: "slay-the-spire",
    title: "杀戮尖塔",
    subtitle: "Slay the Spire",
    cover: "covers/slay-the-spire.svg",
    platforms: ["PC", "Switch"],
    genre: "卡牌 · Roguelike",
    year: 2019,
    playtime: 320,
    rating: 9.3,
    favorite: false,
    firstPlayed: "2019",
    lastPlayed: "至今",
    status: "长期游玩",
    description:
      "Roguelike 卡牌构筑的开山之作。铁甲战士、沉默猎手、故障机器人、观者——每一局都是新的流派。「再来一把就睡」的结果永远是天亮。",
    achievements: [
      { icon: "🔥", name: "爬塔成瘾", desc: "累计完成 100 次攀登" },
      { icon: "⚡", name: "观者信徒", desc: "用观者击败碎片尖塔之心" },
      { icon: "💎", name: "无伤对决", desc: "无伤击败第三幕 Boss" },
    ],
  },
  {
    id: "katana-zero",
    title: "武士零",
    subtitle: "Katana ZERO",
    cover: "covers/katana-zero.svg",
    platforms: ["PC", "Switch"],
    genre: "动作 · 平台跳跃",
    year: 2019,
    playtime: 18,
    rating: 9.4,
    favorite: false,
    firstPlayed: "2019",
    lastPlayed: "2019",
    status: "已通关",
    description:
      "赛博朋克背景下的一刀必杀。子弹时间里规划路线，出刀一气呵成，死了就重来——但每一次重来都像在拍一部霓虹色的动作电影。短小精悍的神作。",
    achievements: [
      { icon: "⚡", name: "无伤疾走", desc: "无伤通过任意一关" },
      { icon: "🔨", name: "大锤处决", desc: "用锤子完成 20 次击杀" },
      { icon: "🎭", name: "记忆迷宫", desc: "通关并理清全部剧情线索" },
    ],
  },
  {
    id: "crossfire",
    title: "穿越火线",
    subtitle: "CrossFire",
    cover: "covers/crossfire.svg",
    platforms: ["PC"],
    genre: "FPS · 网络对战",
    year: 2008,
    playtime: 1500,
    rating: 8.6,
    favorite: false,
    firstPlayed: "2009",
    lastPlayed: "2016",
    status: "已退坑",
    description:
      "「Fire in the hole!」运输船、黑色城镇、沙漠灰，还有生化模式和挑战模式。三亿鼠标的枪战梦想，陪伴了无数个放学后的下午。",
    achievements: [
      { icon: "💥", name: "手雷艺术家", desc: "单局手雷完成三杀" },
      { icon: "🧟", name: "生化猎手", desc: "生化模式单局 50 杀" },
      { icon: "🔫", name: "运输船常客", desc: "运输船累计 500 局" },
    ],
  },
  {
    id: "league-of-legends",
    title: "英雄联盟",
    subtitle: "League of Legends",
    cover: "covers/league-of-legends.svg",
    platforms: ["PC"],
    genre: "MOBA · 竞技对战",
    year: 2009,
    playtime: 2500,
    rating: 9.0,
    favorite: true,
    firstPlayed: "2013",
    lastPlayed: "至今",
    status: "偶尔上线",
    description:
      "「德玛西亚！」从 Faker 的劫到五杀摇滚乐队，从宿舍开黑到工作后偶尔上线。召唤师峡谷永远有下一局，五杀的快感永远都在。",
    achievements: [
      { icon: "🏆", name: "五杀时刻", desc: "拿下第一次五杀（Pentakill）" },
      { icon: "👑", name: "超神之路", desc: "单局 20 杀 0 死亡" },
      { icon: "🐉", name: "元素掌控", desc: "单局控下 4 条元素亚龙" },
    ],
  },
];
