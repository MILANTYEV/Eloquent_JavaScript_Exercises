var amount = Number(prompt("Enter the amount of numbers", ""));
for (var i = 1; i <= amount; i++) {
    if ((i % 3 == 0) & (i % 5 == 0)) {
        document.write("FizzBuzz");
    }
    else if (i % 3 == 0) {
        document.write("Fizz");
    }
    else if (i % 5 == 0) {
        document.write("Buzz");
    }
    else {
        document.write(i);
    }
    document.write(" ");
}