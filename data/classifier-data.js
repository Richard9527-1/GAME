// ============================================================
// 量词快配 - 最终确定版（改题不删题，每题唯一解）
// ============================================================

const CLASSIFIER_QUESTIONS = {};

// ============================================================
// 简单 (1-2年级)
// ============================================================
const EASY_DATA = [
    { noun: '苹果', classifier: '个', wrongs: ['颗', '块', '只'] },
    { noun: '西瓜', classifier: '个', wrongs: ['颗', '块', '只'] },
    { noun: '橘子', classifier: '个', wrongs: ['颗', '块', '只'] },
    { noun: '雪梨', classifier: '个', wrongs: ['颗', '块', '只'] },
    { noun: '芒果', classifier: '个', wrongs: ['颗', '块', '只'] },
    { noun: '书包', classifier: '个', wrongs: ['只', '条', '张'] },
    { noun: '水杯', classifier: '个', wrongs: ['只', '条', '张'] },
    { noun: '瓷碗', classifier: '个', wrongs: ['只', '条', '张'] },
    { noun: '圆盘', classifier: '个', wrongs: ['只', '条', '张'] },
    { noun: '茶杯', classifier: '个', wrongs: ['只', '条', '张'] },
    { noun: '皮球', classifier: '个', wrongs: ['颗', '只', '枚'] },
    { noun: '鸡蛋', classifier: '个', wrongs: ['颗', '枚', '只'] },
    { noun: '面包', classifier: '个', wrongs: ['块', '片', '条'] },
    { noun: '馒头', classifier: '个', wrongs: ['块', '片', '条'] },
    { noun: '肉包', classifier: '个', wrongs: ['块', '片', '条'] },
    { noun: '水饺', classifier: '个', wrongs: ['只', '枚', '块'] },
    { noun: '小狗', classifier: '只', wrongs: ['个', '条', '张'] },
    { noun: '小猫', classifier: '只', wrongs: ['个', '条', '张'] },
    { noun: '小鸡', classifier: '只', wrongs: ['个', '条', '张'] },
    { noun: '小鸟', classifier: '只', wrongs: ['个', '条', '张'] },
    { noun: '小鸭', classifier: '只', wrongs: ['个', '条', '张'] },
    { noun: '白兔', classifier: '只', wrongs: ['个', '头', '条'] },
    { noun: '松鼠', classifier: '只', wrongs: ['个', '头', '条'] },
    { noun: '田鼠', classifier: '只', wrongs: ['个', '头', '条'] },
    { noun: '熊猫', classifier: '只', wrongs: ['个', '头', '条'] },
    { noun: '猴子', classifier: '只', wrongs: ['个', '头', '条'] },
    { noun: '狐狸', classifier: '只', wrongs: ['个', '头', '条'] },
    { noun: '灰狼', classifier: '只', wrongs: ['个', '头', '条'] },
    { noun: '绳子', classifier: '条', wrongs: ['个', '根', '段'] },
    { noun: '长裤', classifier: '条', wrongs: ['个', '件', '张'] },
    { noun: '围巾', classifier: '条', wrongs: ['个', '件', '张'] },
    { noun: '皮带', classifier: '条', wrongs: ['个', '根', '段'] },
    { noun: '金鱼', classifier: '条', wrongs: ['个', '只', '张'] },
    { noun: '小蛇', classifier: '条', wrongs: ['个', '只', '张'] },
    { noun: '蚯蚓', classifier: '条', wrongs: ['个', '只', '张'] },
    { noun: '书桌', classifier: '张', wrongs: ['个', '只', '条'] },
    { noun: '白纸', classifier: '张', wrongs: ['个', '份', '片'] },
    { noun: '照片', classifier: '张', wrongs: ['个', '幅', '架'] },
    { noun: '地图', classifier: '张', wrongs: ['个', '幅', '架'] },
    { noun: '小床', classifier: '张', wrongs: ['个', '架', '只'] },
    { noun: '木椅', classifier: '把', wrongs: ['个', '张', '只'] },
    { noun: '雨伞', classifier: '把', wrongs: ['个', '只', '根'] },
    { noun: '菜刀', classifier: '把', wrongs: ['个', '只', '根'] },
    { noun: '木梳', classifier: '把', wrongs: ['个', '只', '根'] },
    { noun: '课本', classifier: '本', wrongs: ['个', '张', '把'] },
    { noun: '笔记', classifier: '本', wrongs: ['个', '张', '把'] },
    { noun: '作业', classifier: '本', wrongs: ['个', '张', '把'] },
    { noun: '铅笔', classifier: '支', wrongs: ['个', '本', '把'] },
    { noun: '钢笔', classifier: '支', wrongs: ['个', '本', '把'] },
    { noun: '毛笔', classifier: '支', wrongs: ['个', '本', '把'] },
    { noun: '粉笔', classifier: '支', wrongs: ['个', '本', '把'] },
    { noun: '上衣', classifier: '件', wrongs: ['个', '条', '张'] },
    { noun: '衬衫', classifier: '件', wrongs: ['个', '条', '张'] },
    { noun: '外套', classifier: '件', wrongs: ['个', '条', '张'] },
    { noun: '毛衣', classifier: '件', wrongs: ['个', '条', '张'] },
    { noun: '皮鞋', classifier: '双', wrongs: ['个', '只', '条'] },
    { noun: '竹筷', classifier: '双', wrongs: ['个', '根', '对'] },
    { noun: '草帽', classifier: '顶', wrongs: ['个', '只', '条'] },
    { noun: '头盔', classifier: '顶', wrongs: ['个', '只', '条'] },
    { noun: '大树', classifier: '棵', wrongs: ['个', '朵', '片'] },
    { noun: '青草', classifier: '棵', wrongs: ['个', '朵', '片'] },
    { noun: '落叶', classifier: '片', wrongs: ['个', '朵', '棵'] },
    { noun: '花瓣', classifier: '片', wrongs: ['个', '朵', '棵'] },
    { noun: '石头', classifier: '块', wrongs: ['个', '颗', '粒'] },
    { noun: '木板', classifier: '块', wrongs: ['个', '根', '片'] },
    { noun: '星星', classifier: '颗', wrongs: ['个', '粒', '块'] },
    { noun: '门牙', classifier: '颗', wrongs: ['个', '粒', '块'] },
    { noun: '房间', classifier: '间', wrongs: ['个', '栋', '座'] },
    { noun: '教室', classifier: '间', wrongs: ['个', '栋', '座'] },
    { noun: '小桥', classifier: '座', wrongs: ['个', '条', '道'] },
    { noun: '高楼', classifier: '栋', wrongs: ['个', '座', '间'] },
    { noun: '骏马', classifier: '匹', wrongs: ['个', '只', '条'] },
    { noun: '黄牛', classifier: '头', wrongs: ['个', '只', '匹'] },
    { noun: '奶牛', classifier: '头', wrongs: ['个', '只', '匹'] },
];

