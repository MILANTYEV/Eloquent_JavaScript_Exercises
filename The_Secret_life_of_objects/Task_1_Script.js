function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function (vect) {
    return new Vector((this.x + vect.x), (this.y + vect.y));
}
Vector.prototype.minus = function (vect) {
    return new Vector((this.x - vect.x), (this.y - vect.y));
}
Object.defineProperty(Vector.prototype, "length", {
    get: function () { return Math.sqrt(this.x * this.x + this.y * this.y); }
});

var vector = new Vector(2, 2);
var vector2 = new Vector(1, 1);
document.write(vector.plus(vector2).length + "<br>");
document.write(vector.minus(vector2).length + "<br>");
