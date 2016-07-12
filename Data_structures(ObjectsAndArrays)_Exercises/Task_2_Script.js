var arr = [1, 2, 3, 4];
document.write("reverseArray: " + reverseArray(arr) + "<br>");
reverseArrayInPlace(arr);
document.write("reverseArrayInPlace: " + arr);

function reverseArray(arr) {
    var revArr = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr;
}

function reverseArrayInPlace(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}