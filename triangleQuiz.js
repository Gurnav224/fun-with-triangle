const quizForm = document.querySelector('.quiz-container');
const checkScoreBtn = document.querySelector('#check-score');
const outputEl = document.querySelector('#output');




const correctAnswers = ["90°","right angled"];


function calculateScore(){
    
    let score =0;
    let index = 0;

    const formData = new FormData(quizForm);

    for(let value of formData.values()){

        if(value === correctAnswers[index]){
            score = score+1;
        }
        index = index+1;

        outputEl.innerText = `Your final score is ${score}`
    }
}

checkScoreBtn.addEventListener('click',calculateScore)