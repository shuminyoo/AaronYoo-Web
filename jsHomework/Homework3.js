//Homework

let bigNum = Math.floor(Math.random() * 1000 );

let registerEarly = true;

let RunnerAge = 20;

if (RunnerAge > 18 && registerEarly === true) {
    bigNum += 1000;
} else {
    bigNum = bigNum
}

if (RunnerAge > 18 && registerEarly === true) {
    console.log("Your race time is 9:30 am. Your race number is " + bigNum + "." + " Good Luck! :)")
} else if (RunnerAge > 18 && registerEarly === false) { 
    console.log("Your race time is 11:00am. Your race number is " + bigNum + "." + " Good Luck! :)")
} else if (RunnerAge < 18) {
    console.log("Your race time is 11:00am. Your race number is " + bigNum + "." + " Good Luck! :)")
} else {
    console.log("Please seek more guidance at the registration desk. :)")
}

