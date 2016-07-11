var boardSize = Number(prompt("Enter the size of board", ""));
for (var i = 0; i < boardSize * boardSize; i++) {
    if ((i % (boardSize + 1)) == 0) {
        document.write("<br>");
        continue;
    }
    else if (i % 2 == 0) {
        document.write("_");
        continue;
    }
    else {
        document.write("#");
    }
}