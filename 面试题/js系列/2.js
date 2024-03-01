// let str = 'abcdefgH'
// // let str2 = str.concat('de')

// // let str2 = str.substring(3, 5)



// console.log(str.endsWith('ab'));

// let name = "沐渃清澄";
// let greeting = `Hello, my name is ${name}.`;
// console.log(greeting); // 输出: "Hello, my name is 沐渃清澄."

// let str = 'abcdefgH'
// let str2 = str.slice(4);
// let str3 = str.slice(2, 5);
// console.log(str2); // 输出: "efgH"
// console.log(str3); // 输出: "cde"

// let str = 'abcdefgH'
// let str2 = str.substr(4);
// let str3 = str.substr(2, 5);
// console.log(str2); // 输出: "efgH"
// console.log(str3); // 输出: "cdefg"

// let str = 'abcdefgH'
// let str2 = str.substring(2,5);
// let str3 = str.substring(5,2);
// console.log(str2); // 输出: "cde"
// console.log(str3); // 输出: "cde"

// let str = 'abcdefgH'
// let str2 = str.replace('abc', '123');
// let str3 = str.replace(/abc/, '123');//正则表达式
// console.log(str2); // 输出: "123defgH"
// console.log(str3); // 输出: "123defgH"

// let str = '   abcdefgH   '
// let str2 = str.trim();
// console.log(str2); // 输出: "abcdefgH"

// let str = '   abcdefgH   '
// let str2 = str.trimLeft();
// let str3 = str.trimRight();
// console.log(str2); // 输出: "abcdefgH   "
// console.log(str3); // 输出: "   abcdefgH"

// let str = 'abcdefgH'
// let str2 = str.padStart(11, '123');
// let str3 = str.padEnd(11, '123');
// console.log(str2); // 输出: "123abcdefgH"
// console.log(str3); // 输出: "abcdefgH123"

// let str = 'abcdefgH'
// let str2 = str.toUpperCase();
// let str3 = str2.toLowerCase();
// console.log(str2); // 输出: "ABCDEFGH"
// console.log(str3); // 输出: "abcdefgh"

// let str = 'abcdefgH'
// let str2 = str.indexOf('c');
// let str3 = str.indexOf('c', 4);
// console.log(str2); // 输出: "2"
// console.log(str3); // 输出: "-1"

// let str = 'abcdefgH'
// let str2 = str.includes('c');
// let str3 = str.includes('c', 4);
// console.log(str2); // 输出: "true"
// console.log(str3); // 输出: "false"

// let str = 'abcdefgHa'
// let str2 = str.lastIndexOf('a');
// let str3 = str.lastIndexOf('a', 1);
// console.log(str2); // 输出: "8"
// console.log(str3); // 输出: "0"


// let str = 'abcdefgH'
// let str2 = str.endsWith('gH');
// let str3 = str.endsWith('gH', 3);
// console.log(str2); // 输出: "true"
// console.log(str3); // 输出: "false"

// let str = 'abcdefgH'
// let str2 = str.startsWith('abc');
// let str3 = str.startsWith('abc', 4);
// console.log(str2); // 输出: "true"
// console.log(str3); // 输出: "false"

let str = 'abcdefgH'
let str2 = str.split('c');
let str3 = str.split('c', 1);
console.log(str2); // 输出: "["ab", "defgH"]"
console.log(str3); // 输出: "["ab"]"