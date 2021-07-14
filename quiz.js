const quizData = [
    {
        question: 'How old is Aditya?',
        a: '10',
        b: '20',
        c: '24',
        d: '30',
        correct: 'c'

    },
    {
        question:
            'What is the most used programming language in 2019',
        a: 'java',
        b: 'python',
        c: 'c',
        d: 'javascript',
        correct: 'd'
    },
    {
        question: 'Who is the prime minister of India',
        a: 'Narendra Modi',
        b: 'Aditya',
        c: 'Chandan',
        d: "Amarjit",
        correct: 'a'
    }

];
const answers = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('questionID');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');
// console.log(questionEl)
let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    getDeSelected();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    // const aaa=currentQuizData.question;
    // console.log(aaa);

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}
function getSelected() {
    // const answers=document.querySelectorAll('.answer');
    let answer = undefined;
    answers.forEach(answers => {
        if (answers.checked) {
            answer = answers.id;
        }

        //  console.log(answer.checked);
    });
    return answer;

}
function getDeSelected() {
    answers.forEach(answers => {
        answers.checked = false;
    });
}
submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    if(!answer){
        alert("select a option");
    }

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> You answer correctly at ${score}/${quizData.length} 
    question</h2> <button onClick="location.reload()">reload</button>`;
            // alert ('You finished the Quiz.');
        }
    }

});
