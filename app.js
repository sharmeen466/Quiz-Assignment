let date = new Date()
let time = date.getMinutes()
let seconds = date.getSeconds()
console.log(time, seconds);


let userName = ""
const name = Swal.fire({
    title: "Hey Buddy!",
    text: "Write your name:",
    input: 'text',
    color: "white",
    showCancelButton: true,
    customClass: {
        popup: 'my-swal'
    }
}).then((result) => {
    if (result.value) {
        console.log("Result: " + result.value);
        userName = result.value
    }
});
const quizQuestion = [{
    question: "HTML stands for?",
    opt1: "Hyper Text Markup Language",
    opt2: "Home Tool Markup Language",
    opt3: "Hyperlinks & Text Markup Language",
    opt4: "Hyper Text Marking Law",
    correct: "Hyper Text Markup Language"
},
{
    question: "CSS stands for?",
    opt1: "Creative Style Sheets",
    opt2: "Cascading Style Sheets",
    opt3: "Colorful Style Sheets",
    opt4: "Computer Style Sheets",
    correct: "Cascading Style Sheets"
},
{
    question: "Choose the correct HTML element for the largest language?",
    opt1: "h1",
    opt2: "h6",
    opt3: "head",
    opt4: "heading",
    correct: "h1"
},
{
    question: "How do you write Hello World in an alert box?",
    opt1: "msg(Hello World)",
    opt2: "msgBox(Hello World)",
    opt3: "alertBox(Hello World)",
    opt4: "alert(Hello World)",
    correct: "alert(Hello World)"
},
{
    question: "Which character is used to indicate an end tag?",
    opt1: "$",
    opt2: "/",
    opt3: "_",
    opt4: "^",
    correct: "/",
},
{
    question: "How to write an IF statement in JavaScript?",
    opt1: "if i == 5",
    opt2: "if i = 5",
    opt3: "if (i == 5)",
    opt4: "if i === 5",
    correct: "if (i == 5)"
},
{
    question: "How do you call a function named myFunction?",
    opt1: "call myFunction",
    opt2: "myFunction",
    opt3: "myFunction()",
    opt4: "call myFunction()",
    correct: "myFunction()"
},
{
    question: "How can you add a comment in a JavaScript?",
    opt1: "//This is a comment",
    opt2: "/*This is a comment*/",
    opt3: "<--This is a comment-->",
    opt4: "`This is a comment`",
    correct: "//This is a comment"
},
{
    question: "How can you add a comment in a CSS?",
    opt1: "<--This is a comment-->",
    opt2: "//This is a comment",
    opt3: "/*This is a comment*/",
    opt4: "`This is a comment`",
    correct: "/*This is a comment*/"
},
{
    question: "How can you add a comment in a HTML?",
    opt1: "<--This is a comment-->",
    opt2: "/*This is a comment*/",
    opt3: "`This is a comment`",
    opt4: "//This is a comment",
    correct: "<--This is a comment-->"
},
];
const quizContainer = document.getElementById("quiz")
const btn = document.getElementById("btn")
const previousBtn = document.getElementById("previousBtn")
let index = 0;
let score = 0;

function showQuestions() {
    if (quizQuestion.length - 1 == index) {
        btn.innerHTML = "Submit"
    }
    if (quizQuestion.length == index) {
        quizContainer.innerHTML = `<h1> CONGRATULATIONS <br />${userName} 🎉</h1> <br /> Quiz Completed 🎗️ <br /> Your Score: <br /> ${score} /  ${quizQuestion.length}`

        Swal.fire({
            background: "transparent",
            showConfirmButton: false,
            timer: 2000,
            backdrop: `
              rgba(0,0,123,0.4)
              url("./assets/congratulations.gif")
              center
              no-repeat
            `
        });
        btn.style.display = "none"
        previousBtn.style.display = "none"
    } else {
        btn.disabled = true
        quizContainer.innerHTML = `<div>
            <h1>Question # ${index + 1}</h1>
            <h3>${quizQuestion[index].question}</h3>
            <label>
                <input type="radio" name="option" value="${quizQuestion[index].opt1}">
                ${quizQuestion[index].opt1}
            </label>
            <br>
            <label>
                <input type="radio" name="option" value="${quizQuestion[index].opt2}">
                ${quizQuestion[index].opt2}
            </label>
            <br>
            <label>
                <input type="radio" name="option" value="${quizQuestion[index].opt3}">
                ${quizQuestion[index].opt3}
            </label>
            <br>
            <label>
                <input type="radio" name="option" value="${quizQuestion[index].opt4}">
                ${quizQuestion[index].opt4}
            </label>
        </div>`
        let options = document.getElementsByName("option");
        for (let i = 0; i < options.length; i++) {
            options[i].addEventListener("click", function () {
                btn.disabled = false
                if (options[i].checked) {
                    let correctAns = quizQuestion[index].correct
                    let currentAns = options[i].value
                    console.log("Correct : " + correctAns);
                    console.log("user:" + currentAns);
                    if (currentAns == correctAns) {
                        score++
                    }
                }
            })
        }
    }
}
showQuestions()
btn.addEventListener("click", function () {
    index++
    showQuestions()
    previousBtn.disabled = false
})
previousBtn.addEventListener("click", function () {
    index--
    showQuestions()
})