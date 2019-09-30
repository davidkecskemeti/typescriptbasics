var drawPoint = function (x, y, a, b, c, d, e) {
};
var drawPoint2 = function (point) {
};
drawPoint2({
    x: 1,
    y: 2
});
drawPoint2({
    name: 'David'
});
var drawPoint3 = function (point) {
};
var drawPoint4 = function (point) {
};
var drawPoint5 = function (point) {
};
var getDistance = function (pointA, pointB) {
};
//Introduce Classes
var Point3 = /** @class */ (function () {
    function Point3() {
    }
    Point3.prototype.draw = function () {
        console.log('x: ' + this.x + ', y: ' + this.y);
    };
    Point3.prototype.getDistance = function (another) {
        //...
    };
    return Point3;
}());
var point = new Point3();
point.x = 1;
point.y = 2;
point.draw();
//# sourceMappingURL=main3.js.map