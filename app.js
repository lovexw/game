/* ============ 小吴游戏库 · 渲染逻辑 ============ */

const PLATFORM_META = {
  "PC":     { label: "PC",     icon: "💻", cls: "p-pc" },
  "Switch": { label: "Switch", icon: "🎮", cls: "p-switch" },
  "PS":     { label: "PS",     icon: "🕹️", cls: "p-ps" },
};
const PLATFORMS = ["全部", "PC", "Switch", "PS"];

const state = { filter: "全部", sort: "default", query: "" };

const $ = (sel) => document.querySelector(sel);
const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function fmtHours(h) {
  return h >= 10000 ? (h / 10000).toFixed(1) + " 万" : h.toLocaleString("zh-CN");
}

function ratingTier(score) {
  if (score >= 9.5) return "传世神作";
  if (score >= 9.0) return "心中神作";
  if (score >= 8.0) return "值得反复玩";
  if (score >= 7.0) return "很不错";
  return "一般般";
}

/* ---------- 统计 ---------- */
function renderStats() {
  const total = GAMES.length;
  const hours = GAMES.reduce((s, g) => s + (g.playtime || 0), 0);
  const avg = total ? (GAMES.reduce((s, g) => s + (g.rating || 0), 0) / total).toFixed(1) : "0";
  const favs = GAMES.filter((g) => g.favorite).length;
  $("#stats").innerHTML = `
    <span class="stat-chip">🎮 游戏总数<b>${total}</b></span>
    <span class="stat-chip green">⏱ 总时长<b>${fmtHours(hours)} 小时</b></span>
    <span class="stat-chip gold">⭐ 平均评分<b>${avg}</b></span>
    <span class="stat-chip">❤️ 最爱<b>${favs} 款</b></span>
  `;
}

