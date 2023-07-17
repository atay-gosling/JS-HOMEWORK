// const handlecheck = (arr) =>{
//   return arr.filter((el) => el.length > 5)
// }
// console.log(handlecheck(['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun']))

// const handlecheck = (arr) =>{
//     return arr.map((el) => el > 0)
// }
// console.log(handlecheck([1,2,3,4,5,6,0]))

// const handlecheck = (arr) =>{
//     return arr.filter((el) => el % 2 === 0)
// }
// console.log(handlecheck([1,2,3,4,5]))

// const handlecheck = (arr) =>{
//     return arr.map((el) => el < 0)
// }
// console.log(handlecheck([1,2,3,4,5]))

// const handlecheck = (arr) =>{
//     let count = 0
//     arr.filter((el) => el < 0 ? count++ : el)
//     return count
// }
// console.log(handlecheck([-2,-3,-4,-5,-6,-3,3]))

// const handlecheck = (first, second) =>{
//     return [...first, ...second]
// }
//
// console.log(handlecheck([1,2,3,4], ['a','b','c','d']))

// const handlecheck = (first, second) =>{
//     return [...first, second,]
// }
//
// console.log(handlecheck([1,2,3,4], 'hello world'))

// const handlecheck = (first, second) =>{
//     const filtersecond = second.split('').filter(el => el !== ' ')
//     return [...first, ...filtersecond]
// }
//
// console.log(handlecheck([1,2,3,4], 'hello world'))

const handlecheck = (first, second) =>{
    const filtersecond = second.split('').filter(el => el !== ' ')
    return [...first, ...filtersecond, ...first]
}

console.log(handlecheck([1,2,3,4], 'hello world'))