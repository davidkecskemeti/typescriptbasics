function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
function doSomethingVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally" + i);
}
doSomethingVar();
function doSomethingLet() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log("Finally" + i);
}
doSomethingLet();
var a;
a = 1;
a = true;
a = 'a';
var b; // any int or floting points number
var c;
var d;
var e;
var f = [1, 2, 3];
var g = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
var m = "abc";
var replacedM = m.replace("a", '1');
var m2;
m2 = "abc";
var replaceM2 = m2.replace('a', '1');
var replaceM2b = m2.replace('a', '1');
//# sourceMappingURL=main.js.map