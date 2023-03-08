const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const outputEl = document.querySelector('#output');


function hypotenuseSide(base,perpenicular){

    let hypotenuse =  base*base+perpenicular* perpenicular;

    return hypotenuse;
}


function calculateHypotenuse(){

   const sumOfSide =   hypotenuseSide(Number(sides[0].value) , Number(sides[1].value));

   const lengthOfHypotenuse = Math.floor(  Math.sqrt(sumOfSide));



   outputEl.innerText = `The length of  Hypotenuse side is ${lengthOfHypotenuse}`;

}



hypotenuseBtn.addEventListener('click',calculateHypotenuse)