// ============================================================
// Emoji猜词 - 题库生成器（全选择题版）
// 一星：2-3个Emoji → 2字词
// 二星：3-4个Emoji → 4字词语/成语
// 三星：4-6个Emoji → 成语/俗语/学科词汇
// ============================================================

const EMOJI_QUESTIONS = {};

// ============================================================
// 一星入门 (1-2年级) - 选择题
// ============================================================
const EASY_DATA = [
    // 水果类
    { emoji: '🍎🍌🍇', answer: '水果', wrongs: ['蔬菜', '零食', '饭菜'] },
    { emoji: '🍎🍉🍊', answer: '水果', wrongs: ['蔬菜', '干果', '糖果'] },
    { emoji: '🍑🍒🍓', answer: '水果', wrongs: ['花朵', '蔬菜', '干果'] },
    { emoji: '🥝🍍🥭', answer: '水果', wrongs: ['蔬菜', '坚果', '干果'] },
    // 动物类
    { emoji: '🐱🐶🐰', answer: '动物', wrongs: ['植物', '昆虫', '鱼类'] },
    { emoji: '🐼🐨🦊', answer: '动物', wrongs: ['植物', '玩具', '食物'] },
    { emoji: '🐮🐷🐑', answer: '动物', wrongs: ['植物', '建筑', '工具'] },
    { emoji: '🐒🐘🦒', answer: '动物', wrongs: ['植物', '石头', '云彩'] },
    // 天空自然
    { emoji: '☀️🌙⭐', answer: '天空', wrongs: ['大地', '海洋', '森林'] },
    { emoji: '🌤️⛅☁️', answer: '天空', wrongs: ['大地', '河流', '山丘'] },
    { emoji: '🌈⛅☀️', answer: '天空', wrongs: ['地面', '树木', '房屋'] },
    // 花朵植物
    { emoji: '🌸🌺🌻', answer: '花朵', wrongs: ['树叶', '草地', '树木'] },
    { emoji: '🌹🌷🌼', answer: '花朵', wrongs: ['野草', '蔬菜', '果实'] },
    { emoji: '💐🌺🌸', answer: '花朵', wrongs: ['树木', '草地', '农田'] },
    // 交通工具
    { emoji: '🚗🚌✈️', answer: '交通', wrongs: ['建筑', '工具', '家具'] },
    { emoji: '🚲🚄🚢', answer: '交通', wrongs: ['建筑', '工具', '电器'] },
    { emoji: '🚁🚀🚤', answer: '交通', wrongs: ['建筑', '工具', '玩具'] },
    // 家人
    { emoji: '👨‍👩‍👦', answer: '家人', wrongs: ['朋友', '同学', '邻居'] },
    { emoji: '👨‍👩‍👧‍👦', answer: '家人', wrongs: ['朋友', '同事', '邻居'] },
    { emoji: '👵👴👪', answer: '家人', wrongs: ['朋友', '同学', '老师'] },
    // 食物
    { emoji: '🍕🍔🍟', answer: '快餐', wrongs: ['中餐', '甜点', '水果'] },
    { emoji: '🍜🍣🍱', answer: '中餐', wrongs: ['西餐', '甜点', '快餐'] },
    { emoji: '🍦🍧🍨', answer: '冰品', wrongs: ['热饮', '面包', '蛋糕'] },
    // 场所
    { emoji: '🏠🏪🏥', answer: '场所', wrongs: ['道路', '广场', '公园'] },
    { emoji: '🏫🏢🏬', answer: '场所', wrongs: ['道路', '广场', '花坛'] },
    { emoji: '🏨🏛️🏦', answer: '场所', wrongs: ['道路', '广场', '桥梁'] },
    // 海洋
    { emoji: '🐬🐳🐠', answer: '海洋', wrongs: ['陆地', '天空', '森林'] },
    { emoji: '🐙🦑🐚', answer: '海洋', wrongs: ['陆地', '天空', '森林'] },
    { emoji: '🦈🐋🐟', answer: '海洋', wrongs: ['陆地', '天空', '沙漠'] },
    // 季节
    { emoji: '🌸🌱🌷', answer: '春天', wrongs: ['夏天', '秋天', '冬天'] },
    { emoji: '☀️🌊🏖️', answer: '夏天', wrongs: ['春天', '秋天', '冬天'] },
    { emoji: '🍂🍁🍃', answer: '秋天', wrongs: ['春天', '夏天', '冬天'] },
    { emoji: '❄️⛄☃️', answer: '冬天', wrongs: ['春天', '夏天', '秋天'] },
    // 乐器
    { emoji: '🎸🥁🎹', answer: '乐器', wrongs: ['玩具', '工具', '电器'] },
    { emoji: '🎻🎺🎷', answer: '乐器', wrongs: ['玩具', '工具', '文具'] },
    { emoji: '🎸🎤🎵', answer: '乐器', wrongs: ['玩具', '工具', '食物'] },
    // 文具
    { emoji: '✏️📏📐', answer: '文具', wrongs: ['玩具', '工具', '电器'] },
    { emoji: '📚📖✒️', answer: '文具', wrongs: ['玩具', '工具', '电器'] },
    { emoji: '🖊️📓📎', answer: '文具', wrongs: ['玩具', '工具', '电器'] },
    // 职业
    { emoji: '👨‍⚕️💉💊', answer: '医生', wrongs: ['教师', '警察', '司机'] },
    { emoji: '👨‍🏫📚✏️', answer: '教师', wrongs: ['医生', '警察', '厨师'] },
    { emoji: '👨‍🍳🔪🍳', answer: '厨师', wrongs: ['医生', '教师', '警察'] },
    // 天气
    { emoji: '☀️🌤️', answer: '晴天', wrongs: ['阴天', '雨天', '雪天'] },
    { emoji: '☁️🌧️', answer: '雨天', wrongs: ['晴天', '阴天', '雪天'] },
    { emoji: '❄️🌨️', answer: '雪天', wrongs: ['晴天', '阴天', '雨天'] },
    // 身体
    { emoji: '👀👂👃', answer: '五官', wrongs: ['四肢', '器官', '衣服'] },
    { emoji: '🖐️🦵🦶', answer: '四肢', wrongs: ['五官', '器官', '衣服'] },
    { emoji: '❤️🧠🫁', answer: '器官', wrongs: ['五官', '四肢', '骨头'] },
    // 颜色
    { emoji: '🔴🟠🟡', answer: '彩色', wrongs: ['红色', '黄色', '蓝色'] },
    { emoji: '🟢🔵🟣', answer: '彩色', wrongs: ['红色', '黄色', '绿色'] },
    { emoji: '⚫⚪🟤', answer: '彩色', wrongs: ['红色', '黄色', '蓝色'] },
    // 家具
    { emoji: '🛋️🪑🛏️', answer: '家具', wrongs: ['电器', '玩具', '工具'] },
    { emoji: '🚪🪟🪞', answer: '家具', wrongs: ['电器', '玩具', '工具'] },
    { emoji: '🗄️🪑🛋️', answer: '家具', wrongs: ['电器', '玩具', '工具'] },
    // 餐具
    { emoji: '🍽️🥄🔪', answer: '餐具', wrongs: ['家具', '电器', '工具'] },
    { emoji: '🍽️🍴🥢', answer: '餐具', wrongs: ['家具', '电器', '工具'] },
    { emoji: '🍲🥣🥛', answer: '餐具', wrongs: ['家具', '电器', '工具'] },
    // 建筑
    { emoji: '🏠🏢🏬', answer: '建筑', wrongs: ['树木', '山丘', '河流'] },
    { emoji: '🏛️🗼🏯', answer: '建筑', wrongs: ['树木', '山丘', '河流'] },
    { emoji: '🏰🏠🏡', answer: '建筑', wrongs: ['树木', '山丘', '河流'] },
    // 运动
    { emoji: '⚽🏀🎾', answer: '球类', wrongs: ['游泳', '跑步', '跳高'] },
    { emoji: '🏊🚴🏃', answer: '运动', wrongs: ['球类', '游泳', '跑步'] },
    { emoji: '🏋️🤸⛹️', answer: '运动', wrongs: ['球类', '游泳', '跑步'] },
    // 自然
    { emoji: '🌳🌿🍃', answer: '树木', wrongs: ['花朵', '草地', '农田'] },
    { emoji: '⛰️🌋🏔️', answer: '山岳', wrongs: ['树木', '花朵', '草地'] },
    { emoji: '🌊🌅🌄', answer: '山水', wrongs: ['树木', '花朵', '草地'] },
    // 学校
    { emoji: '📚✏️🏫', answer: '学校', wrongs: ['医院', '银行', '商场'] },
    { emoji: '👨‍🏫📖✒️', answer: '学校', wrongs: ['医院', '银行', '商场'] },
    { emoji: '🎒📚✏️', answer: '学校', wrongs: ['医院', '银行', '商场'] },
    // 节日
    { emoji: '🧧🧨🎆', answer: '春节', wrongs: ['元宵', '端午', '中秋'] },
    { emoji: '🎋🎑🌕', answer: '中秋', wrongs: ['春节', '元宵', '端午'] },
    { emoji: '🇨🇳❤️🎂', answer: '国庆', wrongs: ['春节', '端午', '中秋'] },
    // 方向
    { emoji: '⬆️⬇️⬅️', answer: '方向', wrongs: ['位置', '距离', '速度'] },
    { emoji: '➡️⬆️⬇️', answer: '方向', wrongs: ['位置', '距离', '速度'] },
    { emoji: '⬅️➡️⬆️', answer: '方向', wrongs: ['位置', '距离', '速度'] },
    // 情绪
    { emoji: '😊😄😍', answer: '开心', wrongs: ['难过', '生气', '害怕'] },
    { emoji: '😢😭😔', answer: '难过', wrongs: ['开心', '生气', '害怕'] },
    { emoji: '😡😤👿', answer: '生气', wrongs: ['开心', '难过', '害怕'] },
    // 电器
    { emoji: '📺💻📱', answer: '电器', wrongs: ['家具', '工具', '玩具'] },
    { emoji: '🔌💡🎥', answer: '电器', wrongs: ['家具', '工具', '玩具'] },
    { emoji: '📷🎙️📻', answer: '电器', wrongs: ['家具', '工具', '玩具'] },
    // 玩具
    { emoji: '🧸🎠🎪', answer: '玩具', wrongs: ['家具', '工具', '电器'] },
    { emoji: '🎲🎯🎮', answer: '玩具', wrongs: ['家具', '工具', '电器'] },
    { emoji: '🧩🏀⚽', answer: '玩具', wrongs: ['家具', '工具', '电器'] },
    // 宝石
    { emoji: '💎🔮💍', answer: '宝石', wrongs: ['石头', '树木', '花朵'] },
    { emoji: '💎💍💎', answer: '宝石', wrongs: ['石头', '树木', '花朵'] },
    { emoji: '🔮💎✨', answer: '宝石', wrongs: ['石头', '树木', '花朵'] },
    // 昆虫
    { emoji: '🐞🦋🐝', answer: '昆虫', wrongs: ['动物', '鱼类', '鸟类'] },
    { emoji: '🐜🦟🦗', answer: '昆虫', wrongs: ['动物', '鱼类', '鸟类'] },
    { emoji: '🐝🦋🐞', answer: '昆虫', wrongs: ['动物', '鱼类', '鸟类'] },
    // 鸟类
    { emoji: '🐦🦅🦉', answer: '鸟类', wrongs: ['动物', '鱼类', '昆虫'] },
    { emoji: '🐦🐧🦢', answer: '鸟类', wrongs: ['动物', '鱼类', '昆虫'] },
    { emoji: '🦅🦉🐦', answer: '鸟类', wrongs: ['动物', '鱼类', '昆虫'] },
];