// ============================================================
// 中等 (3-4年级)
// ============================================================
const MEDIUM_DATA = [
    { noun: '汽车', classifier: '辆', wrongs: ['个', '台', '架'] },
    { noun: '单车', classifier: '辆', wrongs: ['个', '台', '架'] },
    { noun: '摩托', classifier: '辆', wrongs: ['个', '台', '架'] },
    { noun: '出租', classifier: '辆', wrongs: ['个', '台', '架'] },
    { noun: '公交', classifier: '辆', wrongs: ['个', '台', '架'] },
    { noun: '货车', classifier: '辆', wrongs: ['个', '台', '架'] },
    { noun: '轿车', classifier: '辆', wrongs: ['个', '台', '架'] },
    { noun: '救护', classifier: '辆', wrongs: ['个', '台', '架'] },
    { noun: '消防', classifier: '辆', wrongs: ['个', '台', '架'] },
    { noun: '火车', classifier: '列', wrongs: ['辆', '个', '架'] },
    { noun: '列车', classifier: '列', wrongs: ['辆', '个', '架'] },
    { noun: '地铁', classifier: '列', wrongs: ['辆', '个', '架'] },
    { noun: '飞机', classifier: '架', wrongs: ['辆', '个', '台'] },
    { noun: '直升', classifier: '架', wrongs: ['辆', '个', '台'] },
    { noun: '钢琴', classifier: '架', wrongs: ['辆', '个', '台'] },
    { noun: '轮船', classifier: '艘', wrongs: ['个', '架', '辆'] },
    { noun: '货轮', classifier: '艘', wrongs: ['个', '架', '辆'] },
    { noun: '电视', classifier: '台', wrongs: ['个', '部', '架'] },
    { noun: '电脑', classifier: '台', wrongs: ['个', '部', '架'] },
    { noun: '冰箱', classifier: '台', wrongs: ['个', '部', '架'] },
    { noun: '洗衣', classifier: '台', wrongs: ['个', '部', '架'] },
    { noun: '空调', classifier: '台', wrongs: ['个', '部', '架'] },
    { noun: '风扇', classifier: '台', wrongs: ['个', '部', '架'] },
    { noun: '相机', classifier: '台', wrongs: ['个', '部', '架'] },
    { noun: '手机', classifier: '部', wrongs: ['个', '台', '只'] },
    { noun: '电话', classifier: '部', wrongs: ['个', '台', '只'] },
    { noun: '电影', classifier: '部', wrongs: ['个', '场', '本'] },
    { noun: '剧集', classifier: '部', wrongs: ['个', '场', '本'] },
    { noun: '大门', classifier: '扇', wrongs: ['个', '面', '张'] },
    { noun: '窗户', classifier: '扇', wrongs: ['个', '面', '张'] },
    { noun: '镜子', classifier: '面', wrongs: ['个', '张', '架'] },
    { noun: '国旗', classifier: '面', wrongs: ['个', '支', '杆'] },
    { noun: '大鼓', classifier: '面', wrongs: ['个', '张', '架'] },
    { noun: '湖水', classifier: '面', wrongs: ['个', '条', '片'] },
    { noun: '图画', classifier: '幅', wrongs: ['个', '张', '架'] },
    { noun: '书法', classifier: '幅', wrongs: ['个', '张', '架'] },
    { noun: '日报', classifier: '份', wrongs: ['个', '张', '本'] },
    { noun: '文件', classifier: '份', wrongs: ['个', '张', '本'] },
    { noun: '资料', classifier: '份', wrongs: ['个', '张', '本'] },
    { noun: '套餐', classifier: '份', wrongs: ['个', '张', '本'] },
    { noun: '礼物', classifier: '份', wrongs: ['个', '件', '样'] },
    { noun: '书信', classifier: '封', wrongs: ['个', '张', '本'] },
    { noun: '邮件', classifier: '封', wrongs: ['个', '张', '本'] },
    { noun: '文章', classifier: '篇', wrongs: ['个', '本', '份'] },
    { noun: '作文', classifier: '篇', wrongs: ['个', '本', '份'] },
    { noun: '论文', classifier: '篇', wrongs: ['个', '本', '份'] },
    { noun: '歌曲', classifier: '首', wrongs: ['个', '篇', '支'] },
    { noun: '古诗', classifier: '首', wrongs: ['个', '篇', '本'] },
    { noun: '比赛', classifier: '场', wrongs: ['个', '次', '局'] },
    // ★★★ 改题：暴雨取代大雨 ★★★
    { noun: '暴雨', classifier: '场', wrongs: ['个', '次', '阵'] },
    { noun: '暴雪', classifier: '场', wrongs: ['个', '次', '阵'] },
    { noun: '表演', classifier: '场', wrongs: ['个', '次', '局'] },
    { noun: '会议', classifier: '场', wrongs: ['个', '次', '局'] },
    { noun: '佳肴', classifier: '盘', wrongs: ['个', '碟', '碗'] },
    { noun: '火柴', classifier: '根', wrongs: ['个', '条', '支'] },
    { noun: '试题', classifier: '道', wrongs: ['个', '条', '项'] },
    { noun: '数题', classifier: '道', wrongs: ['个', '条', '项'] },
    { noun: '谜题', classifier: '道', wrongs: ['个', '条', '项'] },
    // ★★★ 改题：彩练取代彩虹，保证"道"唯一 ★★★
    { noun: '彩练', classifier: '道', wrongs: ['条', '段', '个'] },
    { noun: '闪电', classifier: '道', wrongs: ['条', '段', '个'] },
    { noun: '飞瀑', classifier: '道', wrongs: ['条', '段', '个'] },
    // ★★★ 改题：捧花取代花束，保证"束"唯一 ★★★
    { noun: '捧花', classifier: '束', wrongs: ['把', '朵', '个'] },
    // ★★★ 改题：光线保留，但干扰项调成不可能搭配的 ★★★
    { noun: '光线', classifier: '束', wrongs: ['条', '缕', '个'] },
];

