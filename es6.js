const chunk = (str, size) => {
    const arrs = str.split('');

    return Array.from({length: Math.ceil(arrs.length / size)}, (v, i) => arrs.slice(i * size, i * size + size));
};
const res = chunk('7b2274696d657374616d70223a313534333833313931372c226572726f7244657363223a2270617273652072657175657374206661696c6564222c226572726f72436f6465223a3430327d', 2);
let result = '';
res.map(v => {
    const t = '0x' + v.join(',').replace(',', '');
    result += String.fromCharCode(parseInt(t));
});
console.log(result);
