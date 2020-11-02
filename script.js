let randomText = document.getElementById("random__text");

let genText = document.getElementById("gen__text")

let randArr = ['go', 'know', 'were', 'than', 'time', 'person', 'year', 'way', 'day', 'thing', 'man', 'world', 'life', 'hand', 'part', 'child', 'eye', 'woman', 'place', 'work', 'week', 'case', 'point', 'government', 'company', 'number', 'group', 'problem', 'fact', 'Verbs', 'be', 'have', 'do', 'say', 'get', 'make', 'go', 'know', 'take', 'see', 'come', 'think', 'look', 'want', 'give', 'use', 'find', 'tell', 'ask', 'work', 'seem', 'feel', 'try', 'leave', 'call', 'Adjectives', 'good', 'new ', 'first', 'last', 'long', 'great', 'little', 'own', 'other', 'old', 'right', 'big', 'high', 'different', 'small', 'large', 'next', 'early', 'young', 'important', 'few'];

let randNum = 0;
let newRandArr = [];
let spanElement;

for (let i = 0; i < randArr.length; i++) {
    randNum = Math.floor(Math.random() * randArr.length);
    // newRandArr.push(randArr[randNum])
    spanElement = document.createElement("span");
    spanElement.className = "word"
    spanElement.innerText = randArr[randNum]
    genText.appendChild(spanElement)
}



function userInputChanged(event) {

    // console.log(event.data)
    // console.log(event.target)
    // console.log(event)

    let keyPressed = event.data;
    let typedWord;

    if (keyPressed === " ") {
        typedWord = event.target.value.trim();
        let curWord = newRandArr[0];


    }

}