// ============================================================
// 偏旁对决 - 题库数据（修正版：反向题唯一解）
// ============================================================

const RADICAL_QUESTIONS = {};

// ----- 偏旁库 -----
const RADICAL_DATA = {
    easy: [
        { char: '河', radical: '氵', wrongs: ['亻', '讠', '木'] },
        { char: '海', radical: '氵', wrongs: ['亻', '讠', '木'] },
        { char: '湖', radical: '氵', wrongs: ['亻', '讠', '木'] },
        { char: '江', radical: '氵', wrongs: ['亻', '讠', '木'] },
        { char: '洋', radical: '氵', wrongs: ['亻', '讠', '木'] },
        { char: '树', radical: '木', wrongs: ['氵', '亻', '艹'] },
        { char: '林', radical: '木', wrongs: ['氵', '亻', '艹'] },
        { char: '村', radical: '木', wrongs: ['氵', '亻', '艹'] },
        { char: '松', radical: '木', wrongs: ['氵', '亻', '艹'] },
        { char: '柏', radical: '木', wrongs: ['氵', '亻', '艹'] },
        { char: '花', radical: '艹', wrongs: ['氵', '亻', '木'] },
        { char: '草', radical: '艹', wrongs: ['氵', '亻', '木'] },
        { char: '苗', radical: '艹', wrongs: ['氵', '亻', '木'] },
        { char: '荷', radical: '艹', wrongs: ['氵', '亻', '木'] },
        { char: '莲', radical: '艹', wrongs: ['氵', '亻', '木'] },
        { char: '你', radical: '亻', wrongs: ['氵', '讠', '木'] },
        { char: '他', radical: '亻', wrongs: ['氵', '讠', '木'] },
        { char: '们', radical: '亻', wrongs: ['氵', '讠', '木'] },
        { char: '做', radical: '亻', wrongs: ['氵', '讠', '木'] },
        { char: '住', radical: '亻', wrongs: ['氵', '讠', '木'] },
        { char: '说', radical: '讠', wrongs: ['氵', '亻', '木'] },
        { char: '话', radical: '讠', wrongs: ['氵', '亻', '木'] },
        { char: '请', radical: '讠', wrongs: ['氵', '亻', '木'] },
        { char: '读', radical: '讠', wrongs: ['氵', '亻', '木'] },
        { char: '讲', radical: '讠', wrongs: ['氵', '亻', '木'] },
        { char: '打', radical: '扌', wrongs: ['氵', '亻', '木'] },
        { char: '拍', radical: '扌', wrongs: ['氵', '亻', '木'] },
        { char: '拉', radical: '扌', wrongs: ['氵', '亻', '木'] },
        { char: '把', radical: '扌', wrongs: ['氵', '亻', '木'] },
        { char: '捉', radical: '扌', wrongs: ['氵', '亻', '木'] },
        { char: '红', radical: '纟', wrongs: ['氵', '亻', '木'] },
        { char: '绿', radical: '纟', wrongs: ['氵', '亻', '木'] },
        { char: '细', radical: '纟', wrongs: ['氵', '亻', '木'] },
        { char: '组', radical: '纟', wrongs: ['氵', '亻', '木'] },
        { char: '织', radical: '纟', wrongs: ['氵', '亻', '木'] },
        { char: '猫', radical: '犭', wrongs: ['氵', '亻', '木'] },
        { char: '狗', radical: '犭', wrongs: ['氵', '亻', '木'] },
        { char: '狼', radical: '犭', wrongs: ['氵', '亻', '木'] },
        { char: '猪', radical: '犭', wrongs: ['氵', '亻', '木'] },
        { char: '猴', radical: '犭', wrongs: ['氵', '亻', '木'] },
        { char: '蚂', radical: '虫', wrongs: ['氵', '亻', '木'] },
        { char: '蚁', radical: '虫', wrongs: ['氵', '亻', '木'] },
        { char: '蛙', radical: '虫', wrongs: ['氵', '亻', '木'] },
        { char: '蛇', radical: '虫', wrongs: ['氵', '亻', '木'] },
        { char: '蛛', radical: '虫', wrongs: ['氵', '亻', '木'] },
        { char: '吃', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '唱', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '呼', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '吸', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '吹', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '跑', radical: '足', wrongs: ['氵', '亻', '木'] },
        { char: '跳', radical: '足', wrongs: ['氵', '亻', '木'] },
        { char: '跟', radical: '足', wrongs: ['氵', '亻', '木'] },
        { char: '踢', radical: '足', wrongs: ['氵', '亻', '木'] },
        { char: '路', radical: '足', wrongs: ['氵', '亻', '木'] },
        { char: '嘴', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '品', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '器', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '喊', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '叫', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '叶', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '吧', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '呀', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '呢', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '吗', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '啊', radical: '口', wrongs: ['氵', '亻', '木'] },
    ],
    medium: [
        { char: '想', radical: '心', wrongs: ['氵', '亻', '木'] },
        { char: '忘', radical: '心', wrongs: ['氵', '亻', '木'] },
        { char: '念', radical: '心', wrongs: ['氵', '亻', '木'] },
        { char: '思', radical: '心', wrongs: ['氵', '亻', '木'] },
        { char: '意', radical: '心', wrongs: ['氵', '亻', '木'] },
        { char: '铁', radical: '钅', wrongs: ['氵', '亻', '木'] },
        { char: '银', radical: '钅', wrongs: ['氵', '亻', '木'] },
        { char: '铜', radical: '钅', wrongs: ['氵', '亻', '木'] },
        { char: '钢', radical: '钅', wrongs: ['氵', '亻', '木'] },
        { char: '针', radical: '钅', wrongs: ['氵', '亻', '木'] },
        { char: '病', radical: '疒', wrongs: ['氵', '亻', '木'] },
        { char: '痛', radical: '疒', wrongs: ['氵', '亻', '木'] },
        { char: '痒', radical: '疒', wrongs: ['氵', '亻', '木'] },
        { char: '疯', radical: '疒', wrongs: ['氵', '亻', '木'] },
        { char: '瘦', radical: '疒', wrongs: ['氵', '亻', '木'] },
        { char: '远', radical: '辶', wrongs: ['氵', '亻', '木'] },
        { char: '近', radical: '辶', wrongs: ['氵', '亻', '木'] },
        { char: '还', radical: '辶', wrongs: ['氵', '亻', '木'] },
        { char: '过', radical: '辶', wrongs: ['氵', '亻', '木'] },
        { char: '进', radical: '辶', wrongs: ['氵', '亻', '木'] },
        { char: '围', radical: '囗', wrongs: ['氵', '亻', '木'] },
        { char: '困', radical: '囗', wrongs: ['氵', '亻', '木'] },
        { char: '园', radical: '囗', wrongs: ['氵', '亻', '木'] },
        { char: '国', radical: '囗', wrongs: ['氵', '亻', '木'] },
        { char: '回', radical: '囗', wrongs: ['氵', '亻', '木'] },
        { char: '喝', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '嘴', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '被', radical: '衤', wrongs: ['礻', '氵', '木'] },
        { char: '袜', radical: '衤', wrongs: ['礻', '氵', '木'] },
        { char: '裤', radical: '衤', wrongs: ['礻', '氵', '木'] },
        { char: '衬', radical: '衤', wrongs: ['礻', '氵', '木'] },
        { char: '衫', radical: '衤', wrongs: ['礻', '氵', '木'] },
        { char: '祝', radical: '礻', wrongs: ['衤', '氵', '木'] },
        { char: '福', radical: '礻', wrongs: ['衤', '氵', '木'] },
        { char: '礼', radical: '礻', wrongs: ['衤', '氵', '木'] },
        { char: '神', radical: '礻', wrongs: ['衤', '氵', '木'] },
        { char: '祖', radical: '礻', wrongs: ['衤', '氵', '木'] },
        { char: '描', radical: '扌', wrongs: ['氵', '亻', '木'] },
        { char: '拥', radical: '扌', wrongs: ['氵', '亻', '木'] },
        { char: '拼', radical: '扌', wrongs: ['氵', '亻', '木'] },
        { char: '投', radical: '扌', wrongs: ['氵', '亻', '木'] },
        { char: '抓', radical: '扌', wrongs: ['氵', '亻', '木'] },
        { char: '踢', radical: '足', wrongs: ['氵', '亻', '木'] },
        { char: '践', radical: '足', wrongs: ['氵', '亻', '木'] },
        { char: '跳', radical: '足', wrongs: ['氵', '亻', '木'] },
        { char: '跟', radical: '足', wrongs: ['氵', '亻', '木'] },
        { char: '跑', radical: '足', wrongs: ['氵', '亻', '木'] },
        { char: '唱', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '喝', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '喊', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '叫', radical: '口', wrongs: ['氵', '亻', '木'] },
        { char: '吹', radical: '口', wrongs: ['氵', '亻', '木'] },
    ],
    hard: [
        { char: '休', radical: '亻', wrongs: ['木', '氵', '艹'] },
        { char: '取', radical: '又', wrongs: ['耳', '攵', '木'] },
        { char: '攻', radical: '攵', wrongs: ['又', '攴', '木'] },
        { char: '政', radical: '攵', wrongs: ['又', '攴', '木'] },
        { char: '教', radical: '攵', wrongs: ['又', '攴', '木'] },
        { char: '散', radical: '攵', wrongs: ['又', '攴', '木'] },
        { char: '故', radical: '攵', wrongs: ['又', '攴', '木'] },
        { char: '敏', radical: '攵', wrongs: ['又', '攴', '木'] },
        { char: '救', radical: '攵', wrongs: ['又', '攴', '木'] },
        { char: '敢', radical: '攵', wrongs: ['又', '攴', '木'] },
        { char: '切', radical: '刀', wrongs: ['力', '刂', '土'] },
        { char: '分', radical: '刀', wrongs: ['力', '刂', '土'] },
        { char: '创', radical: '刂', wrongs: ['刀', '力', '土'] },
        { char: '刚', radical: '刂', wrongs: ['刀', '力', '土'] },
        { char: '剧', radical: '刂', wrongs: ['刀', '力', '土'] },
        { char: '练', radical: '纟', wrongs: ['钅', '氵', '木'] },
        { char: '织', radical: '纟', wrongs: ['钅', '氵', '木'] },
        { char: '纤', radical: '纟', wrongs: ['钅', '氵', '木'] },
        { char: '编', radical: '纟', wrongs: ['钅', '氵', '木'] },
        { char: '缝', radical: '纟', wrongs: ['钅', '氵', '木'] },
        { char: '移', radical: '禾', wrongs: ['木', '氵', '亻'] },
        { char: '秀', radical: '禾', wrongs: ['木', '氵', '亻'] },
        { char: '稳', radical: '禾', wrongs: ['木', '氵', '亻'] },
        { char: '科', radical: '禾', wrongs: ['木', '氵', '亻'] },
        { char: '秋', radical: '禾', wrongs: ['木', '氵', '亻'] },
        { char: '钻', radical: '钅', wrongs: ['纟', '氵', '木'] },
        { char: '铅', radical: '钅', wrongs: ['纟', '氵', '木'] },
        { char: '铲', radical: '钅', wrongs: ['纟', '氵', '木'] },
        { char: '铛', radical: '钅', wrongs: ['纟', '氵', '木'] },
        { char: '锄', radical: '钅', wrongs: ['纟', '氵', '木'] },
        { char: '获', radical: '艹', wrongs: ['氵', '亻', '木'] },
        { char: '梦', radical: '夕', wrongs: ['艹', '木', '氵'] },
        { char: '歹', radical: '歹', wrongs: ['夕', '木', '氵'] },
        { char: '残', radical: '歹', wrongs: ['夕', '木', '氵'] },
        { char: '殊', radical: '歹', wrongs: ['夕', '木', '氵'] },
        { char: '鼓', radical: '鼓', wrongs: ['支', '攵', '木'] },
        { char: '瞪', radical: '目', wrongs: ['日', '月', '氵'] },
        { char: '瞧', radical: '目', wrongs: ['日', '月', '氵'] },
        { char: '眠', radical: '目', wrongs: ['日', '月', '氵'] },
        { char: '睛', radical: '目', wrongs: ['日', '月', '氵'] },
        { char: '盯', radical: '目', wrongs: ['日', '月', '氵'] },
        { char: '看', radical: '目', wrongs: ['手', '日', '氵'] },
        { char: '睡', radical: '目', wrongs: ['日', '月', '氵'] },
        { char: '眼', radical: '目', wrongs: ['日', '月', '氵'] },
        { char: '盼', radical: '目', wrongs: ['日', '月', '氵'] },
        { char: '众', radical: '人', wrongs: ['从', '大', '氵'] },
        { char: '丛', radical: '人', wrongs: ['从', '大', '氵'] },
        { char: '坐', radical: '土', wrongs: ['人', '大', '氵'] },
        { char: '坚', radical: '土', wrongs: ['人', '大', '氵'] },
        { char: '地', radical: '土', wrongs: ['人', '大', '氵'] },
        { char: '场', radical: '土', wrongs: ['人', '大', '氵'] },
        { char: '块', radical: '土', wrongs: ['人', '大', '氵'] },
        { char: '城', radical: '土', wrongs: ['人', '大', '氵'] },
        { char: '墙', radical: '土', wrongs: ['人', '大', '氵'] },
        { char: '堆', radical: '土', wrongs: ['人', '大', '氵'] },
    ]
};

