"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var mycricketco = new CricketCoach_1.CricketCoach();
var mygolfco = new GolfCoach_1.GolfCoach();
var coaches = [];
coaches.push(mycricketco);
coaches.push(mygolfco);
for (var _i = 0, coaches_1 = coaches; _i < coaches_1.length; _i++) {
    var a = coaches_1[_i];
    console.log(a.getDailyWorkout());
}
