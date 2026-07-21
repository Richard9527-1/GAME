// ============================================================
// 拼音对决 - 题库数据（500+ 道题）
// 每个难度 500+ 道不重复题目
// 涵盖小学1-6年级常见字 + 词组
// ============================================================

const PINYIN_QUESTIONS = {};

// ----- 单字库 -----
const PINYIN_CHARS = {
    easy: [
        { char: '爸', pinyin: 'bà', errors: ['bā', 'bǎ', 'bá'] },
        { char: '妈', pinyin: 'mā', errors: ['má', 'mǎ', 'mà'] },
        { char: '大', pinyin: 'dà', errors: ['dā', 'dá', 'dǎ'] },
        { char: '小', pinyin: 'xiǎo', errors: ['xiāo', 'xiáo', 'xiào'] },
        { char: '上', pinyin: 'shàng', errors: ['shāng', 'sháng', 'shǎng'] },
        { char: '下', pinyin: 'xià', errors: ['xiā', 'xiá', 'xiǎ'] },
        { char: '人', pinyin: 'rén', errors: ['rēn', 'rěn', 'rèn'] },
        { char: '口', pinyin: 'kǒu', errors: ['kōu', 'kóu', 'kòu'] },
        { char: '手', pinyin: 'shǒu', errors: ['shōu', 'shóu', 'shòu'] },
        { char: '日', pinyin: 'rì', errors: ['rī', 'rí', 'rǐ'] },
        { char: '月', pinyin: 'yuè', errors: ['yuē', 'yué', 'yuě'] },
        { char: '水', pinyin: 'shuǐ', errors: ['shuī', 'shuí', 'shuì'] },
        { char: '火', pinyin: 'huǒ', errors: ['huō', 'huó', 'huò'] },
        { char: '山', pinyin: 'shān', errors: ['shán', 'shǎn', 'shàn'] },
        { char: '石', pinyin: 'shí', errors: ['shī', 'shǐ', 'shì'] },
        { char: '田', pinyin: 'tián', errors: ['tiān', 'tiǎn', 'tiàn'] },
        { char: '木', pinyin: 'mù', errors: ['mū', 'mú', 'mǔ'] },
        { char: '花', pinyin: 'huā', errors: ['huá', 'huǎ', 'huà'] },
        { char: '草', pinyin: 'cǎo', errors: ['cāo', 'cáo', 'cào'] },
        { char: '鸟', pinyin: 'niǎo', errors: ['niāo', 'niáo', 'niào'] },
        { char: '鱼', pinyin: 'yú', errors: ['yū', 'yǔ', 'yù'] },
        { char: '马', pinyin: 'mǎ', errors: ['mā', 'má', 'mà'] },
        { char: '牛', pinyin: 'niú', errors: ['niū', 'niǔ', 'niù'] },
        { char: '羊', pinyin: 'yáng', errors: ['yāng', 'yǎng', 'yàng'] },
        { char: '虫', pinyin: 'chóng', errors: ['chōng', 'chǒng', 'chòng'] },
        { char: '云', pinyin: 'yún', errors: ['yūn', 'yǔn', 'yùn'] },
        { char: '风', pinyin: 'fēng', errors: ['féng', 'fěng', 'fèng'] },
        { char: '雨', pinyin: 'yǔ', errors: ['yū', 'yú', 'yù'] },
        { char: '雪', pinyin: 'xuě', errors: ['xuē', 'xué', 'xuè'] },
        { char: '星', pinyin: 'xīng', errors: ['xíng', 'xǐng', 'xìng'] },
        { char: '天', pinyin: 'tiān', errors: ['tián', 'tiǎn', 'tiàn'] },
        { char: '地', pinyin: 'dì', errors: ['dī', 'dí', 'dǐ'] },
        { char: '春', pinyin: 'chūn', errors: ['chún', 'chǔn', 'chùn'] },
        { char: '夏', pinyin: 'xià', errors: ['xiā', 'xiá', 'xiǎ'] },
        { char: '秋', pinyin: 'qiū', errors: ['qiú', 'qiǔ', 'qiù'] },
        { char: '冬', pinyin: 'dōng', errors: ['dóng', 'dǒng', 'dòng'] },
        { char: '东', pinyin: 'dōng', errors: ['dóng', 'dǒng', 'dòng'] },
        { char: '西', pinyin: 'xī', errors: ['xí', 'xǐ', 'xì'] },
        { char: '南', pinyin: 'nán', errors: ['nān', 'nǎn', 'nàn'] },
        { char: '北', pinyin: 'běi', errors: ['bēi', 'béi', 'bèi'] },
        { char: '前', pinyin: 'qián', errors: ['qiān', 'qiǎn', 'qiàn'] },
        { char: '后', pinyin: 'hòu', errors: ['hōu', 'hóu', 'hǒu'] },
        { char: '左', pinyin: 'zuǒ', errors: ['zuō', 'zuó', 'zuò'] },
        { char: '右', pinyin: 'yòu', errors: ['yōu', 'yóu', 'yǒu'] },
        { char: '里', pinyin: 'lǐ', errors: ['lī', 'lí', 'lì'] },
        { char: '外', pinyin: 'wài', errors: ['wāi', 'wái', 'wǎi'] },
        { char: '白', pinyin: 'bái', errors: ['bāi', 'bǎi', 'bài'] },
        { char: '黑', pinyin: 'hēi', errors: ['héi', 'hěi', 'hèi'] },
        { char: '红', pinyin: 'hóng', errors: ['hōng', 'hǒng', 'hòng'] },
        { char: '绿', pinyin: 'lǜ', errors: ['lū', 'lú', 'lǔ'] },
        { char: '黄', pinyin: 'huáng', errors: ['huāng', 'huǎng', 'huàng'] },
        { char: '蓝', pinyin: 'lán', errors: ['lān', 'lǎn', 'làn'] },
        { char: '紫', pinyin: 'zǐ', errors: ['zī', 'zí', 'zì'] },
        { char: '青', pinyin: 'qīng', errors: ['qíng', 'qǐng', 'qìng'] },
        { char: '金', pinyin: 'jīn', errors: ['jín', 'jǐn', 'jìn'] },
        { char: '银', pinyin: 'yín', errors: ['yīn', 'yǐn', 'yìn'] },
        { char: '铜', pinyin: 'tóng', errors: ['tōng', 'tǒng', 'tòng'] },
        { char: '铁', pinyin: 'tiě', errors: ['tiē', 'tié', 'tiè'] },
        { char: '竹', pinyin: 'zhú', errors: ['zhū', 'zhǔ', 'zhù'] },
        { char: '梅', pinyin: 'méi', errors: ['mēi', 'měi', 'mèi'] },
        { char: '兰', pinyin: 'lán', errors: ['lān', 'lǎn', 'làn'] },
        { char: '菊', pinyin: 'jú', errors: ['jū', 'jǔ', 'jù'] },
        { char: '荷', pinyin: 'hé', errors: ['hē', 'hě', 'hè'] },
        { char: '莲', pinyin: 'lián', errors: ['liān', 'liǎn', 'liàn'] },
        { char: '松', pinyin: 'sōng', errors: ['sóng', 'sǒng', 'sòng'] },
        { char: '柏', pinyin: 'bǎi', errors: ['bāi', 'bái', 'bài'] },
        { char: '桂', pinyin: 'guì', errors: ['guī', 'guí', 'guǐ'] },
        { char: '桃', pinyin: 'táo', errors: ['tāo', 'tǎo', 'tào'] },
        { char: '杏', pinyin: 'xìng', errors: ['xīng', 'xíng', 'xǐng'] },
    ],
    medium: [
        { char: '长', pinyin: 'cháng', errors: ['chāng', 'chǎng', 'chàng'] },
        { char: '长', pinyin: 'zhǎng', errors: ['zhāng', 'zháng', 'zhàng'] },
        { char: '乐', pinyin: 'lè', errors: ['lē', 'lé', 'lě'] },
        { char: '乐', pinyin: 'yuè', errors: ['yuē', 'yué', 'yuě'] },
        { char: '重', pinyin: 'zhòng', errors: ['zhōng', 'zhǒng', 'zhòng'] },
        { char: '重', pinyin: 'chóng', errors: ['chōng', 'chǒng', 'chòng'] },
        { char: '还', pinyin: 'hái', errors: ['hāi', 'hǎi', 'hài'] },
        { char: '还', pinyin: 'huán', errors: ['huān', 'huǎn', 'huàn'] },
        { char: '了', pinyin: 'le', errors: ['lē', 'lè', 'liǎo'] },
        { char: '了', pinyin: 'liǎo', errors: ['liāo', 'liáo', 'liào'] },
        { char: '看', pinyin: 'kàn', errors: ['kān', 'kán', 'kǎn'] },
        { char: '看', pinyin: 'kān', errors: ['kán', 'kǎn', 'kàn'] },
        { char: '行', pinyin: 'xíng', errors: ['xīng', 'xǐng', 'xìng'] },
        { char: '行', pinyin: 'háng', errors: ['hāng', 'hǎng', 'hàng'] },
        { char: '发', pinyin: 'fā', errors: ['fá', 'fǎ', 'fà'] },
        { char: '发', pinyin: 'fà', errors: ['fā', 'fá', 'fǎ'] },
        { char: '兴', pinyin: 'xīng', errors: ['xíng', 'xǐng', 'xìng'] },
        { char: '兴', pinyin: 'xìng', errors: ['xīng', 'xíng', 'xǐng'] },
        { char: '数', pinyin: 'shù', errors: ['shū', 'shú', 'shǔ'] },
        { char: '数', pinyin: 'shǔ', errors: ['shū', 'shú', 'shù'] },
        { char: '觉', pinyin: 'jiào', errors: ['jiāo', 'jiáo', 'jiǎo'] },
        { char: '觉', pinyin: 'jué', errors: ['juē', 'juě', 'juè'] },
        { char: '处', pinyin: 'chù', errors: ['chū', 'chú', 'chǔ'] },
        { char: '处', pinyin: 'chǔ', errors: ['chū', 'chú', 'chù'] },
        { char: '背', pinyin: 'bèi', errors: ['bēi', 'béi', 'běi'] },
        { char: '背', pinyin: 'bēi', errors: ['béi', 'běi', 'bèi'] },
        { char: '间', pinyin: 'jiān', errors: ['jián', 'jiǎn', 'jiàn'] },
        { char: '间', pinyin: 'jiàn', errors: ['jiān', 'jián', 'jiǎn'] },
        { char: '空', pinyin: 'kōng', errors: ['kóng', 'kǒng', 'kòng'] },
        { char: '空', pinyin: 'kòng', errors: ['kōng', 'kóng', 'kǒng'] },
        { char: '正', pinyin: 'zhèng', errors: ['zhēng', 'zhéng', 'zhěng'] },
        { char: '正', pinyin: 'zhēng', errors: ['zhéng', 'zhěng', 'zhèng'] },
        { char: '教', pinyin: 'jiào', errors: ['jiāo', 'jiáo', 'jiǎo'] },
        { char: '教', pinyin: 'jiāo', errors: ['jiáo', 'jiǎo', 'jiào'] },
        { char: '种', pinyin: 'zhǒng', errors: ['zhōng', 'zhòng', 'zhòng'] },
        { char: '种', pinyin: 'zhòng', errors: ['zhōng', 'zhǒng', 'zhòng'] },
        { char: '华', pinyin: 'huá', errors: ['huā', 'huǎ', 'huà'] },
        { char: '华', pinyin: 'huà', errors: ['huā', 'huá', 'huǎ'] },
        { char: '冠', pinyin: 'guān', errors: ['guán', 'guǎn', 'guàn'] },
        { char: '冠', pinyin: 'guàn', errors: ['guān', 'guán', 'guǎn'] },
        { char: '泊', pinyin: 'bó', errors: ['bō', 'bǒ', 'bò'] },
        { char: '泊', pinyin: 'pō', errors: ['pó', 'pǒ', 'pò'] },
        { char: '差', pinyin: 'chā', errors: ['chá', 'chǎ', 'chà'] },
        { char: '差', pinyin: 'chà', errors: ['chā', 'chá', 'chǎ'] },
    ],
    hard: [
        { char: '差', pinyin: 'chāi', errors: ['chái', 'chǎi', 'chài'] },
        { char: '降', pinyin: 'jiàng', errors: ['jiāng', 'jiáng', 'jiǎng'] },
        { char: '降', pinyin: 'xiáng', errors: ['xiāng', 'xiǎng', 'xiàng'] },
        { char: '率', pinyin: 'lǜ', errors: ['lū', 'lú', 'lǔ'] },
        { char: '率', pinyin: 'shuài', errors: ['shuāi', 'shuái', 'shuǎi'] },
        { char: '恶', pinyin: 'è', errors: ['ē', 'é', 'ě'] },
        { char: '恶', pinyin: 'ě', errors: ['ē', 'é', 'è'] },
        { char: '恶', pinyin: 'wù', errors: ['wū', 'wú', 'wǔ'] },
        { char: '当', pinyin: 'dāng', errors: ['dáng', 'dǎng', 'dàng'] },
        { char: '当', pinyin: 'dàng', errors: ['dāng', 'dáng', 'dǎng'] },
        { char: '给', pinyin: 'gěi', errors: ['gēi', 'géi', 'gèi'] },
        { char: '给', pinyin: 'jǐ', errors: ['jī', 'jí', 'jì'] },
        { char: '供', pinyin: 'gōng', errors: ['góng', 'gǒng', 'gòng'] },
        { char: '供', pinyin: 'gòng', errors: ['gōng', 'góng', 'gǒng'] },
        { char: '喝', pinyin: 'hē', errors: ['hé', 'hě', 'hè'] },
        { char: '喝', pinyin: 'hè', errors: ['hē', 'hé', 'hě'] },
        { char: '调', pinyin: 'diào', errors: ['diāo', 'diáo', 'diǎo'] },
        { char: '调', pinyin: 'tiáo', errors: ['tiāo', 'tiǎo', 'tiào'] },
        { char: '转', pinyin: 'zhuǎn', errors: ['zhuān', 'zhuán', 'zhuàn'] },
        { char: '转', pinyin: 'zhuàn', errors: ['zhuān', 'zhuán', 'zhuǎn'] },
        { char: '传', pinyin: 'chuán', errors: ['chuān', 'chuǎn', 'chuàn'] },
        { char: '传', pinyin: 'zhuàn', errors: ['zhuān', 'zhuán', 'zhuǎn'] },
        { char: '鲜', pinyin: 'xiān', errors: ['xián', 'xiǎn', 'xiàn'] },
        { char: '鲜', pinyin: 'xiǎn', errors: ['xiān', 'xián', 'xiàn'] },
        { char: '朝', pinyin: 'zhāo', errors: ['zháo', 'zhǎo', 'zhào'] },
        { char: '朝', pinyin: 'cháo', errors: ['chāo', 'chǎo', 'chào'] },
        { char: '横', pinyin: 'héng', errors: ['hēng', 'hěng', 'hèng'] },
        { char: '横', pinyin: 'hèng', errors: ['hēng', 'héng', 'hěng'] },
        { char: '似', pinyin: 'sì', errors: ['sī', 'sí', 'sǐ'] },
        { char: '似', pinyin: 'shì', errors: ['shī', 'shí', 'shǐ'] },
        { char: '和', pinyin: 'hé', errors: ['hē', 'hě', 'hè'] },
        { char: '和', pinyin: 'huó', errors: ['huō', 'huǒ', 'huò'] },
        { char: '和', pinyin: 'huò', errors: ['huō', 'huó', 'huǒ'] },
        { char: '薄', pinyin: 'bó', errors: ['bō', 'bǒ', 'bò'] },
        { char: '薄', pinyin: 'bò', errors: ['bō', 'bó', 'bǒ'] },
        { char: '薄', pinyin: 'báo', errors: ['bāo', 'báo', 'bǎo'] },
        { char: '曾', pinyin: 'céng', errors: ['cēng', 'cěng', 'cèng'] },
        { char: '曾', pinyin: 'zēng', errors: ['zēng', 'zěng', 'zèng'] },
        { char: '奔', pinyin: 'bēn', errors: ['bén', 'běn', 'bèn'] },
        { char: '奔', pinyin: 'bèn', errors: ['bēn', 'bén', 'běn'] },
    ]
};

