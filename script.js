let randomText = document.getElementById("random__text");

let genText = document.getElementById("gen__text")

let randArr = ['go', 'know', 'were', 'than', 'time', 'person', 'year', 'way', 'day', 'thing', 'man', 'world', 'life', 'hand', 'part', 'child', 'eye', 'woman', 'place', 'work', 'week', 'case', 'point', 'government', 'company', 'number', 'group', 'problem', 'fact', 'Verbs', 'be', 'have', 'do', 'say', 'get', 'make', 'go', 'know', 'take', 'see', 'come', 'think', 'look', 'want', 'give', 'use', 'find', 'tell', 'ask', 'work', 'seem', 'feel', 'try', 'leave', 'call', 'Adjectives', 'good', 'new ', 'first', 'last', 'long', 'great', 'little', 'own', 'other', 'old', 'right', 'big', 'high', 'different', 'small', 'large', 'next', 'early', 'young', 'important', 'few'];

let randNum = 0;
let spanElement;
let inputField = document.getElementById('text__ip2')

for (let i = 0; i < randArr.length; i++) {
    randNum = Math.floor(Math.random() * randArr.length);
    // newRandArr.push(randArr[randNum])
    spanElement = document.createElement("span");
    spanElement.className = "word"
    spanElement.innerText = randArr[randNum]
    genText.appendChild(spanElement)
}

let curSpan = document.querySelector('span')
curSpan.className = "word-active"
let curWord = curSpan.innerHTML;
let correctWordCount = 0, wrongWordCount = 0, curIndex = 0;

function userInputChanged(event) {
    let curKey = event.key
    let typedWord;
    if (curKey === " ") {
        typedWord = event.target.value.trim();
        checkInput(typedWord);
        event.target.value = ''
        curIndex++;
        findCurWord(curIndex)
    }
}

function checkInput(inputWord) {
    if (inputWord === curWord) {
        curSpan.className = "word-correct";
        correctWordCount++;
    } else {
        curSpan.className = "word-wrong";
        wrongWordCount++;
    }
}

function findCurWord(Index) {
    let totalSpans = document.querySelectorAll('span');
    if (totalSpans.length !== curIndex) {
        curSpan = totalSpans[Index];
        curSpan.className = "word-active";
        curWord = curSpan.innerHTML;
        return curWord;
    } else {
        printResults()
    }
}

function printResults() {
    let results = document.getElementById("results");
    let para = document.createElement("p");
    para.innerText = `Correct Words : ${correctWordCount} Wrong Words : ${wrongWordCount}`;
    results.appendChild(para)
    inputField.disabled = true;
}


