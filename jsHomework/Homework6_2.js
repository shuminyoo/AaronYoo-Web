//Loops, contd. Nested Loops.

let bobFollowers = ["Joe", "Marta", "Sam", "Erin"];
let tinaFollowers = ["Sam", "Marta", "Elle"];
let mutualFollowers = [];

for (let i = 0; i < bobFollowers.length; i++) {
    for(let j = 0; j < tinaFollowers.length; j++) {
        if (bobFollowers[i] === tinaFollowers[j]) { //(i === j) is wrong becasue this is the exact index. Here we're trying to search the specic index. 
            mutualFollowers.push(bobFollowers[i]);
            console.log(mutualFollowers)
        };
    };
};

// While Loop.
// A for loop that printes 1, 2, 3

for (let k = 1; k < 4; k ++) {
    console.log(k);
}

//A while loop that prints 1, 2, 3

let f = 1;
while (f < 4) {
    console.log(f); f ++
}

const cards = ["diamond", "spade", "heart", "club"];
let currentCard;
let i = 0;
while (currentCard !== "spade" && i < cards.length) {
    currentCard = cards[i];
    console.log(currentCard);
    i++
}

//The Break Keyword, breaks the loop

for (let i = 0; i < 99; i ++) {
    if (i > 2) {
        break;
    }
    console.log("Banana.");
};
console.log ("Broke out of Banana Loop.")

const characters = ["a", "b", "c", "d", "e", "f", "g"]
for (let i = 0; i < characters.length; i ++) {
    if(characters[i] === "a"
    || characters[i] === "e"
    || characters[i] === "i"
    || characters[i] === "o"
    || characters[i] === "u" ) {
        break;
    }
    console.log(characters[i])
}
console.log("Broke out")