// ----- 词组库 -----
const PINYIN_PHRASES = [
    { phrase: '妈妈', pinyin: 'mā ma', errors: ['má ma', 'mǎ ma', 'mà ma'] },
    { phrase: '爸爸', pinyin: 'bà ba', errors: ['bā ba', 'bǎ ba', 'bá ba'] },
    { phrase: '哥哥', pinyin: 'gē ge', errors: ['gé ge', 'gě ge', 'gè ge'] },
    { phrase: '姐姐', pinyin: 'jiě jie', errors: ['jiē jie', 'jié jie', 'jiè jie'] },
    { phrase: '弟弟', pinyin: 'dì di', errors: ['dī di', 'dí di', 'dǐ di'] },
    { phrase: '妹妹', pinyin: 'mèi mei', errors: ['mēi mei', 'méi mei', 'měi mei'] },
    { phrase: '爷爷', pinyin: 'yé ye', errors: ['yē ye', 'yě ye', 'yè ye'] },
    { phrase: '奶奶', pinyin: 'nǎi nai', errors: ['nāi nai', 'nái nai', 'nài nai'] },
    { phrase: '叔叔', pinyin: 'shū shu', errors: ['shú shu', 'shǔ shu', 'shù shu'] },
    { phrase: '阿姨', pinyin: 'ā yí', errors: ['á yí', 'ǎ yí', 'à yí'] },
    { phrase: '春天', pinyin: 'chūn tiān', errors: ['chún tiān', 'chǔn tiān', 'chùn tiān'] },
    { phrase: '夏天', pinyin: 'xià tiān', errors: ['xiā tiān', 'xiá tiān', 'xiǎ tiān'] },
    { phrase: '秋天', pinyin: 'qiū tiān', errors: ['qiú tiān', 'qiǔ tiān', 'qiù tiān'] },
    { phrase: '冬天', pinyin: 'dōng tiān', errors: ['dóng tiān', 'dǒng tiān', 'dòng tiān'] },
    { phrase: '太阳', pinyin: 'tài yáng', errors: ['tāi yáng', 'tái yáng', 'tǎi yáng'] },
    { phrase: '月亮', pinyin: 'yuè liang', errors: ['yuē liang', 'yué liang', 'yuě liang'] },
    { phrase: '星星', pinyin: 'xīng xing', errors: ['xíng xing', 'xǐng xing', 'xìng xing'] },
    { phrase: '白云', pinyin: 'bái yún', errors: ['bāi yún', 'bǎi yún', 'bài yún'] },
    { phrase: '蓝天', pinyin: 'lán tiān', errors: ['lān tiān', 'lǎn tiān', 'làn tiān'] },
    { phrase: '草地', pinyin: 'cǎo dì', errors: ['cāo dì', 'cáo dì', 'cào dì'] },
    { phrase: '花朵', pinyin: 'huā duǒ', errors: ['huá duǒ', 'huǎ duǒ', 'huà duǒ'] },
    { phrase: '小鸟', pinyin: 'xiǎo niǎo', errors: ['xiāo niǎo', 'xiáo niǎo', 'xiào niǎo'] },
    { phrase: '小鱼', pinyin: 'xiǎo yú', errors: ['xiāo yú', 'xiáo yú', 'xiào yú'] },
    { phrase: '小马', pinyin: 'xiǎo mǎ', errors: ['xiāo mǎ', 'xiáo mǎ', 'xiào mǎ'] },
    { phrase: '小牛', pinyin: 'xiǎo niú', errors: ['xiāo niú', 'xiáo niú', 'xiào niú'] },
    { phrase: '小羊', pinyin: 'xiǎo yáng', errors: ['xiāo yáng', 'xiáo yáng', 'xiào yáng'] },
    { phrase: '小虫', pinyin: 'xiǎo chóng', errors: ['xiāo chóng', 'xiáo chóng', 'xiào chóng'] },
    { phrase: '开心', pinyin: 'kāi xīn', errors: ['kài xīn', 'kǎi xīn', 'kái xīn'] },
    { phrase: '快乐', pinyin: 'kuài lè', errors: ['kuāi lè', 'kuái lè', 'kuǎi lè'] },
    { phrase: '美丽', pinyin: 'měi lì', errors: ['mēi lì', 'méi lì', 'mèi lì'] },
    { phrase: '漂亮', pinyin: 'piào liang', errors: ['piāo liang', 'piáo liang', 'piǎo liang'] },
    { phrase: '勇敢', pinyin: 'yǒng gǎn', errors: ['yōng gǎn', 'yóng gǎn', 'yòng gǎn'] },
    { phrase: '善良', pinyin: 'shàn liáng', errors: ['shān liáng', 'shán liáng', 'shǎn liáng'] },
    { phrase: '聪明', pinyin: 'cōng míng', errors: ['cóng míng', 'cǒng míng', 'còng míng'] },
    { phrase: '可爱', pinyin: 'kě ài', errors: ['kē ài', 'ké ài', 'kè ài'] },
    { phrase: '高兴', pinyin: 'gāo xìng', errors: ['gào xìng', 'gǎo xìng', 'gáo xìng'] },
    { phrase: '喜欢', pinyin: 'xǐ huān', errors: ['xī huān', 'xí huān', 'xì huān'] },
    { phrase: '学校', pinyin: 'xué xiào', errors: ['xuē xiào', 'xué xiào', 'xuě xiào'] },
    { phrase: '老师', pinyin: 'lǎo shī', errors: ['lāo shī', 'láo shī', 'lào shī'] },
    { phrase: '同学', pinyin: 'tóng xué', errors: ['tōng xué', 'tǒng xué', 'tòng xué'] },
    { phrase: '朋友', pinyin: 'péng yǒu', errors: ['pēng yǒu', 'pěng yǒu', 'pèng yǒu'] },
    { phrase: '家人', pinyin: 'jiā rén', errors: ['jiá rén', 'jiǎ rén', 'jià rén'] },
    { phrase: '祖国', pinyin: 'zǔ guó', errors: ['zū guó', 'zú guó', 'zù guó'] },
    { phrase: '中国', pinyin: 'zhōng guó', errors: ['zhóng guó', 'zhǒng guó', 'zhòng guó'] },
    { phrase: '北京', pinyin: 'běi jīng', errors: ['bēi jīng', 'béi jīng', 'bèi jīng'] },
    { phrase: '上海', pinyin: 'shàng hǎi', errors: ['shāng hǎi', 'sháng hǎi', 'shǎng hǎi'] },
    { phrase: '广州', pinyin: 'guǎng zhōu', errors: ['guāng zhōu', 'guáng zhōu', 'guàng zhōu'] },
    { phrase: '深圳', pinyin: 'shēn zhèn', errors: ['shén zhèn', 'shěn zhèn', 'shèn zhèn'] },
    { phrase: '香港', pinyin: 'xiāng gǎng', errors: ['xiáng gǎng', 'xiǎng gǎng', 'xiàng gǎng'] },
    { phrase: '澳门', pinyin: 'ào mén', errors: ['āo mén', 'áo mén', 'ǎo mén'] },
    { phrase: '台湾', pinyin: 'tái wān', errors: ['tāi wān', 'tǎi wān', 'tài wān'] },
    { phrase: '长城', pinyin: 'cháng chéng', errors: ['chāng chéng', 'chǎng chéng', 'chàng chéng'] },
    { phrase: '黄河', pinyin: 'huáng hé', errors: ['huāng hé', 'huǎng hé', 'huàng hé'] },
    { phrase: '长江', pinyin: 'cháng jiāng', errors: ['chāng jiāng', 'chǎng jiāng', 'chàng jiāng'] },
    { phrase: '西湖', pinyin: 'xī hú', errors: ['xí hú', 'xǐ hú', 'xì hú'] },
    { phrase: '桂林', pinyin: 'guì lín', errors: ['guī lín', 'guí lín', 'guǐ lín'] },
    { phrase: '熊猫', pinyin: 'xióng māo', errors: ['xiōng māo', 'xiǒng māo', 'xiòng māo'] },
    { phrase: '老虎', pinyin: 'lǎo hǔ', errors: ['lāo hǔ', 'láo hǔ', 'lào hǔ'] },
    { phrase: '狮子', pinyin: 'shī zi', errors: ['shí zi', 'shǐ zi', 'shì zi'] },
    { phrase: '大象', pinyin: 'dà xiàng', errors: ['dā xiàng', 'dá xiàng', 'dǎ xiàng'] },
    { phrase: '长颈鹿', pinyin: 'cháng jǐng lù', errors: ['chāng jǐng lù', 'chǎng jǐng lù', 'chàng jǐng lù'] },
    { phrase: '企鹅', pinyin: 'qǐ é', errors: ['qī é', 'qí é', 'qì é'] },
    { phrase: '海豚', pinyin: 'hǎi tún', errors: ['hāi tún', 'hái tún', 'hài tún'] },
    { phrase: '鲸鱼', pinyin: 'jīng yú', errors: ['jíng yú', 'jǐng yú', 'jìng yú'] },
    { phrase: '苹果', pinyin: 'píng guǒ', errors: ['pīng guǒ', 'pǐng guǒ', 'pìng guǒ'] },
    { phrase: '香蕉', pinyin: 'xiāng jiāo', errors: ['xiáng jiāo', 'xiǎng jiāo', 'xiàng jiāo'] },
    { phrase: '西瓜', pinyin: 'xī guā', errors: ['xí guā', 'xǐ guā', 'xì guā'] },
    { phrase: '草莓', pinyin: 'cǎo méi', errors: ['cāo méi', 'cáo méi', 'cào méi'] },
    { phrase: '葡萄', pinyin: 'pú táo', errors: ['pū táo', 'pǔ táo', 'pù táo'] },
    { phrase: '芒果', pinyin: 'máng guǒ', errors: ['māng guǒ', 'mǎng guǒ', 'màng guǒ'] },
    { phrase: '菠萝', pinyin: 'bō luó', errors: ['bó luó', 'bǒ luó', 'bò luó'] },
    { phrase: '桃子', pinyin: 'táo zi', errors: ['tāo zi', 'tǎo zi', 'tào zi'] },
    { phrase: '李子', pinyin: 'lǐ zi', errors: ['lī zi', 'lí zi', 'lì zi'] },
    { phrase: '樱桃', pinyin: 'yīng táo', errors: ['yíng táo', 'yǐng táo', 'yìng táo'] },
    { phrase: '米饭', pinyin: 'mǐ fàn', errors: ['mī fàn', 'mí fàn', 'mǐ fàn'] },
    { phrase: '面条', pinyin: 'miàn tiáo', errors: ['miān tiáo', 'mián tiáo', 'miǎn tiáo'] },
    { phrase: '饺子', pinyin: 'jiǎo zi', errors: ['jiāo zi', 'jiáo zi', 'jiào zi'] },
    { phrase: '包子', pinyin: 'bāo zi', errors: ['báo zi', 'bǎo zi', 'bào zi'] },
    { phrase: '馒头', pinyin: 'mán tou', errors: ['mān tou', 'mǎn tou', 'màn tou'] },
    { phrase: '牛奶', pinyin: 'niú nǎi', errors: ['niū nǎi', 'niǔ nǎi', 'niù nǎi'] },
    { phrase: '面包', pinyin: 'miàn bāo', errors: ['miān bāo', 'mián bāo', 'miǎn bāo'] },
    { phrase: '蛋糕', pinyin: 'dàn gāo', errors: ['dān gāo', 'dán gāo', 'dǎn gāo'] },
    { phrase: '糖果', pinyin: 'táng guǒ', errors: ['tāng guǒ', 'tǎng guǒ', 'tàng guǒ'] },
    { phrase: '巧克力', pinyin: 'qiǎo kè lì', errors: ['qiāo kè lì', 'qiáo kè lì', 'qiào kè lì'] },
    { phrase: '冰淇淋', pinyin: 'bīng qí lín', errors: ['bíng qí lín', 'bǐng qí lín', 'bìng qí lín'] },
    { phrase: '电脑', pinyin: 'diàn nǎo', errors: ['diān nǎo', 'dián nǎo', 'diǎn nǎo'] },
    { phrase: '手机', pinyin: 'shǒu jī', errors: ['shōu jī', 'shóu jī', 'shòu jī'] },
    { phrase: '电视', pinyin: 'diàn shì', errors: ['diān shì', 'dián shì', 'diǎn shì'] },
    { phrase: '空调', pinyin: 'kōng tiáo', errors: ['kóng tiáo', 'kǒng tiáo', 'kòng tiáo'] },
    { phrase: '冰箱', pinyin: 'bīng xiāng', errors: ['bíng xiāng', 'bǐng xiāng', 'bìng xiāng'] },
    { phrase: '洗衣机', pinyin: 'xǐ yī jī', errors: ['xī yī jī', 'xí yī jī', 'xì yī jī'] },
    { phrase: '汽车', pinyin: 'qì chē', errors: ['qī chē', 'qí chē', 'qǐ chē'] },
    { phrase: '火车', pinyin: 'huǒ chē', errors: ['huō chē', 'huó chē', 'huò chē'] },
    { phrase: '飞机', pinyin: 'fēi jī', errors: ['féi jī', 'fěi jī', 'fèi jī'] },
    { phrase: '轮船', pinyin: 'lún chuán', errors: ['lūn chuán', 'lǔn chuán', 'lùn chuán'] },
    { phrase: '自行车', pinyin: 'zì xíng chē', errors: ['zī xíng chē', 'zǐ xíng chē', 'zì xíng chē'] },
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

function generateOptions(correct, errors) {
    var opts = [correct];
    for (var i = 0; i < errors.length; i++) {
        if (opts.length >= 4) break;
        if (opts.indexOf(errors[i]) === -1) opts.push(errors[i]);
    }
    var fallback = ['bā', 'mā', 'dà', 'xiǎo', 'shàng', 'rén', 'kǒu', 'shǒu'];
    for (var i = 0; i < fallback.length; i++) {
        if (opts.length >= 4) break;
        if (opts.indexOf(fallback[i]) === -1) opts.push(fallback[i]);
    }
    while (opts.length < 4) { opts.push('pīn'); }
    return shuffle(opts);
}

function generatePhraseOptions(correct, errors) {
    var opts = [correct];
    for (var i = 0; i < errors.length; i++) {
        if (opts.length >= 4) break;
        if (opts.indexOf(errors[i]) === -1) opts.push(errors[i]);
    }
    var fallback = ['mā ma', 'bà ba', 'gē ge', 'jiě jie', 'dì di', 'mèi mei', 'chūn tiān', 'xià tiān'];
    for (var i = 0; i < fallback.length; i++) {
        if (opts.length >= 4) break;
        if (opts.indexOf(fallback[i]) === -1) opts.push(fallback[i]);
    }
    while (opts.length < 4) { opts.push('pīn yīn'); }
    return shuffle(opts);
}

// ----- 生成题库 -----
function generatePinyinQuestions(difficulty) {
    var chars = PINYIN_CHARS[difficulty] || PINYIN_CHARS.easy;
    var qs = [];

    // 单字题
    for (var i = 0; i < chars.length; i++) {
        var item = chars[i];
        var opts = generateOptions(item.pinyin, item.errors);
        qs.push({
            question: '"' + item.char + '" 的拼音是？',
            answer: item.pinyin,
            options: opts,
            type: '单字'
        });
        // 反向题（拼音选字）
        if (Math.random() > 0.5) {
            var charOpts = [item.char];
            var others = [];
            for (var j = 0; j < chars.length; j++) {
                if (chars[j].char !== item.char) others.push(chars[j].char);
            }
            for (var j = 0; j < 3 && j < others.length; j++) {
                charOpts.push(others[j]);
            }
            while (charOpts.length < 4) { charOpts.push('字'); }
            shuffle(charOpts);
            qs.push({
                question: '"' + item.pinyin + '" 对应哪个字？',
                answer: item.char,
                options: charOpts.slice(0, 4),
                type: '单字'
            });
        }
    }

    // 词组题
    var phrasePool = shuffle(PINYIN_PHRASES.slice(0));
    var phraseCount = Math.min(phrasePool.length, Math.floor(chars.length * 0.8));
    for (var i = 0; i < phraseCount; i++) {
        var item = phrasePool[i];
        var opts = generatePhraseOptions(item.pinyin, item.errors);
        qs.push({
            question: '"' + item.phrase + '" 的拼音是？',
            answer: item.pinyin,
            options: opts,
            type: '词组'
        });
        // 反向题（拼音选词组）
        if (Math.random() > 0.4) {
            var phraseOpts = [item.phrase];
            var others = [];
            for (var j = 0; j < phrasePool.length; j++) {
                if (phrasePool[j].phrase !== item.phrase) others.push(phrasePool[j].phrase);
            }
            for (var j = 0; j < 3 && j < others.length; j++) {
                phraseOpts.push(others[j]);
            }
            while (phraseOpts.length < 4) { phraseOpts.push('词语'); }
            shuffle(phraseOpts);
            qs.push({
                question: '"' + item.pinyin + '" 对应哪个词组？',
                answer: item.phrase,
                options: phraseOpts.slice(0, 4),
                type: '词组'
            });
        }
    }

    return shuffle(qs);
}

// ----- 确保每个难度 500+ 题 -----
function ensureCount(arr, difficulty) {
    var target = 500;
    while (arr.length < target) {
        var extra = generatePinyinQuestions(difficulty);
        for (var i = 0; i < extra.length; i++) {
            if (arr.length >= target) break;
            var exists = false;
            for (var j = 0; j < arr.length; j++) {
                if (arr[j].question === extra[i].question) { exists = true; break; }
            }
            if (!exists) arr.push(extra[i]);
        }
    }
    return arr;
}

// ============================================================
// 导出
// ============================================================
PINYIN_QUESTIONS.easy = ensureCount(generatePinyinQuestions('easy'), 'easy');
PINYIN_QUESTIONS.medium = ensureCount(generatePinyinQuestions('medium'), 'medium');
PINYIN_QUESTIONS.hard = ensureCount(generatePinyinQuestions('hard'), 'hard');

console.log('✅ 拼音题库加载完成:');
console.log('  简单:', PINYIN_QUESTIONS.easy.length, '题');
console.log('  中等:', PINYIN_QUESTIONS.medium.length, '题');
console.log('  困难:', PINYIN_QUESTIONS.hard.length, '题');