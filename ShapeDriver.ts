import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";





let myCircle = new Circle(10,15,25);
console.log(myCircle.getInfo());


let myRectangle = new Rectangle(1,2,3,4);
console.log(myRectangle.getInfo());



let shapes: Shape[] = [];

shapes.push(myCircle);
shapes.push(myRectangle);




for(let x of shapes){
    console.log(`for loop printing: `, x.getInfo());
}


for(let x of shapes){
    console.log(`printing area: `, x.calculateAreas());
}





