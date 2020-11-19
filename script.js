let randArr = ['go', 'know', 'were', 'than', 'time', 'person', 'year', 'way', 'day', 'thing', 'man', 'world', 'life', 'hand', 'part', 'child', 'eye', 'woman', 'place', 'work', 'week', 'case', 'point', 'government', 'company', 'number', 'group', 'problem', 'fact', 'Verbs', 'be', 'have', 'do', 'say', 'get', 'make', 'go', 'know', 'take', 'see', 'come', 'think', 'look', 'want', 'give', 'use', 'find', 'tell', 'ask', 'work', 'seem', 'feel', 'try', 'leave', 'call', 'Adjectives', 'good', 'new ', 'first', 'last', 'long', 'great', 'little', 'own', 'other', 'old', 'right', 'big', 'high', 'different', 'small', 'large', 'next', 'early', 'young', 'important', 'few'];

//Global Variables
let randomText = document.getElementById("random__text");
let genText = document.getElementById("gen__text")
let randNum = 0;
let spanElement, paraTag, curSpan, nextSpan, curWord, totalSpans, curTopPos, prevSpan, prevTopPos;
let correctWordCount, wrongWordCount, curIndex;
let inputField = document.getElementById('text__ip2');
let counter = document.getElementById("counter__timer");
let results = document.getElementById("results");
let completedSpans = [];
let keyStrokes = 0, keyPressed, typedWord;

//Loading all the required stuff for the Test
generateText();
initialiseTest();
initialiseTimer();

//Generating the text for the test from the random word Array
function generateText() {
    paraTag = document.createElement("p");
    paraTag.id = "para__spans"
    genText.appendChild(paraTag)
    for (let i = 0, j = randArr.length; i < 15 * j; i++) {
        randNum = Math.floor(Math.random() * randArr.length);
        // newRandArr.push(randArr[randNum])
        spanElement = document.createElement("span");
        spanElement.className = "word"
        spanElement.innerText = randArr[randNum]
        paraTag.appendChild(spanElement)
    }
}

//Initialising all the values when the test loads
function initialiseTest() {
    curSpan = document.querySelector('span')
    curSpan.className = "word-active"
    curWord = curSpan.innerHTML;
    correctWordCount = 0; wrongWordCount = 0; curIndex = 0;
    //Pointers to keep track of word positions to detect end of line.
    prevSpan = curSpan;
    curTopPos = curSpan.offsetTop;
    prevTopPos = prevSpan.offsetTop;
}

//Checks for userinput and takes the whole word when space is hit
function userInputChanged(event) {
    keyPressed = event.key

    if (keyPressed !== "Backspace" && keyPressed !== "Shift") {
        console.log("hi")
        keyStrokes++
    }


    if (keyPressed === " ") {
        //trimming the target word as the space is included at the end of input
        typedWord = event.target.value.trim();

        //checks and marks the typed word right or wrong
        checkInput(typedWord);

        //clear the input field
        event.target.value = '';

        //Adding cheked and marked spans into completedSpans array to remove when EOL is detected.
        completedSpans.push(curSpan);

        //Incrementing Index and finding the current highlighted word.
        curIndex++;
        findCurWord(curIndex)

        /* Line Detection Implementation: Finding the current span top position and comparing with prev span top position and removing them from the completed spans array in moveUp function.*/
        if (curTopPos > prevTopPos) {
            moveUp()
        }

        //keeping track of prevSpans
        prevSpan = curSpan;
        prevTopPos = prevSpan.offsetTop;
    }
}

//Checking the inputword and marking right or wrong
function checkInput(inputWord) {
    if (inputWord === curWord) {
        curSpan.className = "word-correct";
        correctWordCount++;
    } else {
        curSpan.className = "word-wrong";
        wrongWordCount++;
    }
}

//Caching all the spans inside paragraph Tag
totalSpans = document.querySelectorAll('span');

//Finding the Current word and Highlighting
function findCurWord(Index) {
    if (totalSpans.length !== curIndex) {
        curSpan = totalSpans[Index];
        curSpan.className = "word-active";
        curTopPos = curSpan.offsetTop;
        curWord = curSpan.innerHTML;
        return curWord;
    }
}

//Moving up when end of line is detected.
function moveUp() {
    completedSpans.forEach((span) => paraTag.removeChild(span))
    completedSpans = [];
}

//printing the results when the timer ends
function printResults() {
    let spans = document.createElement("span");
    let wpm = calculateWPM()
    para.innerText = `Correct Words : ${correctWordCount} Wrong Words : ${wrongWordCount},WPM:${wpm}`;
    results.appendChild(para)
    inputField.value = "";
    inputField.disabled = true;

    console.log(keyStrokes)
}

//Adding an event listener to the input field when the page loads
function initialiseTimer() {
    inputField.addEventListener('keyup', startTimer);
}

//Starting the timer and removing the start timer event 
function startTimer(seconds) {
    inputField.removeEventListener('keyup', startTimer);
    let sec = 10;
    let mins = seconds > 60 ? seconds / 60 : 0;
    let cur_mins;

    function tick() {

        if (seconds > 60) {
            cur_mins = mins - 1;
        }
        sec--;
        // counter.innerHTML = "00 : " + (sec < 10 ? "0" : "") + sec.toString();
        counter.innerHTML = (mins > 1 ? ("0" + cur_mins + ":" + ((sec < 10 ? "0" : "") + sec.toString())) : ((sec < 10 ? "0" : "") + sec.toString()))

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



//TODO: Restarting test functionaly has to be Revisited
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


/*
Calculating Words Per minute.
=> Rules
    -- Shift or Backspace not included.
    -- Spaces should be included

=> Formulae
    -- Gross WPM = (Total KeyStrokes/5)/Time(min)
    -- Error Rate =  (Errors (Wrong Words))/Time(min)
    -- Net WPM = Gross WPM - Error Rate
    -- Accuracy = (Number of Correct KeyStrokes/Total KeyStrokes)

*/

function calculateWPM() {
    let grossWPM = (keyStrokes / 5) / 1;
    let errorRate = wrongWordCount / 1;
    let netWPM = grossWPM - errorRate;
    return Math.round(netWPM);
}




