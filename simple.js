/* for (let i = 0; i < 6; i++) {
    console.log(i);
} */

function consolNumber(i) {
    if (i > 5) {
        return;
    }
    console.log(i);
    consolNumber(++i); //++i will increment the value of i, and then return the incremented value. i = 1;
    // j = ++i;
    // (i is 2, j is 2)

    // i++ will increment the value of i, but return the original value that i held before being incremented.
    // i = 1;
    // j = i++;
    // (i is 2, j is 1)
}
consolNumber(1);