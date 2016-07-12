var left = Number(prompt("Enter the left bound"));
var right = Number(prompt("Enter the right bound"));
var step = Number(prompt("Enter the step"));
document.write("Sum: " + sum(range(left, right, step)));

function range(leftBound, rightBound, step) {
    if (step === undefined) {
        step = 1;
    }
    var arr = [];
    for (var i = leftBound; i <= rightBound; i+=step) {
        arr.push(i);
    }
    return arr;
}

function sum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}