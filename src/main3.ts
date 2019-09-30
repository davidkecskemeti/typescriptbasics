let drawPoint = (x, y, a, b, c, d, e) => {

}

let drawPoint2 = (point) => {

}

drawPoint2({
    x: 1,
    y: 2
})

drawPoint2({
    name: 'David'
})

let drawPoint3 = (point: number) => {

}

let drawPoint4 = (point: { x: number, y: number }) => {

}

//Interface solution
interface Point {
    x: number,
    y: number
}

let drawPoint5 = (point: Point) => {

}

let getDistance = (pointA: Point, pointB: Point) => {

}

interface Point2 {
    x: number,
    y: number,
    draw: () => void
}


//Introduce Classes

class Point3 {
    x: number;
    y: number;

    draw() {
        console.log('x: ' + this.x + ', y: ' + this.y)
    }

    getDistance(another: Point3) {
        //...
    }
}

let point = new Point3();
point.x = 1;
point.y = 2;
point.draw();


class Point4 {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('x: ' + this.x + ', y: ' + this.y)
    }

    getDistance(another: Point4) {
        //...
    }
}

let point4 = new Point4(1, 2);
point4 = new Point4();
// point4.x = 1;
// point4.y = 2;
point4.draw();

class Point5 {
    constructor(private x?: number, public y?: number) {
        this.x = x;
        this.y = y;
    }
}

class Point6 {
    constructor(private x?: number, public y?: number) {
        this.x = x;
        this.y = y;
    }

    get Q() {
        return this.x;
    }

    set Q(value) {
        if (value < 0) throw new Error("value cannot be less than 0.")
        this.x = value;
    }

    getX() {
        return this.x;
    }

    setX(value) {
        if (value < 0) throw new Error("value cannot be less than 0.")
        this.x = value;
    }
}

let point6 = new Point6()
let x = point6.Q;
point6.Q = 10;

import {PointFinal} from "./pointFinal";

let pointFinal = new PointFinal(1, 2);
pointFinal.draw();
