"use strict";
console.log('hello world');
console.log('just testing ' + "checking");
var found = true;
var grade = 92.0;
var firstname = "aup";
var lastname = "23";
console.log("Hi ".concat(firstname, " ").concat(lastname));
for (var i = 0; i < 5; i++) {
    console.log("test ".concat(i));
}
var reviews = [4, 423, 43, 23];
for (var i = 0; i < reviews.length; i++) {
    console.log("guest ".concat(i));
}
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var i = reviews_1[_i];
    console.log("tre ".concat(i));
}
var sports = ["golf", "cricket", "tennis"];
sports.push("footbal");
for (var _a = 0, sports_1 = sports; _a < sports_1.length; _a++) {
    var sp = sports_1[_a];
    if (sp == 'cricket') {
        console.log("watch match ".concat(sp));
    }
    else {
        console.log("other sport : ".concat(sp));
    }
}
