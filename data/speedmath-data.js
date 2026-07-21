// ============================================================
// 速算对决 - 题库生成器（增强版）
// 每个难度 500+ 道不重复题目
// 同一组数字可生成多种运算形式
// ============================================================

// 去重工具
function smUnique(questions) {
    const seen = new Set();
    const result = [];
    for (const q of questions) {
        const key = q.question;
        if (!seen.has(key)) {
            seen.add(key);
            result.push(q);
        }
    }
    return result;
}

// 选项生成（增强版，干扰项更合理）
function smGenOpts(correct, range, minVal, maxVal) {
    range = range || Math.max(5, Math.abs(correct) + 3);
    minVal = minVal !== undefined ? minVal : 0;
    maxVal = maxVal || 999;
    const opts = new Set([correct]);
    let attempts = 0;
    while (opts.size < 4 && attempts < 300) {
        let offset = randomInt(1, range);
        if (Math.random() > 0.5) offset = -offset;
        const c = correct + offset;
        if (c >= minVal && c <= maxVal && c !== correct) {
            opts.add(c);
        }
        attempts++;
    }
    // 如果还不够，补充随机值
    while (opts.size < 4) {
        const fallback = randomInt(Math.max(minVal, correct - range * 2), Math.min(maxVal, correct + range * 2));
        if (fallback !== correct && !opts.has(fallback)) {
            opts.add(fallback);
        } else {
            // 极端情况：强行加一个不同的数
            const forced = correct + (opts.size + 1);
            if (forced >= minVal && forced <= maxVal) opts.add(forced);
        }
    }
    return shuffle(Array.from(opts));
}

// ============================================================
// 简单难度 (1-2年级) - 增强版
// 题型：20以内加减、连加连减、填括号
// ============================================================
function generateEasySpeedMath() {
    const qs = [];

    // 1. 20以内加减 (基础)
    for (let a = 1; a <= 19; a++) {
        for (let b = 1; b <= 20 - a; b++) {
            // a + b = ?
            qs.push({
                question: `${a} + ${b} = ?`,
                answer: a + b,
                options: smGenOpts(a + b, 5, 0, 30)
            });
            // a - b = ? (确保a >= b)
            if (a >= b) {
                qs.push({
                    question: `${a} - ${b} = ?`,
                    answer: a - b,
                    options: smGenOpts(a - b, 5, 0, 20)
                });
            }
        }
    }

    // 2. 三个数加减 (如 3+4+2=?, 8-3+2=?)
    for (let i = 0; i < 120; i++) {
        const a = randomInt(1, 12);
        const b = randomInt(1, 10);
        const c = randomInt(1, 8);
        const ops = [
            ['+', '+'], ['+', '-'], ['-', '+'], ['-', '-']
        ];
        const [op1, op2] = pick(ops);
        let ans, display;
        if (op1 === '+' && op2 === '+') {
            ans = a + b + c;
            display = `${a} + ${b} + ${c} = ?`;
        } else if (op1 === '+' && op2 === '-') {
            ans = a + b - c;
            display = `${a} + ${b} - ${c} = ?`;
        } else if (op1 === '-' && op2 === '+') {
            ans = a - b + c;
            display = `${a} - ${b} + ${c} = ?`;
        } else {
            ans = a - b - c;
            display = `${a} - ${b} - ${c} = ?`;
        }
        if (ans >= 0 && ans <= 30) {
            qs.push({
                question: display,
                answer: ans,
                options: smGenOpts(ans, 6, 0, 35)
            });
        }
    }

    // 3. 填括号 (如 (3+4)+2=?, 3+(4+2)=?)
    for (let i = 0; i < 60; i++) {
        const a = randomInt(1, 10);
        const b = randomInt(1, 8);
        const c = randomInt(1, 6);
        const ops = [
            ['+', '+'], ['+', '-'], ['-', '+']
        ];
        const [op1, op2] = pick(ops);
        let ans, display;
        if (op1 === '+' && op2 === '+') {
            ans = a + b + c;
            display = `(${a} + ${b}) + ${c} = ?`;
        } else if (op1 === '+' && op2 === '-') {
            ans = a + b - c;
            display = `(${a} + ${b}) - ${c} = ?`;
        } else {
            ans = a - b + c;
            display = `(${a} - ${b}) + ${c} = ?`;
            if (ans < 0) continue;
        }
        if (ans >= 0 && ans <= 30) {
            qs.push({
                question: display,
                answer: ans,
                options: smGenOpts(ans, 6, 0, 35)
            });
        }
    }

    const unique = smUnique(qs);
    // 保证至少500题
    while (unique.length < 500) {
        const a = randomInt(1, 15);
        const b = randomInt(1, 10);
        const ans = a + b;
        const q = `${a} + ${b} = ?`;
        if (!unique.find(x => x.question === q)) {
            unique.push({
                question: q,
                answer: ans,
                options: smGenOpts(ans, 5, 0, 30)
            });
        }
    }
    return shuffle(unique);
}