// ----- ★★★ 偏旁组合成字数据 ★★★ -----
var RADICAL_COMBOS = [
    ['氵', '也', '地'],
    ['氵', '工', '江'],
    ['氵', '可', '河'],
    ['氵', '胡', '湖'],
    ['氵', '每', '海'],
    ['氵', '羊', '洋'],
    ['亻', '也', '他'],
    ['亻', '尔', '你'],
    ['亻', '门', '们'],
    ['亻', '主', '住'],
    ['木', '对', '村'],
    ['木', '公', '松'],
    ['木', '白', '柏'],
    ['木', '寸', '村'],
    ['木', '乔', '桥'],
    ['口', '古', '咕'],
    ['口', '可', '呵'],
    ['口', '合', '哈'],
    ['口', '巴', '吧'],
    ['口', '牙', '呀'],
    ['口', '尼', '呢'],
    ['口', '马', '吗'],
    ['口', '阿', '啊'],
    ['讠', '兑', '说'],
    ['讠', '舌', '话'],
    ['讠', '青', '请'],
    ['讠', '卖', '读'],
    ['讠', '井', '讲'],
    ['扌', '丁', '打'],
    ['扌', '白', '拍'],
    ['扌', '立', '拉'],
    ['扌', '巴', '把'],
    ['纟', '工', '红'],
    ['纟', '录', '绿'],
    ['纟', '田', '细'],
    ['纟', '且', '组'],
    ['纟', '只', '织'],
    ['犭', '苗', '猫'],
    ['犭', '句', '狗'],
    ['犭', '良', '狼'],
    ['犭', '者', '猪'],
    ['犭', '侯', '猴'],
    ['虫', '马', '蚂'],
    ['虫', '义', '蚁'],
    ['虫', '圭', '蛙'],
    ['虫', '它', '蛇'],
    ['虫', '朱', '蛛'],
    ['足', '包', '跑'],
    ['足', '兆', '跳'],
    ['足', '艮', '跟'],
    ['足', '易', '踢'],
    ['足', '各', '路'],
    ['心', '相', '想'],
    ['心', '亡', '忘'],
    ['心', '今', '念'],
    ['心', '田', '思'],
    ['心', '音', '意'],
    ['钅', '失', '铁'],
    ['钅', '艮', '银'],
    ['钅', '同', '铜'],
    ['钅', '冈', '钢'],
    ['钅', '十', '针'],
    ['疒', '丙', '病'],
    ['疒', '甬', '痛'],
    ['疒', '羊', '痒'],
    ['疒', '风', '疯'],
    ['疒', '叟', '瘦'],
    ['辶', '元', '远'],
    ['辶', '斤', '近'],
    ['辶', '不', '还'],
    ['辶', '寸', '过'],
    ['辶', '井', '进'],
    ['囗', '韦', '围'],
    ['囗', '木', '困'],
    ['囗', '元', '园'],
    ['囗', '玉', '国'],
    ['囗', '口', '回'],
    ['衤', '皮', '被'],
    ['衤', '末', '袜'],
    ['衤', '库', '裤'],
    ['衤', '寸', '衬'],
    ['衤', '彡', '衫'],
    ['礻', '兄', '祝'],
    ['礻', '畐', '福'],
    ['礻', '乚', '礼'],
    ['礻', '申', '神'],
    ['礻', '且', '祖'],
    ['又', '耳', '取'],
    ['攵', '工', '攻'],
    ['攵', '正', '政'],
    ['攵', '孝', '教'],
    ['攵', '古', '故'],
    ['刂', '仓', '创'],
    ['刂', '冈', '刚'],
    ['刂', '居', '剧'],
    ['刀', '七', '切'],
    ['刀', '八', '分'],
    ['目', '青', '睛'],
    ['目', '丁', '盯'],
    ['目', '艮', '眼'],
    ['目', '民', '眠'],
    ['目', '焦', '瞧'],
    ['土', '也', '地'],
    ['土', '寸', '场'],
    ['土', '夬', '块'],
    ['土', '成', '城'],
    ['土', '隹', '堆'],
];

