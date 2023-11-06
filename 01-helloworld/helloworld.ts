console.log('hello world');
console.log('just testing ' + "checking");

let found: boolean = true;

let grade: number = 92.0;

let firstname: string = "aup";
let lastname: string = "23";

console.log(`Hi ${firstname} ${lastname}`);


for(let i=0; i<5; i++){
    console.log(`test ${i}`);
}

let reviews: number[] = [4,423,43,23];

for(let i=0; i<reviews.length; i++){
    console.log(`guest ${i}`);
}

for(let i of reviews){
    console.log(`tre ${i}`);
}


let sports: string[] = ["golf", "cricket", "tennis"];


sports.push("footbal");

for(let sp of sports){
    if(sp == 'cricket'){
        console.log(`watch match ${sp}`)
    }else{
        console.log(`other sport : ${sp}`)
    }
}