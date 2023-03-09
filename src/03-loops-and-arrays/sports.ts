let sportsOne: string[] = ["Baseball", "Football"];

/*
for (let i = 0; i < sportsOne.length; i++){
    console.log(sportsOne[i]);
}
*/


// simplified
for (let temp of sportsOne){  // can't forget the 'let'
    if (temp == "Football"){
        console.log("This is my favorite sport  " + temp);
    } else {
        console.log(temp);
    }
}

export{};

