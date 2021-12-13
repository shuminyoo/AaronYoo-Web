let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript", 
];

secretMessage.pop(); //Removed the last string "JavaScript";

console.log(secretMessage.length); //Logs 23

const endNewWords = secretMessage.push("to", "Program"); //Added "to" and "Program" to the end of the Array

if(secretMessage.indexOf("easily") != -1) {
  secretMessage [secretMessage.indexOf("easily")] = "right" //Changed "easily" to "right"
} else {
  console.log("Uh oh")
}

const goodbyeFirst = secretMessage.shift(); //Deleted the first string

const startNewWords = secretMessage.unshift("Programming", "or", "Coding"); //Added these three strings

const orignalWords = secretMessage.slice((secretMessage.length - 5), 25); //Sliced only "Chris", "Pine", and "Learn"

const specialWord = orignalWords[2].length; //Length of "learn" which is 5

if (specialWord > 2) {
  secretMessage [secretMessage.length - 1] = "UPDATED"; //When Specialword is large than 2 it upadates the string
} else {
  secretMessage.pop(); //When its not, it deletes the last string
}

console.log(secretMessage)