// ============================================================
// 中等难度 (3-4年级) - 增强版
// 题型：两位数加减、表内乘除、带括号、混合运算
// ============================================================
function generateMediumSpeedMath() {
    const qs = [];

    // 1. 两位数加减 (20-99)
    for (let i = 0; i < 180; i++) {
        const a = randomInt(20, 95);
        const b = randomInt(1, 50);
        const op = pick(['+', '-']);
        let ans, display;
        if (op === '+') {
            ans = a + b;
            display = `${a} + ${b} = ?`;
        } else {
            ans = a - b;
            display = `${a} - ${b} = ?`;
            if (ans < 0) { i--; continue; }
        }
        qs.push({
            question: display,
            answer: ans,
            options: smGenOpts(ans, 10, 0, 150)
        });
    }

    // 2. 表内乘法 (2-9 × 2-9)
    for (let a = 2; a <= 9; a++) {
        for (let b = 2; b <= 9; b++) {
            const ans = a * b;
            qs.push({
                question: `${a} × ${b} = ?`,
                answer: ans,
                options: smGenOpts(ans, 8, 0, 90)
            });
            // 同一个数字组合，交换顺序再来一次 (乘法交换律)
            if (a !== b) {
                qs.push({
                    question: `${b} × ${a} = ?`,
                    answer: ans,
                    options: smGenOpts(ans, 8, 0, 90)
                });
            }
        }
    }

    // 3. 表内除法 (反向)
    for (let a = 2; a <= 9; a++) {
        for (let b = 2; b <= 9; b++) {
            const product = a * b;
            qs.push({
                question: `${product} ÷ ${b} = ?`,
                answer: a,
                options: smGenOpts(a, 6, 0, 20)
            });
            // 交换除数和商
            if (a !== b) {
                qs.push({
                    question: `${product} ÷ ${a} = ?`,
                    answer: b,
                    options: smGenOpts(b, 6, 0, 20)
                });
            }
        }
    }

    // 4. 带括号的混合运算 (如 (3+4)×5=?, 3×(4+5)=?)
    for (let i = 0; i < 100; i++) {
        const a = randomInt(2, 9);
        const b = randomInt(2, 9);
        const c = randomInt(2, 9);
        const types = [
            { display: `(${a} + ${b}) × ${c} = ?`, ans: (a + b) * c },
            { display: `${a} × (${b} + ${c}) = ?`, ans: a * (b + c) },
            { display: `(${a} - ${b}) × ${c} = ?`, ans: (a - b) * c, min: 1 },
            { display: `${a} × (${b} - ${c}) = ?`, ans: a * (b - c), min: 1 },
            { display: `(${a} + ${b}) ÷ ${c} = ?`, ans: (a + b) / c, check: 'integer' },
        ];
        const selected = pick(types);
        if (selected.min && selected.ans < 0) continue;
        if (selected.check === 'integer' && selected.ans % 1 !== 0) continue;
        if (selected.ans <= 0 || selected.ans > 100) continue;
        qs.push({
            question: selected.display,
            answer: selected.ans,
            options: smGenOpts(selected.ans, 10, 0, 120)
        });
    }

    // 5. 两步混合运算 (加减乘除混合)
    for (let i = 0; i < 100; i++) {
        const a = randomInt(2, 12);
        const b = randomInt(2, 12);
        const c = randomInt(1, 20);
        const op = pick(['+', '-']);
        let ans, display;
        if (op === '+') {
            ans = a * b + c;
            display = `${a} × ${b} + ${c} = ?`;
        } else {
            ans = a * b - c;
            display = `${a} × ${b} - ${c} = ?`;
            if (ans < 0) { i--; continue; }
        }
        qs.push({
            question: display,
            answer: ans,
            options: smGenOpts(ans, 12, 0, 150)
        });
    }

    const unique = smUnique(qs);
    while (unique.length < 500) {
        const a = randomInt(2, 9);
        const b = randomInt(2, 9);
        const ans = a * b;
        const q = `${a} × ${b} = ?`;
        if (!unique.find(x => x.question === q)) {
            unique.push({
                question: q,
                answer: ans,
                options: smGenOpts(ans, 8, 0, 90)
            });
        }
    }
    return shuffle(unique);
}

