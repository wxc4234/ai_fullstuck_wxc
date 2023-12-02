function request(url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
      resolve(xhr.responseText);
    }
    xhr.send();
  });
}
// request('xxx').then((data) => {
//   console.log(data);
// })
const res = await request('xxx');
console.log(res);

fetch('xxx')
  .then((res) => {
})
  .then((res) => {
  })