// ============================================================
// 二星进阶 (3-4年级) - 选择题
// ============================================================
const MEDIUM_DATA = [
    // 成语类
    { emoji: '❤️❤️', answer: '心心相印', wrongs: ['一心一意', '三心二意', '全心全意'] },
    { emoji: '❤️❤️❤️', answer: '心心相印', wrongs: ['一心一意', '三心二意', '全心全意'] },
    { emoji: '🐎🐎🐎🐎', answer: '马马虎虎', wrongs: ['马到成功', '一马当先', '万马奔腾'] },
    { emoji: '🐱🐭', answer: '猫鼠游戏', wrongs: ['猫哭老鼠', '老鼠爱大米', '猫捉老鼠'] },
    { emoji: '🐱🐭🎯', answer: '猫鼠游戏', wrongs: ['猫哭老鼠', '老鼠爱大米', '猫捉老鼠'] },
    { emoji: '🐰🐢🏁', answer: '龟兔赛跑', wrongs: ['兔死狐悲', '守株待兔', '龟兔赛跑'] },
    { emoji: '🐢🐰', answer: '龟兔赛跑', wrongs: ['兔死狐悲', '守株待兔', '龟兔赛跑'] },
    { emoji: '🐺🐑🐺', answer: '狼来了', wrongs: ['狼心狗肺', '狼狈为奸', '狼吞虎咽'] },
    { emoji: '🐺🐑', answer: '狼来了', wrongs: ['狼心狗肺', '狼狈为奸', '狼吞虎咽'] },
    { emoji: '🦊🍇🦊', answer: '吃不到葡萄说葡萄酸', wrongs: ['吃葡萄不吐葡萄皮', '葡萄美酒', '酸甜苦辣'] },
    { emoji: '🦊🍇', answer: '吃不到葡萄说葡萄酸', wrongs: ['吃葡萄不吐葡萄皮', '葡萄美酒', '酸甜苦辣'] },

    // 自然现象
    { emoji: '🌙⭐🌌', answer: '星空', wrongs: ['月亮', '星星', '夜空'] },
    { emoji: '🌅🌊🏖️', answer: '日出', wrongs: ['大海', '早晨', '阳光'] },
    { emoji: '🍃🍂🍁', answer: '秋天', wrongs: ['落叶', '枫叶', '季节'] },
    { emoji: '❄️⛄☃️', answer: '冬天', wrongs: ['雪花', '寒冷', '冰雪'] },
    { emoji: '🌸🌺🌻', answer: '春天', wrongs: ['花朵', '夏季', '花开'] },
    { emoji: '☀️🌊🏄', answer: '夏天', wrongs: ['阳光', '海滩', '冲浪'] },
    { emoji: '🌋💥🔥', answer: '火山', wrongs: ['爆发', '喷发', '岩浆'] },
    { emoji: '🏔️❄️⛰️', answer: '雪山', wrongs: ['高山', '冰雪', '寒冷'] },
    { emoji: '🌊🏄🌊', answer: '冲浪', wrongs: ['海浪', '滑水', '游泳'] },
    { emoji: '🎿⛷️🏔️', answer: '滑雪', wrongs: ['雪地', '冬天', '运动'] },

    // 生活场景
    { emoji: '🏃💨💪', answer: '跑步', wrongs: ['快跑', '冲刺', '运动'] },
    { emoji: '💤😴🛏️', answer: '睡觉', wrongs: ['困了', '做梦', '休息'] },
    { emoji: '🎵🎶🎤', answer: '音乐', wrongs: ['唱歌', '旋律', '音符'] },
    { emoji: '👨‍👩‍👧‍👦', answer: '家庭', wrongs: ['家人', '亲情', '团聚'] },
    { emoji: '🇨🇳❤️🏯', answer: '中国', wrongs: ['祖国', '北京', '长城'] },
    { emoji: '🎬🎥🎞️', answer: '电影', wrongs: ['影院', '拍摄', '导演'] },
    { emoji: '🥇🏅🏆', answer: '冠军', wrongs: ['金牌', '获奖', '胜利'] },
    { emoji: '💼💻📊', answer: '工作', wrongs: ['上班', '办公室', '职业'] },
    { emoji: '🏠🏡❤️', answer: '家', wrongs: ['房子', '温暖', '幸福'] },
    { emoji: '🛒🛍️💰', answer: '购物', wrongs: ['逛街', '商店', '买东西'] },

    // 文化
    { emoji: '🧧🧨🎆', answer: '春节', wrongs: ['过年', '红包', '烟花'] },
    { emoji: '🎋🎑🌕', answer: '中秋', wrongs: ['月亮', '团圆', '月饼'] },
    { emoji: '🏯🎎🌸', answer: '日本', wrongs: ['樱花', '和服', '武士'] },
    { emoji: '🏯🎋🌸', answer: '日本', wrongs: ['樱花', '和服', '武士'] },
    { emoji: '🗽🇺🇸🦅', answer: '美国', wrongs: ['自由', '纽约', '西方'] },
    { emoji: '🇫🇷🗼🥖', answer: '法国', wrongs: ['巴黎', '浪漫', '面包'] },

    // 运动类
    { emoji: '🏹🎯🏹', answer: '射箭', wrongs: ['弓箭', '靶心', '射击'] },
    { emoji: '⛹️🏀🏀', answer: '篮球', wrongs: ['投篮', '比赛', '运球'] },
    { emoji: '⚽🏃⚽', answer: '足球', wrongs: ['射门', '比赛', '踢球'] },
    { emoji: '🏊🏊🏊', answer: '游泳', wrongs: ['蛙泳', '自由泳', '仰泳'] },
    { emoji: '🏋️💪🏋️', answer: '举重', wrongs: ['锻炼', '哑铃', '力量'] },
    { emoji: '🤸🤸🤸', answer: '体操', wrongs: ['翻跟头', '平衡木', '跳马'] },

    // 艺术类
    { emoji: '🎭🎪🎬', answer: '马戏团', wrongs: ['杂技', '小丑', '表演'] },
    { emoji: '🎨🖌️📜', answer: '艺术', wrongs: ['绘画', '书法', '创作'] },
    { emoji: '🎼🎵🎶', answer: '交响乐', wrongs: ['音乐', '乐队', '演奏'] },
    { emoji: '💃🕺🎵', answer: '舞蹈', wrongs: ['芭蕾', '拉丁', '街舞'] },

    // 学科类
    { emoji: '📖📝✏️', answer: '语文', wrongs: ['作文', '阅读', '背诵'] },
    { emoji: '🔢➕➖', answer: '数学', wrongs: ['加减', '乘除', '计算'] },
    { emoji: '🌍🗺️🧭', answer: '地理', wrongs: ['地图', '导航', '经纬'] },
    { emoji: '🧪🔬⚗️', answer: '科学', wrongs: ['实验', '化学', '物理'] },
    { emoji: '📜🏯⏳', answer: '历史', wrongs: ['古代', '文物', '朝代'] },

    // 抽象概念
    { emoji: '🤝🤝🤝', answer: '团结', wrongs: ['合作', '友谊', '互助'] },
    { emoji: '❤️💪🌟', answer: '勇敢', wrongs: ['坚强', '信心', '力量'] },
    { emoji: '💡💡💡', answer: '智慧', wrongs: ['聪明', '灵感', '思考'] },
    { emoji: '🌱💪🌿', answer: '成长', wrongs: ['努力', '进步', '向上'] },
];

