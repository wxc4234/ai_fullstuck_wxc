let num = 330 // [2,5] 330

const findZY = (num) => {
    let numArr = []
    let i = 2
    while (i <= num) {
        if (num % i === 0) {
            numArr.push(i)
            num = num / i
        } else {
            i++
        }
    }
    return numArr
}

console.log(findZY(num))