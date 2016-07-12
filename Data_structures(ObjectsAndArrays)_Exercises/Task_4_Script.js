var obj1 = {
    value: 0
}
var obj2 = {
    value: 1
}
var obj3 = {
    value: 0
}
document.write(deepEqual(1, 1) + "<br>");
document.write(deepEqual(obj1, obj2) + "<br>");
document.write(deepEqual(obj1, obj3) + "<br>");

function deepEqual(a, b) {
    if (typeof (a) != "object" || typeof (b) != "object") {
        return a === b;
    }
    var properties = [];
    for (var key in a) {
        properties.push(key);
    }
    for (var i = 0; i < properties.length; i++) {
        if (!deepEqual(a[properties[i]], b[properties[i]])) {
            return false;
        }
    }
    return true;
}