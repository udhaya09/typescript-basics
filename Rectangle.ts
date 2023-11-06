import { Shape } from "./Shape";


export class Rectangle extends Shape {
    calculateAreas(): number {
        return this.width * this.length;
    }


    constructor(x: number, y: number, private _width: number, private _length: number) {
        super(x, y);
    }

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    public get length(): number {
        return this._length;
    }
    public set length(value: number) {
        this._length = value;
    }

    getInfo(): string {
        return super.getInfo() + `, width=${this.width}, length=${this.length}`;
    }

}