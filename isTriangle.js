const angle = document.querySelectorAll('.angle-input');
const checkIsTriangle = document.querySelector('#check-triangle-btn');
const outputEl = document.querySelector('#output');



function calculateSumOfAngles(a,b,c){

    const sumOfAngles = a+b+c;

    return sumOfAngles;
}


function isTriangle(){

  const sumOfAngles =  calculateSumOfAngles(Number(angle[0].value) , Number(angle[1].value) , Number(angle[2].value));

  if (sumOfAngles === 180) {
    outputEl.innerText = `your angle made a triangle`

  }
  else{
    outputEl.innerText = `Opp's your angle are not made a triangle`
  }
 

}

checkIsTriangle.addEventListener('click',isTriangle)