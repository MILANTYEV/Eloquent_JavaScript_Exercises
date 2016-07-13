var arr = [1, 2, 3, NaN];
document.write(every(arr, isNaN) + "<br>");
document.write(some(arr, isNaN) + "<br>");

function every(arr, func) {
    for (var i = 0; i <= arr.length; i++) {
        if (!func(arr[i])) {
            return false;
        }
    }
    return true;
}

function some(arr, func) {
    for (var i = 0; i <= arr.length; i++) {
        if (func(arr[i])) {
            return true
        }
    }
    return false;
}