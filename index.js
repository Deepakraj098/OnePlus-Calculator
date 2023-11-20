const disp=document.getElementById('display');
const clear=document.getElementById('clr');
const back=document.getElementById('cut');
const mod=document.getElementById('mod');
const div=document.getElementById('div');
const mult=document.getElementById('mul');
const subs=document.getElementById('minus');
const add=document.getElementById('plus');
const dot=document.getElementById('dot');
const equal=document.getElementById('equal');
const buttons=document.querySelectorAll('.num');

let result='';
let operation='';
let previousOperand=0;

// function append
const appendNumber = (number) =>{
    if(number==='.' && result.includes('.')) return;
    result+=number;
    updateDisplay();
}
// for display in text box
const updateDisplay = ()=>{
    if(operation){
    disp.innerText=`${previousOperand} ${operation} ${result}`;
    }
    else
    {
      disp.innerText=result;
    }   
}
// for selecting operator
const selectoperator= (operatorvalue)=>{
    if(result==='') return; 

    if(operation!=='' && previousOperand!==''){
        calculateResult();
    }
    operation=operatorvalue;
    previousOperand=result;
    result='';
    updateDisplay();
}
//function to calculate result
const calculateResult=()=>{
    let evaluateResult;
    const prev=parseFloat(previousOperand);
    const current=parseFloat(result);
    if(isNaN(prev)||isNaN(current)) return;
    evaluateResult=eval(prev + operation + current);
    result=evaluateResult.toString();
    operation='';
    previousOperand='';  

}
//append number as many times
buttons.forEach(button => {
    button.addEventListener('click',() =>{
        appendNumber(button.innerText);
    });
}); 


// clear display
const clearDisplay= ()=>{
    result='';
    operation='';
    previousOperand='';
    updateDisplay();
}
//delete last 
const DeletelastDigit = ()=>{
if(result ==='')return;
result=result.slice(0,-1);
updateDisplay();
}

dot.addEventListener('click',()=>appendNumber('.'));
add.addEventListener('click',()=>selectoperator('+'));
subs.addEventListener('click',()=>selectoperator('-'));
mult.addEventListener('click',()=>selectoperator('*'));
div.addEventListener('click',()=>selectoperator('/'));
mod.addEventListener('click',()=>selectoperator('%'));
equal.addEventListener('click',()=>{
    if(result==='')return;
    calculateResult();
    updateDisplay();
});
clear.addEventListener('click',(clearDisplay));
back.addEventListener('click',(DeletelastDigit));