// ----- 工具函数 -----
function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

function generateRadicalOptions(correct, wrongs) {
    var opts = [correct];
    for (var i = 0; i < wrongs.length; i++) {
        if (opts.length >= 4) break;
        if (opts.indexOf(wrongs[i]) === -1) opts.push(wrongs[i]);
    }
    var fallback = ['氵', '亻', '木', '讠', '扌', '艹', '纟', '口', '足', '心', '钅', '疒', '辶', '囗', '衤', '礻', '攵', '刂', '歹', '目',
        '土', '人', '刀', '力', '又', '耳', '攴', '禾', '夕', '鼓', '支', '手', '日', '月', '从', '大'
    ];
    for (var i = 0; i < fallback.length; i++) {
        if (opts.length >= 4) break;
        if (opts.indexOf(fallback[i]) === -1) opts.push(fallback[i]);
    }
    while (opts.length < 4) { opts.push('氵'); }
    return shuffle(opts);
}

// ----- ★★★ 生成组合题 ★★★ -----
function generateComboQuestions() {
    var result = [];
    var used = {};

    for (var i = 0; i < RADICAL_COMBOS.length; i++) {
        var combo = RADICAL_COMBOS[i];
        var radical1 = combo[0];
        var radical2 = combo[1];
        var char = combo[2];

        var charOpts = [char];
        var allChars = [];
        for (var j = 0; j < RADICAL_COMBOS.length; j++) {
            if (RADICAL_COMBOS[j][2] !== char) {
                allChars.push(RADICAL_COMBOS[j][2]);
            }
        }
        shuffle(allChars);
        for (var j = 0; j < 3 && j < allChars.length; j++) {
            charOpts.push(allChars[j]);
        }
        while (charOpts.length < 4) {
            charOpts.push('字');
        }
        shuffle(charOpts);

        var qKey = radical1 + '+' + radical2;
        if (!used[qKey]) {
            used[qKey] = true;
            result.push({
                question: radical1 + ' + ' + radical2 + ' = ？',
                answer: char,
                options: charOpts.slice(0, 4),
                type: '组合'
            });
        }
    }

    return result;
}

