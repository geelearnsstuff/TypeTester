let randArr = ['go', 'know', 'were', 'than', 'time', 'person', 'year', 'way', 'day', 'thing', 'man', 'world', 'life', 'hand', 'part', 'child', 'eye', 'woman', 'place', 'work', 'week', 'case', 'point', 'government', 'company', 'number', 'group', 'problem', 'fact', 'Verbs', 'be', 'have', 'do', 'say', 'get', 'make', 'go', 'know', 'take', 'see', 'come', 'think', 'look', 'want', 'give', 'use', 'find', 'tell', 'ask', 'work', 'seem', 'feel', 'try', 'leave', 'call', 'Adjectives', 'good', 'new ', 'first', 'last', 'long', 'great', 'little', 'own', 'other', 'old', 'right', 'big', 'high', 'different', 'small', 'large', 'next', 'early', 'young', 'important', 'few'];

let randomText = document.getElementById("random__text");
let genText = document.getElementById("gen__text")
let randNum = 0;
let spanElement, paraTag, curSpan, curWord;
let correctWordCount, wrongWordCount, curIndex;
let inputField = document.getElementById('text__ip2');
let counter = document.getElementById("counter__timer")

generateText();
initialiseTest();
initialiseTimer();

function generateText() {
    paraTag = document.createElement("p");
    genText.appendChild(paraTag)
    for (let i = 0; i < randArr.length; i++) {
        randNum = Math.floor(Math.random() * randArr.length);
        // newRandArr.push(randArr[randNum])
        spanElement = document.createElement("span");
        spanElement.className = "word"
        spanElement.innerText = randArr[randNum]
        paraTag.appendChild(spanElement)
    }
}

function initialiseTest() {
    curSpan = document.querySelector('span')
    curSpan.className = "word-active"
    curWord = curSpan.innerHTML;
    correctWordCount = 0; wrongWordCount = 0; curIndex = 0;
}


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
    }
}

function printResults() {
    let results = document.getElementById("results");
    let para = document.createElement("p");
    para.innerText = `Correct Words : ${correctWordCount} Wrong Words : ${wrongWordCount}`;
    results.appendChild(para)
    inputField.value = "";
    inputField.disabled = true;
}


function initialiseTimer() {
    inputField.addEventListener('keyup', startTimer)
}


//test timer
function startTimer(seconds) {
    let sec = seconds;
    let mins = sec > 60 ? sec / 60 : 0;
    let cur_mins;

    function tick() {
        if (sec > 60) {
            cur_mins = mins - 1;
        }
        sec--;
        // counter.innerHTML = "00 : " + (sec < 10 ? "0" : "") + sec.toString();
        counter.innerHTML = "00 : " + (sec < 10 ? "0" : "") + sec.toString();

        (mins > 1 ? ("0" + cur_mins + ":") : ("00 : "))

        console.log(sec)

        if (sec > 0) {
            setTimeout(tick, 1000) //evaluate expression for every 1000ms or 1 sec
        } else {

            printResults()
        }
    }

    tick();
}


function startTimer(seconds) {
    inputField.removeEventListener('keyup', startTimer)
    let sec = 60;
    let mins = seconds > 60 ? seconds / 60 : 0;
    let cur_mins;

    function tick() {

        if (seconds > 60) {
            cur_mins = mins - 1;
        }
        sec--;
        // counter.innerHTML = "00 : " + (sec < 10 ? "0" : "") + sec.toString();
        counter.innerHTML = (mins > 1 ? ("0" + cur_mins + ":" + ((sec < 10 ? "0" : "") + sec.toString())) : ((sec < 10 ? "0" : "") + sec.toString()))

        console.log(sec)

        if (sec > 0) {
            setTimeout(tick, 1000) //evaluate expression for every 1000ms or 1 sec
        } else if (mins > 1) {
            startTimer(mins - 1)
        } else {
            printResults()
        }
    }

    tick();
}


let btn_reset = document.getElementById("reset__btn")
// btn_reset.addEventListener('click', function () {
//     inputField.focus();
//     inputField.value = "";
//     genText.removeChild(paraTag);
//     generateText()
//     initialiseTest();
// });
btn_reset.addEventListener('click', function () {

    window.location.reload();

});







