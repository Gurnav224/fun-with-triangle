const sides = document.querySelectorAll('.side-input');
const areaBtn = document.querySelector('#calculateAreaBtn');
const outputEl = document.querySelector('#output');


function calulateArea(base,height){

   

    let Area = 1/2*base*height;

    return Area;
}

function validateEmptyValue(a,b){

    if(a === 0 || b ===0){
     
    }

}


function areaOfTriangle(){
    validateEmptyValue( Number(sides[0].value) , Number(sides[1].value ))

 


   const A=  calulateArea(Number(sides[0].value) , Number(sides[1].value));

    outputEl.innerText = `The Area of Triange is ${A}`

}

areaBtn.addEventListener('click',areaOfTriangle)
