var number = prompt("Enter the number", "");
document.write(number + " is even: " + isEven(number));

function isEven(number) {
    if (number == 0) {
        return true;
    }
    else if (number == 1) {
        return false;
    }
    else {
        return isEven(number - 2);
    }
}