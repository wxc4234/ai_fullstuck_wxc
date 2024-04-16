let arr1 = [1, 2, 4, 7];
let arr2 = [3, 6, 9];

const merge = (A, B) => {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < A.length && j < B.length) {
        if (A[i] < B[j]) {
            result.push(A[i]);
            i++;
        } else {
            result.push(B[j]);
            j++;
        }
    }
    while (i < A.length) {
        result.push(A[i]);
        i++;
    }
    while (j < B.length) {
        result.push(B[j]);
        j++;
    }
    return result;
}

console.log(merge(arr1, arr2)); // [1, 2, 3, 4, 6, 7, 9]