let found: boolean = true;   // var name, type, value syntax
let grade: number = 88.6;
let firstName: string = "Eddie";
let lastName: string = 'Vedder';

console.log(found);
console.log("The grade is  " + grade);
console.log("Hi " + firstName + " " + lastName);

console.log(`Hi ${firstName} ${lastName}`);  // template strings using back ticks

// arrays and loops
let reviews: number[] = [5, 5, 4.5, 1, 3];

for (let i=0; i < reviews.length; i++) {
    console.log(reviews[i]);
}

// math stuff
let total: number = 0;

for (let i=0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];   // same as total = total + reviews[i]
}

let average: number = total / reviews.length;

console.log("Review average = " + average);

// arrays
let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let i = 0; i < sportsOne.length; i++){
    console.log(sportsOne[i]);
}

// simplify the for loop above
for (let tempSport of sportsOne) {
    console.log(tempSport);   // the actual, current array element .. not the index
}

// conditional
for (let tempSport of sportsOne) {
    if( tempSport == "Cricket") {    // watch this equals .. made mistake of using just one and result is wrong
        console.log(tempSport + " << My Favorite!");
    } else {
        console.log(tempSport);  
    }
}

// growing arrays with push
let sportsTwo: string[] = ["Golf", "Cricket"];

sportsTwo.push("Moto GP");
sportsTwo.push("Football");

for (let tempSport of sportsTwo){
   console.log(tempSport);
}



