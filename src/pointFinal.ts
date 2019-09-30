export class PointFinal {
    constructor(private x?: number, public y?: number) {
    }

    draw() {
        console.log('x: ' + this.x + ', y: ' + this.y)
    }
}
