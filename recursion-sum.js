// let sum = 0;
// for (let i = 5; i >= 1; i--) {
//     sum += i;
// }
// console.log(sum);

function sum(i) {
    console.log(i);
    if (i == 1) {
        return 1;    // return 0 means false 1 means true
    }
    return i + sum(--i);
}
console.log(sum(5));