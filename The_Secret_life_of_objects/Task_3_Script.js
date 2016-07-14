function Sequence(arr) {
    this.arr = arr;
}
Sequence.prototype.curent = -1;
Sequence.prototype.next = function () {
    if (this.curent == this.arr.length - 1) {
        document.write("This is last element");
        return;
    }
    this.curent++;
    return this.arr[this.curent];
};

function RangeSeq(from, to) {
    this.arr = [];
    for (var i = from; i < to; i++) {
        this.arr.push(i);
    }
}
RangeSeq.prototype = Object.create(Sequence.prototype);

function writeN(seq, N) {
    for (var i = 1; i <= N; i++) {
        document.write(seq.next() + "<br>")
    }
}

var seq = new Sequence([1, 2, 3, 4, 5, 6]);
writeN(seq, 4);
var rangeSeq = new RangeSeq(1, 6);
writeN(rangeSeq, 4);