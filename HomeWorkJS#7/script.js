// const array  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//
// const handlecheck = (array) => {
//     let sum = 0
//     for (let index  = 0 ; index < array.length; index++ ) {
//         sum += array [index]
//     }
//     return sum;
// }
//
// console.log(handlecheck(array))

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = 0;
//
// for (let i = 0; i < array.length; i++) {
//     result += array[i];
// }
//
// console.log(result);

// const array = [1, 2, 5, 9, 13, 10];
// let found = false;
//
const arr = [1, 2, 5, 9, 4, 13, 4, 10];
let found = false;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 4) {
        found = true;
        console.log('Есть!')
    }
}

if (!found) {
    console.log('Элемент со значением 4 не найден.');
}
