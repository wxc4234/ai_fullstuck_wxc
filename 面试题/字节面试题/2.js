let n = 90155615131546133
let m = 15456121352323

function sum(n, m) {

  let a = n.toString();
  let b = m.toString();

  const len = Math.max(a.length, b.length);
  a = a.padStart(len, '0');
  b = b.padStart(len, '0');

  let result = '';
  let carry = 0;
  for (let i = len - 1; i >= 0; i--){
    // a[i] b[i]
    const sum = +a[i] + +b[i] + carry; // Number(a[i]) + Number(b[i]) + carry
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }

  if (carry) {
    result = '1' + result;
  }

  return BigInt(result);
}

console.log(sum(n, m));
