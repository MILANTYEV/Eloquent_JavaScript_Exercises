var arr = [1, 2, 3, 4];
document.write(arrToList(arr) + "<br>");
document.write(listToarr(arrToList(arr)));

function prepend(value, list) {
    return { value: value, rest: list };
}

function nth(list, n) {
    if (n == 0)
        return list.value;
    else
        return nth(list.rest, n - 1);
}

function arrToList(arr) {
    var list = null;
    for (var i = arr.length - 1; i >= 0; i--)
        list = { value: arr[i], rest: list };
    return list;
}

function listToarr(list) {
    var arr = [];
    for (var item = list; item; item = item.rest)
        arr.push(item.value);
    return arr;
}

