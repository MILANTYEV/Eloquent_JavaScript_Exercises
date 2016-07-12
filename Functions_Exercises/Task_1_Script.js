var first = prompt("Enter the first value", "");
var second = prompt("Enter the second value", "");
document.write("Min: " + min(first, second));

function min(first, second) {
    return first > second ? first : second;
}
