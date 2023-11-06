import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let mycricketco = new CricketCoach();
let mygolfco = new GolfCoach();


let coaches: Coach[]  = [];


coaches.push(mycricketco);
coaches.push(mygolfco);


for(let a of coaches){
    console.log(a.getDailyWorkout());
}