// ============================================================
// 共享工具函数
// ============================================================

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function getTheme() {
    return localStorage.getItem('theme') || 'light';
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function toggleTheme() {
    const cur = getTheme();
    const next = cur === 'dark' ? 'light' : 'dark';
    setTheme(next);
    return next;
}

// 积分榜
function getRank(key) {
    try {
        const data = localStorage.getItem('rank_' + key);
        return data ? JSON.parse(data) : [];
    } catch {
        return [];
    }
}

function saveRank(key, score) {
    const list = getRank(key);
    list.push({ score: score, time: Date.now() });
    if (list.length > 50) list.shift();
    localStorage.setItem('rank_' + key, JSON.stringify(list));
}

function getBestScore(key) {
    const list = getRank(key);
    if (list.length === 0) return 0;
    return Math.max(...list.map(item => item.score));
}

function getRankList(key, limit) {
    const list = getRank(key);
    return list.slice().sort((a, b) => b.score - a.score).slice(0, limit || 10);
}

// DOM 辅助
function $(sel, ctx) {
    return (ctx || document).querySelector(sel);
}

function $$(sel, ctx) {
    return Array.from((ctx || document).querySelectorAll(sel));
}

function createEl(tag, cls, html) {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    if (html) el.innerHTML = html;
    return el;
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        shuffle, randomInt, pick, sleep,
        getTheme, setTheme, toggleTheme,
        getRank, saveRank, getBestScore, getRankList,
        $, $$, createEl
    };
}