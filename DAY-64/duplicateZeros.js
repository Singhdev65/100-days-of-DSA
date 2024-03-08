function duplicateZeros(arr) {
    let originalLength = arr.length;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            for (let j = arr.length - 1; j > i; j--) {
                arr[j] = arr[j - 1];
            }
            i++;
        }
    }
    arr.length = originalLength;
    return arr;
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0])) //[1,0,0,2,3,0,0,4]
console.log(duplicateZeros([1, 2, 3])) //[1,2,3]
console.log(duplicateZeros([0, 0, 0, 0, 0, 0, 0])) //[0,0,0,0,0,0,0]