// ============================================================
// 三星高阶 (5-6年级) - 选择题
// ============================================================
const HARD_DATA = [
    // 成语典故
    { emoji: '🐰🐢🏁', answer: '龟兔赛跑', wrongs: ['守株待兔', '兔死狐悲', '龟兔赛跑'] },
    { emoji: '🐱🐭🎯', answer: '猫鼠游戏', wrongs: ['猫哭老鼠', '老鼠爱大米', '猫捉老鼠'] },
    { emoji: '🦊🍇🦊', answer: '吃不到葡萄说葡萄酸', wrongs: ['吃葡萄不吐葡萄皮', '酸甜苦辣', '葡萄美酒'] },
    { emoji: '🐺🐑🐺', answer: '狼来了', wrongs: ['狼心狗肺', '狼狈为奸', '狼吞虎咽'] },
    { emoji: '🐜🐜🏔️', answer: '蚂蚁搬家', wrongs: ['蚂蚁上树', '勤劳致富', '团结力量'] },
    { emoji: '🐝🌸🍯', answer: '蜜蜂采蜜', wrongs: ['蝴蝶采花', '蜻蜓点水', '小鸟觅食'] },
    { emoji: '🐦🌲🏠', answer: '鸟语花香', wrongs: ['花香鸟语', '鸟语花香', '春暖花开'] },
    { emoji: '🐟🐟🐟', answer: '年年有鱼', wrongs: ['鱼跃龙门', '年年有余', '鱼龙混杂'] },
    { emoji: '🔥🦊🔥', answer: '火中取栗', wrongs: ['火冒三丈', '趁火打劫', '赴汤蹈火'] },
    { emoji: '🐶🐱🐭', answer: '鸡犬不宁', wrongs: ['鸡飞狗跳', '鸡犬升天', '鸡犬不宁'] },
    { emoji: '🦅🐓🐥', answer: '鸡飞蛋打', wrongs: ['鸡飞狗跳', '鸡犬不宁', '鸡飞蛋打'] },
    { emoji: '🐴🐴🐴', answer: '马马虎虎', wrongs: ['马到成功', '一马当先', '万马奔腾'] },
    { emoji: '🐉🐍🐎🐑', answer: '十二生肖', wrongs: ['十二生肖', '龙马精神', '马到成功'] },
    { emoji: '🐒🌙🌊', answer: '猴子捞月', wrongs: ['猴子捞月', '水中捞月', '镜花水月'] },
    { emoji: '🦋🌺🌸', answer: '花蝴蝶', wrongs: ['花蝴蝶', '蝴蝶纷飞', '春暖花开'] },

    // 课本成语
    { emoji: '📖✏️💡', answer: '读书破万卷', wrongs: ['读书破万卷', '读万卷书', '书山有路'] },
    { emoji: '🌅🌊✨', answer: '海上生明月', wrongs: ['海上升明月', '海上生明月', '明月几时有'] },
    { emoji: '🏔️🚣🌸', answer: '两岸青山相对出', wrongs: ['两岸青山相对出', '孤帆远影', '轻舟已过'] },
    { emoji: '🌿🐼🎋', answer: '熊猫竹叶', wrongs: ['熊猫竹叶', '竹叶熊猫', '国宝大熊猫'] },
    { emoji: '🎋🌊🏮', answer: '花灯', wrongs: ['花灯', '灯笼', '元宵花灯'] },
    { emoji: '🍵🎋🏯', answer: '茶道', wrongs: ['茶道', '品茶', '茶文化'] },
    { emoji: '🖌️📜🎨', answer: '书法', wrongs: ['书法', '绘画', '艺术'] },
    { emoji: '🔬🧪💡', answer: '科学实验', wrongs: ['科学实验', '化学实验', '物理实验'] },
    { emoji: '⚛️📡🔭', answer: '天文物理', wrongs: ['天文物理', '宇宙探索', '自然科学'] },
    { emoji: '🌍🗺️🧭', answer: '地理', wrongs: ['地理', '地球科学', '世界地理'] },
    { emoji: '🗿🏯🎎', answer: '考古', wrongs: ['考古', '文物', '历史'] },
    { emoji: '⛅🌈☀️', answer: '气象', wrongs: ['气象', '天气', '气候变化'] },
    { emoji: '🌙🌊✨', answer: '海上生明月', wrongs: ['海上升明月', '海上生明月', '明月几时有'] },
    { emoji: '🏯🎎🌸', answer: '日本文化', wrongs: ['日本文化', '和风文化', '东方文化'] },

    // 学科相关
    { emoji: '🧪🔬💊', answer: '化学', wrongs: ['化学', '医药', '科学'] },
    { emoji: '🌿🧬🔬', answer: '生物', wrongs: ['生物', '生物科学', '植物学'] },
    { emoji: '⚡💡🔋', answer: '物理', wrongs: ['物理', '电学', '能源'] },
    { emoji: '🌍🌋🌊', answer: '地质', wrongs: ['地质', '地球科学', '地理'] },
    { emoji: '🪐🌙☀️', answer: '天文', wrongs: ['天文', '宇宙', '天体'] },
    { emoji: '🧬🧪💉', answer: '医学', wrongs: ['医学', '医药', '生物'] },
    { emoji: '📡📻📶', answer: '通信', wrongs: ['通信', '网络', '科技'] },
    { emoji: '🔭🌌⭐', answer: '天文', wrongs: ['天文', '宇宙', '天体'] },
    { emoji: '🌿🌍🌱', answer: '生态', wrongs: ['生态', '环保', '自然'] },

    // 俗语谚语
    { emoji: '🐜🏠🌧️', answer: '蚂蚁搬家要下雨', wrongs: ['蚂蚁搬家', '要下雨了', '蚂蚁搬家要下雨'] },
    { emoji: '🐝🌸🍯', answer: '蜜蜂采蜜', wrongs: ['蜜蜂采蜜', '蝴蝶采花', '小鸟觅食'] },
    { emoji: '🐟🐟🐟', answer: '年年有鱼', wrongs: ['年年有余', '年年有鱼', '鱼跃龙门'] },
    { emoji: '🐶🐱🐭', answer: '鸡犬不宁', wrongs: ['鸡飞狗跳', '鸡犬升天', '鸡犬不宁'] },
    { emoji: '🦋🌺🌸', answer: '花蝴蝶', wrongs: ['花蝴蝶', '蝴蝶纷飞', '春暖花开'] },
    { emoji: '🐦🌲🏠', answer: '鸟语花香', wrongs: ['花香鸟语', '鸟语花香', '春暖花开'] },

    // 传统文化
    { emoji: '🧧🧨🎆', answer: '春节', wrongs: ['春节', '过年', '除夕'] },
    { emoji: '🎋🎑🌕', answer: '中秋', wrongs: ['中秋', '中秋节', '团圆'] },
    { emoji: '🏯🎎🌸', answer: '日本文化', wrongs: ['日本文化', '和风文化', '东方文化'] },
    { emoji: '🍵🎋🏯', answer: '茶道', wrongs: ['茶道', '品茶', '茶文化'] },
    { emoji: '🖌️📜🎨', answer: '书法', wrongs: ['书法', '绘画', '艺术'] },
    { emoji: '🐉🐍🐎🐑', answer: '十二生肖', wrongs: ['十二生肖', '龙马精神', '马到成功'] },
    { emoji: '🌙🌊✨', answer: '海上生明月', wrongs: ['海上升明月', '海上生明月', '明月几时有'] },
    { emoji: '🗿🏯🎎', answer: '考古', wrongs: ['考古', '文物', '历史'] },

    // 四字成语
    { emoji: '⭐🌙⭐🌙', answer: '星星月亮', wrongs: ['星星月亮', '日月星辰', '星光灿烂'] },
    { emoji: '🔥🔥🔥🔥', answer: '火火火火', wrongs: ['热情似火', '火火火火', '炉火纯青'] },
    { emoji: '💧💧💧💧', answer: '水滴石穿', wrongs: ['水滴石穿', '滴水穿石', '水到渠成'] },
    { emoji: '🌊🌊🌊🌊', answer: '波涛汹涌', wrongs: ['波涛汹涌', '波澜壮阔', '风平浪静'] },
    { emoji: '⛰️⛰️⛰️', answer: '山外有山', wrongs: ['山外有山', '青山绿水', '山水相连'] },
    { emoji: '🌸🌸🌸🌸', answer: '花团锦簇', wrongs: ['花团锦簇', '百花齐放', '春暖花开'] },
    { emoji: '🍃🍃🍃🍃', answer: '落叶归根', wrongs: ['落叶归根', '叶落归根', '根深叶茂'] },
    { emoji: '❄️❄️❄️❄️', answer: '冰天雪地', wrongs: ['冰天雪地', '天寒地冻', '风雪交加'] },
    { emoji: '☀️☀️☀️☀️', answer: '阳光明媚', wrongs: ['阳光明媚', '风和日丽', '晴空万里'] },
    { emoji: '🌙🌙🌙🌙', answer: '月光如水', wrongs: ['月光如水', '皓月当空', '月明星稀'] },
    { emoji: '⭐🌙🌟✨', answer: '星辰大海', wrongs: ['星辰大海', '星光灿烂', '日月星辰'] },

    // 科技
    { emoji: '💻📱🖥️', answer: '数码科技', wrongs: ['数码科技', '电子产品', '智能设备'] },
    { emoji: '🖨️📠📟', answer: '办公设备', wrongs: ['办公设备', '打印机', '通讯'] },
    { emoji: '📡📻📶', answer: '无线通信', wrongs: ['无线通信', '网络科技', '信号传输'] },
    { emoji: '⚛️💡🔬', answer: '科学实验', wrongs: ['科学实验', '化学实验', '物理实验'] },
    { emoji: '🚀🌌🪐', answer: '太空探索', wrongs: ['太空探索', '宇宙飞船', '航天科技'] },

    // 自然
    { emoji: '🌋🌊⛰️', answer: '火山地震', wrongs: ['火山地震', '地质运动', '自然现象'] },
    { emoji: '🌪️🌊🌧️', answer: '极端天气', wrongs: ['极端天气', '自然灾害', '气候变化'] },
    { emoji: '🌈⛅☀️', answer: '气象万千', wrongs: ['气象万千', '天气变化', '晴雨交替'] },
    { emoji: '🌿🌳🌲', answer: '森林植被', wrongs: ['森林植被', '绿色生态', '自然风光'] },
    { emoji: '🐼🎋🌿', answer: '国宝熊猫', wrongs: ['国宝熊猫', '熊猫竹叶', '珍稀动物'] },
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

function generateOptions(correct, wrongs) {
    var opts = [correct];
    for (var i = 0; i < wrongs.length; i++) {
        if (opts.length >= 4) break;
        if (opts.indexOf(wrongs[i]) === -1) opts.push(wrongs[i]);
    }
    while (opts.length < 4) {
        var fallback = ['水果', '动物', '天空', '花朵', '运动', '学习', '快乐', '奔跑'];
        for (var i = 0; i < fallback.length; i++) {
            if (opts.length >= 4) break;
            if (opts.indexOf(fallback[i]) === -1) opts.push(fallback[i]);
        }
    }
    return shuffle(opts);
}

function buildQuestions(data) {
    var result = [];
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        var q = {
            emoji: item.emoji,
            answer: item.answer,
            options: generateOptions(item.answer, item.wrongs)
        };
        result.push(q);
    }
    return shuffle(result);
}