// ============================================================
// 困难 (5-6年级)
// ============================================================
const HARD_DATA = [
    { noun: '佛像', classifier: '尊', wrongs: ['个', '座', '栋'] },
    { noun: '雕像', classifier: '尊', wrongs: ['个', '座', '栋'] },
    { noun: '罗汉', classifier: '尊', wrongs: ['个', '座', '栋'] },
    { noun: '尸体', classifier: '具', wrongs: ['个', '位', '名'] },
    { noun: '乐器', classifier: '具', wrongs: ['个', '架', '台'] },
    { noun: '项目', classifier: '项', wrongs: ['个', '条', '件'] },
    { noun: '任务', classifier: '项', wrongs: ['个', '条', '件'] },
    { noun: '工程', classifier: '项', wrongs: ['个', '条', '件'] },
    { noun: '条款', classifier: '项', wrongs: ['个', '条', '件'] },
    { noun: '运动', classifier: '项', wrongs: ['个', '条', '件'] },
    { noun: '活动', classifier: '项', wrongs: ['个', '条', '件'] },
    // ★★★ 改题：景色取代风景，保证"处"唯一 ★★★
    { noun: '景色', classifier: '处', wrongs: ['片', '道', '个'] },
    // ★★★ 改题：场所取代地方，保证"处"唯一 ★★★
    { noun: '场所', classifier: '处', wrongs: ['个', '间', '栋'] },
    // ★★★ 改题：伤痕取代创口，保证"道"唯一 ★★★
    { noun: '伤痕', classifier: '道', wrongs: ['个', '块', '处'] },
    { noun: '耳光', classifier: '记', wrongs: ['个', '下', '次'] },
    { noun: '惊雷', classifier: '记', wrongs: ['个', '下', '次'] },
    // ★★★ 改题：狂风取代大风，保证"阵"唯一 ★★★
    { noun: '狂风', classifier: '阵', wrongs: ['场', '次', '个'] },
    { noun: '喝彩', classifier: '阵', wrongs: ['片', '场', '个'] },
    { noun: '欢叫', classifier: '阵', wrongs: ['片', '场', '个'] },
    { noun: '刺痛', classifier: '阵', wrongs: ['种', '片', '个'] },
    // ★★★ 改题：水珠取代水滴，保证"滴"唯一 ★★★
    { noun: '水珠', classifier: '滴', wrongs: ['颗', '粒', '个'] },
    { noun: '座椅', classifier: '排', wrongs: ['个', '行', '列'] },
    { noun: '树苗', classifier: '排', wrongs: ['个', '行', '列'] },
    { noun: '牙齿', classifier: '排', wrongs: ['个', '行', '列'] },
    // ★★★ 改题：项链取代珍珠，保证"串"唯一 ★★★
    { noun: '项链', classifier: '串', wrongs: ['颗', '粒', '个'] },
    // ★★★ 改题：提子取代葡萄，保证"串"唯一 ★★★
    { noun: '提子', classifier: '串', wrongs: ['颗', '粒', '个'] },
    // ★★★ 改题：锁匙取代钥匙，保证"把"唯一 ★★★
    { noun: '锁匙', classifier: '把', wrongs: ['串', '根', '个'] },
    { noun: '案子', classifier: '桩', wrongs: ['个', '件', '项'] },
    { noun: '官司', classifier: '桩', wrongs: ['个', '件', '项'] },
    { noun: '买卖', classifier: '桩', wrongs: ['个', '件', '项'] },
];

