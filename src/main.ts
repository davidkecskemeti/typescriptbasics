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
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    // console.log("Finally" + i);
}

doSomethingLet();

let a;
a = 1;
a = true;
a = 'a';

let b: number; // any int or floting points number
let c: boolean;
let d: string;
let e: any;
let f: number[] = [1, 2, 3];
let g: any[] = [1, true, 'a', false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red, Green, Blue};
let backgroundColor = Color.Blue;

let m = "abc";
let replacedM = m.replace("a", '1');

let m2;
m2 = "abc";
let replaceM2 = (<string>m2).replace('a', '1');
let replaceM2b = (m2 as string).replace('a', '1');