/* ---------- 筛选 / 排序 ---------- */
function getFiltered() {
  let list = GAMES.filter(
    (g) => state.filter === "全部" || (g.platforms || []).includes(state.filter)
  );
  if (state.query) {
    const q = state.query.trim().toLowerCase();
    list = list.filter((g) =>
      [g.title, g.subtitle, g.genre, ...(g.platforms || [])]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }
  const sorters = {
    rating: (a, b) => b.rating - a.rating,
    playtime: (a, b) => b.playtime - a.playtime,
    title: (a, b) => a.title.localeCompare(b.title, "zh-Hans-CN"),
  };
  if (sorters[state.sort]) list = [...list].sort(sorters[state.sort]);
  return list;
}

/* ---------- 卡片 ---------- */
function platPills(g, small) {
  return (g.platforms || [])
    .map((p) => {
      const m = PLATFORM_META[p] || { label: p, icon: "🎮", cls: "" };
      return `<span class="plat ${m.cls}">${m.icon} ${esc(m.label)}</span>`;
    })
    .join("");
}

function achvChips(g) {
  const list = g.achievements || [];
  const shown = list.slice(0, 2).map((a) => `<span class="chip">${a.icon} ${esc(a.name)}</span>`);
  if (list.length > 2) shown.push(`<span class="chip more">+${list.length - 2}</span>`);
  return shown.join("");
}

function cardHTML(g) {
  return `
  <article class="card" data-id="${esc(g.id)}">
    <div class="cover">
      <img src="${esc(g.cover)}" alt="${esc(g.title)} 封面" loading="lazy"
           onerror="this.style.display='none'">
      <div class="cover-badges">${platPills(g)}</div>
      <span class="rating-badge">⭐ ${g.rating.toFixed(1)}</span>
      ${g.favorite ? '<span class="fav-mark">❤️</span>' : ""}
    </div>
    <div class="card-body">
      <div class="title-row">
        <h3 class="card-title">${esc(g.title)}</h3>
        ${g.status ? `<span class="status-pill">${esc(g.status)}</span>` : ""}
      </div>
      ${g.subtitle ? `<p class="card-sub">${esc(g.subtitle)}</p>` : ""}
      <p class="card-meta">${esc(g.genre || "")}${g.year ? " · " + g.year : ""}</p>
      <p class="card-desc">${esc(g.description || "")}</p>
      <div class="achv-strip">${achvChips(g)}</div>
      <div class="card-foot">
        <span>⏱ <b>${fmtHours(g.playtime || 0)}</b> 小时</span>
        <span>🏆 <b>${(g.achievements || []).length}</b> 项成就</span>
      </div>
    </div>
  </article>`;
}

const ADD_CARD_HTML = `
  <article class="card add-card">
    <div class="add-inner">
      <span class="plus">➕</span>
      <b>待补充…</b>
      <p>后续新游戏就加在这里<br>编辑 <code>data.js</code>，复制一个游戏对象改一改即可</p>
    </div>
  </article>`;

function renderGrid() {
  const list = getFiltered();
  const grid = $("#grid");
  if (!list.length) {
    grid.innerHTML = `<div class="empty-state">🎮 这里空空的，换个筛选条件，或者去 <code>data.js</code> 添加新游戏吧！</div>`;
    return;
  }
  grid.innerHTML = list.map(cardHTML).join("") + ADD_CARD_HTML;
  grid.querySelectorAll(".card[data-id]").forEach((el) => {
    el.addEventListener("click", () => {
      const g = GAMES.find((x) => x.id === el.dataset.id);
      if (g) openModal(g);
    });
  });
}

/* ---------- 弹窗 ---------- */
function starsHTML(score) {
  const pct = Math.max(0, Math.min(100, (score / 10) * 100));
  return `
    <span class="stars">★★★★★<span class="stars-fill" style="width:${pct}%">★★★★★</span></span>`;
}

function modalHTML(g) {
  const achv = (g.achievements || [])
    .map(
      (a) => `
      <li>
        <span class="achv-icon">${a.icon}</span>
        <div><b>${esc(a.name)}</b><p>${esc(a.desc)}</p></div>
      </li>`
    )
    .join("");

  const fact = (k, v) =>
    v ? `<div class="fact"><div class="k">${k}</div><div class="v">${esc(v)}</div></div>` : "";

  return `
    <img class="modal-cover" src="${esc(g.cover)}" alt="${esc(g.title)} 封面"
         onerror="this.style.display='none'">
    <div class="modal-body">
      <h2 class="modal-title">${esc(g.title)}</h2>
      ${g.subtitle ? `<p class="modal-sub">${esc(g.subtitle)}</p>` : ""}
      <div class="modal-tags">
        ${platPills(g)}
        ${g.genre ? `<span class="tag">🏷️ ${esc(g.genre)}</span>` : ""}
        ${g.year ? `<span class="tag">📅 ${g.year} 年发行</span>` : ""}
        ${g.favorite ? '<span class="tag">❤️ 我的挚爱</span>' : ""}
      </div>

      <div class="score-row">
        <div class="score-big">${g.rating.toFixed(1)}<small> / 10</small></div>
        <div>
          ${starsHTML(g.rating)}
          <div class="tier">个人评价：${ratingTier(g.rating)}</div>
        </div>
      </div>

      <div class="fact-grid">
        ${fact("⏱ 游戏时长", fmtHours(g.playtime || 0) + " 小时")}
        ${fact("📅 首次游玩", g.firstPlayed ? g.firstPlayed + " 年" : "")}
        ${fact("🕐 最近游玩", g.lastPlayed ? g.lastPlayed + " 年" : "")}
        ${fact("📌 当前状态", g.status)}
      </div>

      ${g.description ? `<p class="modal-desc">${esc(g.description)}</p>` : ""}

      ${
        achv
          ? `<h4 class="modal-h4">🏆 个人成就（${(g.achievements || []).length}）</h4>
             <ul class="achv-list">${achv}</ul>`
          : ""
      }
    </div>`;
}

function openModal(g) {
  $("#modalContent").innerHTML = modalHTML(g);
  $("#modalOverlay").hidden = false;
  document.body.style.overflow = "hidden";
}
function closeModal() {
  $("#modalOverlay").hidden = true;
  $("#modalContent").innerHTML = "";
  document.body.style.overflow = "";
}

/* ---------- 事件绑定 ---------- */
function renderFilters() {
  $("#filters").innerHTML = PLATFORMS.map(
    (p) =>
      `<button class="filter-btn ${p === state.filter ? "active" : ""}" data-plat="${p}">${
        p === "全部" ? "🗂 全部" : `${PLATFORM_META[p].icon} ${p}`
      }</button>`
  ).join("");
  $("#filters").querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.filter = btn.dataset.plat;
      renderFilters();
      renderGrid();
    });
  });
}

function init() {
  renderStats();
  renderFilters();
  renderGrid();

  $("#search").addEventListener("input", (e) => {
    state.query = e.target.value;
    renderGrid();
  });
  $("#sort").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderGrid();
  });
  $("#modalClose").addEventListener("click", closeModal);
  $("#modalOverlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !$("#modalOverlay").hidden) closeModal();
  });
}

init();
