//Loops, useful to store user information. Spoopy. repeats until certain conditons are met.

for (let counter =0; counter < 4; counter ++) { //counter starts at 0, counter reaches 4, stops loop. counter ++ is +1
    console.log(counter); //anything in here is a blocked scope. means local
}

for (let counter =3; counter >= 0; counter --) { //stops at 0, because 0 is inclusive
    console.log(counter);
}

for (let i = 5; i < 11; i ++ ) { //loops from 5 to 10. stops at 10
    console.log(i);
}

// for (let i = 100; i >= 0; i--) { //loops from 100 to 0. Stops at 0.
//     console.log(i);
// }

//Looping through Arrays 

const blocks = ["Grass", "Dirt", "Planks", "Cobblestone", "Clay"];
for (let i = 0; i < blocks.length; i++) { //since blocks.lenghth is 4, and i cannot be over 4, it logs every other array
    console.log(blocks[i]);
}

const alphabets = ["a", "b", "c", "d", "e", "f"]; 
for (let i = 0; i < alphabets.length; i++) {
    console.log(alphabets[i]);
}

const num = [1,2,3,4,5,6,7,8,] 
for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) { //logs even numbers, num[i] access every array in the given. like an algorhtim? 
        console.log(num[i]);
    }
}

const numbers = [1, 5, -1, 4, 2, 9, 10];
for (let i = 0; i <numbers.length; i++) {
    if (numbers[i] > 4) {
        console.log(numbers[i])
    }
}

//Nested Loops

const arr = [[1,2,3,], [4,5,6,], [7,8,9]];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j])
    }
}

const list = [[11, 22, 33], [44,55,66], [77,88,99]]; 
for (let i = 0; i < list.length; i++) {
    for(let j = 0; j < list[i].length; j++) {
        if (list[i][j] % 6 === 0) { //when divided by 6 the remainder is 0
            console.log(list[i][j]) //prints the only number that is divisable by 6 
        };
    };
};
