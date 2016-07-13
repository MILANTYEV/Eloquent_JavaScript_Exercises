var array = [[1, 2, 3], [4, 5], [6]];

document.write(array.reduce(function (arr, current) {
    return arr.concat(current);
}));