// ============================================================
// 困难难度 (5-6年级) - 增强版
// 题型：三位数运算、多位数乘除、复杂混合、分数中间结果
// ============================================================
function generateHardSpeedMath() {
    const qs = [];

    // 1. 三位数加减 (100-500)
    for (let i = 0; i < 150; i++) {
        const a = randomInt(50, 400);
        const b = randomInt(20, 200);
        const op = pick(['+', '-']);
        let ans, display;
        if (op === '+') {
            ans = a + b;
            display = `${a} + ${b} = ?`;
        } else {
            ans = a - b;
            display = `${a} - ${b} = ?`;
            if (ans < 0) { i--; continue; }
        }
        qs.push({
            question: display,
            answer: ans,
            options: smGenOpts(ans, 20, 0, 700)
        });
    }

    // 2. 多位数乘法 (两位数×一位数, 两位数×两位数)
    for (let i = 0; i < 150; i++) {
        const a = randomInt(11, 99);
        const b = randomInt(2, 15);
        const ans = a * b;
        qs.push({
            question: `${a} × ${b} = ?`,
            answer: ans,
            options: smGenOpts(ans, 25, 0, 1500)
        });
        // 交换顺序
        if (a !== b && b >= 11) {
            qs.push({
                question: `${b} × ${a} = ?`,
                answer: ans,
                options: smGenOpts(ans, 25, 0, 1500)
            });
        }
    }

    // 3. 多位数除法 (两位数÷一位数, 三位数÷一位数)
    for (let i = 0; i < 100; i++) {
        const divisor = randomInt(2, 9);
        const quotient = randomInt(2, 40);
        const dividend = divisor * quotient;
        qs.push({
            question: `${dividend} ÷ ${divisor} = ?`,
            answer: quotient,
            options: smGenOpts(quotient, 10, 0, 50)
        });
        // 反向：被除数不变，换除数
        const divisor2 = randomInt(2, 9);
        if (divisor !== divisor2 && dividend % divisor2 === 0) {
            qs.push({
                question: `${dividend} ÷ ${divisor2} = ?`,
                answer: dividend / divisor2,
                options: smGenOpts(dividend / divisor2, 10, 0, 50)
            });
        }
    }

    // 4. 带括号的复杂运算
    for (let i = 0; i < 80; i++) {
        const a = randomInt(2, 12);
        const b = randomInt(2, 12);
        const c = randomInt(2, 12);
        const types = [
            { display: `(${a} + ${b}) × ${c} = ?`, ans: (a + b) * c },
            { display: `${a} × (${b} + ${c}) = ?`, ans: a * (b + c) },
            { display: `(${a} - ${b}) × ${c} = ?`, ans: (a - b) * c, min: 1 },
            { display: `${a} × (${b} - ${c}) = ?`, ans: a * (b - c), min: 1 },
            { display: `(${a} × ${b}) + ${c} = ?`, ans: a * b + c },
            { display: `(${a} × ${b}) - ${c} = ?`, ans: a * b - c, min: 1 },
            { display: `(${a} + ${b}) ÷ ${c} = ?`, ans: (a + b) / c, check: 'integer' },
        ];
        const selected = pick(types);
        if (selected.min && selected.ans < 0) continue;
        if (selected.check === 'integer' && selected.ans % 1 !== 0) continue;
        if (selected.ans <= 0 || selected.ans > 200) continue;
        qs.push({
            question: selected.display,
            answer: selected.ans,
            options: smGenOpts(selected.ans, 15, 0, 250)
        });
    }

    // 5. 四则混合运算 (多步)
    for (let i = 0; i < 80; i++) {
        const a = randomInt(2, 12);
        const b = randomInt(2, 12);
        const c = randomInt(2, 12);
        const d = randomInt(1, 5);
        const ops = [
            { display: `${a} × ${b} + ${c} × ${d} = ?`, ans: a * b + c * d },
            { display: `${a} × ${b} - ${c} × ${d} = ?`, ans: a * b - c * d, min: 1 },
            { display: `${a} × ${b} + ${c} ÷ ${d} = ?`, ans: a * b + c / d, check: 'integer' },
            { display: `${a} × ${b} - ${c} ÷ ${d} = ?`, ans: a * b - c / d, check: 'integer', min: 1 },
        ];
        const selected = pick(ops);
        if (selected.min && selected.ans < 0) continue;
        if (selected.check === 'integer' && selected.ans % 1 !== 0) continue;
        if (selected.ans <= 0 || selected.ans > 300) continue;
        qs.push({
            question: selected.display,
            answer: selected.ans,
            options: smGenOpts(selected.ans, 20, 0, 350)
        });
    }

    // 6. 分数中间结果 (如 15÷4=?)
    for (let i = 0; i < 40; i++) {
        const a = randomInt(10, 80);
        const b = randomInt(2, 9);
        const ans = a / b;
        if (ans % 1 !== 0 && ans < 50) {
            // 分数结果，选项用小数
            const opts = new Set([ans]);
            for (let j = 0; j < 10; j++) {
                const offset = randomInt(1, 5) / randomInt(2, 5);
                const candidate = ans + (Math.random() > 0.5 ? offset : -offset);
                if (candidate > 0 && candidate < 60) {
                    opts.add(Math.round(candidate * 10) / 10);
                }
            }
            const optArr = shuffle(Array.from(opts)).slice(0, 4);
            while (optArr.length < 4) {
                optArr.push(Math.round((ans + randomInt(1, 5)) * 10) / 10);
            }
            qs.push({
                question: `${a} ÷ ${b} = ?`,
                answer: Math.round(ans * 10) / 10,
                options: shuffle(optArr)
            });
        }
    }

    const unique = smUnique(qs);
    while (unique.length < 500) {
        const a = randomInt(11, 30);
        const b = randomInt(2, 9);
        const ans = a * b;
        const q = `${a} × ${b} = ?`;
        if (!unique.find(x => x.question === q)) {
            unique.push({
                question: q,
                answer: ans,
                options: smGenOpts(ans, 20, 0, 300)
            });
        }
    }
    return shuffle(unique);
}

// ============================================================
// 导出
// ============================================================
const SPEEDMATH_QUESTIONS = {
    easy: generateEasySpeedMath(),
    medium: generateMediumSpeedMath(),
    hard: generateHardSpeedMath()
};

console.log('✅ 速算题库(增强版)加载完成:');
console.log('  简单:', SPEEDMATH_QUESTIONS.easy.length, '题');
console.log('  中等:', SPEEDMATH_QUESTIONS.medium.length, '题');
console.log('  困难:', SPEEDMATH_QUESTIONS.hard.length, '题');