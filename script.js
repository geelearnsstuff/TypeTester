let randomText = document.getElementById("random__text");
let input2 = document.getElementById("text__ip2");

let randArr = ['go', 'know', 'were', 'than', 'time', 'person', 'year', 'way', 'day', 'thing', 'man', 'world', 'life', 'hand', 'part', 'child', 'eye', 'woman', 'place', 'work', 'week', 'case', 'point', 'government', 'company', 'number', 'group', 'problem', 'fact', 'Verbs', 'be', 'have', 'do', 'say', 'get', 'make', 'go', 'know', 'take', 'see', 'come', 'think', 'look', 'want', 'give', 'use', 'find', 'tell', 'ask', 'work', 'seem', 'feel', 'try', 'leave', 'call', 'Adjectives', 'good', 'new ', 'first', 'last', 'long', 'great', 'little', 'own', 'other', 'old', 'right', 'big', 'high', 'different', 'small', 'large', 'next', 'early', 'young', 'important', 'few'];

let randNum = 0;
let newRandArr = []

for (let i = 0; i < randArr.length; i++) {
    randNum = Math.floor(Math.random() * randArr.length);
    newRandArr.push(randArr[randNum])
}

randomText.textContent = newRandArr.join(" ")


function userInputChanged() {

    if (randomText === input2.value) {
        console.log("Its a Match");
    } else {
        console.log("It's not a Match")
    }
}