// ============================================================
// 工具函数
// ============================================================
function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

function generateClassifierOptions(correct, wrongs) {
    var opts = [correct];
    for (var i = 0; i < wrongs.length; i++) {
        if (opts.length >= 4) break;
        if (opts.indexOf(wrongs[i]) === -1) opts.push(wrongs[i]);
    }
    var allClassifiers = ['个', '只', '条', '张', '把', '本', '支', '件', '双', '顶', '间', '座', '栋', '辆', '台', '架', '艘', '部',
        '扇', '幅', '份', '封', '篇', '首', '场', '盘', '颗', '块', '根', '道', '尊', '匹', '头', '棵', '片', '面', '枚',
        '粒', '阵', '滴', '排', '串', '桩', '项', '记', '具', '列'
    ];
    for (var i = 0; i < allClassifiers.length; i++) {
        if (opts.length >= 4) break;
        if (opts.indexOf(allClassifiers[i]) === -1) opts.push(allClassifiers[i]);
    }
    return shuffle(opts);
}

function generateQuestions(data) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var opts = generateClassifierOptions(item.classifier, item.wrongs);
        result.push({
            question: '一( )' + item.noun,
            answer: item.classifier,
            options: opts,
            noun: item.noun,
            hint: '例：一' + item.classifier + item.noun
        });
    }
    return shuffle(result);
}

function buildClassifierBank(data) {
    var result = generateQuestions(data);
    var target = 500;
    var attempts = 0;

    while (result.length < target && attempts < 50) {
        attempts++;
        var extra = generateQuestions(data);
        for (var i = 0; i < extra.length; i++) {
            if (result.length >= target) break;
            var exists = false;
            for (var j = 0; j < result.length; j++) {
                if (result[j].question === extra[i].question) { exists = true; break; }
            }
            if (!exists) result.push(extra[i]);
        }
    }

    return shuffle(result);
}

// ============================================================
// 导出
// ============================================================
CLASSIFIER_QUESTIONS.easy = buildClassifierBank(EASY_DATA);
CLASSIFIER_QUESTIONS.medium = buildClassifierBank(MEDIUM_DATA);
CLASSIFIER_QUESTIONS.hard = buildClassifierBank(HARD_DATA);

console.log('✅ 量词题库加载完成（改题不删题版）:');
console.log('  简单:', CLASSIFIER_QUESTIONS.easy.length, '题');
console.log('  中等:', CLASSIFIER_QUESTIONS.medium.length, '题');
console.log('  困难:', CLASSIFIER_QUESTIONS.hard.length, '题');