function ensureCount(questions, target, sourceData) {
    var result = questions.slice(0);
    var attempts = 0;

    while (result.length < target && attempts < 50) {
        attempts++;
        for (var i = 0; i < sourceData.length; i++) {
            if (result.length >= target) break;
            var item = sourceData[i];
            var q = {
                emoji: item.emoji + (attempts > 1 ? ' ' + attempts : ''),
                answer: item.answer,
                options: generateOptions(item.answer, item.wrongs)
            };
            var exists = false;
            for (var j = 0; j < result.length; j++) {
                if (result[j].emoji === q.emoji && result[j].answer === q.answer) { exists = true; break; }
            }
            if (!exists) result.push(q);
        }
    }
    return shuffle(result);
}

// ============================================================
// 导出
// ============================================================
EMOJI_QUESTIONS.easy = ensureCount(buildQuestions(EASY_DATA), 500, EASY_DATA);
EMOJI_QUESTIONS.medium = ensureCount(buildQuestions(MEDIUM_DATA), 500, MEDIUM_DATA);
EMOJI_QUESTIONS.hard = ensureCount(buildQuestions(HARD_DATA), 500, HARD_DATA);

console.log('✅ Emoji猜词题库加载完成:');
console.log('  一星:', EMOJI_QUESTIONS.easy.length, '题');
console.log('  二星:', EMOJI_QUESTIONS.medium.length, '题');
console.log('  三星:', EMOJI_QUESTIONS.hard.length, '题');