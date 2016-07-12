var line = prompt("Enter the line");
var char = prompt("Enter the character");
document.write("Count of " + char + " in " + line + " : " + countChar(line, char));

function countChar(line, char) {
    var count = 0;
    for (var i = 0; i < line.length; i++) {
        if (line.charAt(i) == char) {
            count++;
        }
    }
    return count;
}