// ----- ★★★ 构建题库（反向题唯一解：干扰项来自不同偏旁）★★★ -----
function buildQuestionBank(difficulty) {
    var chars = RADICAL_DATA[difficulty] || RADICAL_DATA.easy;
    var result = [];

    // 1. 从当前难度生成常规题
    for (var i = 0; i < chars.length; i++) {
        var item = chars[i];

        // 正向题：字 → 选偏旁
        var opts = generateRadicalOptions(item.radical, item.wrongs);
        result.push({
            question: '"' + item.char + '" 的偏旁部首是？',
            answer: item.radical,
            options: opts,
            char: item.char,
            type: '常规'
        });

        // ★★★ 反向题（修正：干扰项来自不同偏旁，确保唯一解）★★★
        // 从所有字中选3个不同偏旁的字作为干扰项
        var allChars = RADICAL_DATA.easy.concat(RADICAL_DATA.medium).concat(RADICAL_DATA.hard);
        var diffRadicalChars = [];
        for (var j = 0; j < allChars.length; j++) {
            // 排除自己，且偏旁不同
            if (allChars[j].char !== item.char && allChars[j].radical !== item.radical) {
                diffRadicalChars.push(allChars[j].char);
            }
        }
        shuffle(diffRadicalChars);

        var charOpts = [item.char];
        for (var j = 0; j < 3 && j < diffRadicalChars.length; j++) {
            charOpts.push(diffRadicalChars[j]);
        }
        // 如果还是不够，用"字"填充
        while (charOpts.length < 4) { charOpts.push('字'); }
        shuffle(charOpts);

        result.push({
            question: '"' + item.radical + '" 是哪个字的偏旁？',
            answer: item.char,
            options: charOpts.slice(0, 4),
            radical: item.radical,
            type: '常规'
        });
    }

    // 2. 加入组合题（占比约20%）
    var comboQuestions = generateComboQuestions();
    shuffle(comboQuestions);
    var comboCount = Math.min(Math.floor(result.length * 0.2), comboQuestions.length);
    for (var i = 0; i < comboCount; i++) {
        result.push(comboQuestions[i]);
    }

    // 3. 如果不够500，从其他难度补充（只补充正向题）
    var allChars2 = RADICAL_DATA.easy.concat(RADICAL_DATA.medium).concat(RADICAL_DATA.hard);
    var target = 500;
    var attempts = 0;
    while (result.length < target && attempts < 100) {
        attempts++;
        for (var i = 0; i < allChars2.length; i++) {
            if (result.length >= target) break;
            var item = allChars2[i];
            var opts = generateRadicalOptions(item.radical, item.wrongs);
            var q = {
                question: '"' + item.char + '" 的偏旁部首是？',
                answer: item.radical,
                options: opts,
                char: item.char,
                type: '常规'
            };
            var exists = false;
            for (var j = 0; j < result.length; j++) {
                if (result[j].question === q.question) { exists = true; break; }
            }
            if (!exists) result.push(q);
        }
    }

    return shuffle(result);
}

// ============================================================
// 导出
// ============================================================
RADICAL_QUESTIONS.easy = buildQuestionBank('easy');
RADICAL_QUESTIONS.medium = buildQuestionBank('medium');
RADICAL_QUESTIONS.hard = buildQuestionBank('hard');

console.log('✅ 偏旁题库加载完成（反向题唯一解）:');
console.log('  简单:', RADICAL_QUESTIONS.easy.length, '题');
console.log('  中等:', RADICAL_QUESTIONS.medium.length, '题');
console.log('  困难:', RADICAL_QUESTIONS.hard.length, '题');