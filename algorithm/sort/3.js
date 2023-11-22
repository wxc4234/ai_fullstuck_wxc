const agt = ['里皮', '梅西', '劳塔罗', '圣马丁'];
// 解构 一次性的解构出来
const [captain, ...players] = agt;
console.log(captain, ...players);