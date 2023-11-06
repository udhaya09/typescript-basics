"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(10, 15, 25);
console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(1, 2, 3, 4);
console.log(myRectangle.getInfo());
var shapes = [];
shapes.push(myCircle);
shapes.push(myRectangle);
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var x = shapes_1[_i];
    console.log("for loop printing: ", x.getInfo());
}
for (var _a = 0, shapes_2 = shapes; _a < shapes_2.length; _a++) {
    var x = shapes_2[_a];
    console.log("printing area: ", x.calculateAreas());
}
