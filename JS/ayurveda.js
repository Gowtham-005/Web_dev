const txt=document.querySelector('.textbox')  ;

const btn=document.querySelector('.button');

let emp_space=document.querySelector('.empty_space');




let cold_txt="Thulasi ,10 ilaigal edutu kondu nanraga potu idituedutu kolavum, piragu adil siru milagu serthu adayum nanraga idithu kolavum. pinbu adil siru naatu sarkarai sertu avatrai kodikum neeril serthu erandu nimidangal kalithu eraki, paruga vendum";


btn.onclick= function(){
    let txt_box= String(txt.value);
    console.log(txt_box);
   search(txt_box);
};


let search1= document.getElementById('search1');

function search(txt_box){
if(txt_box == 'cold' || txt_box == 'Cold' || txt_box== 'COLD'  ){
    emp_space.innerHTML="Thulasi ,10 ilaigal edutu kondu nanraga potu idituedutu kolavum, piragu adil siru milagu serthu adayum nanraga idithu kolavum. pinbu adil siru naatu sarkarai sertu avatrai kodikum neeril serthu erandu nimidangal kalithu eraki, paruga vendum";
    search1.href='/HTML/DOM.html'; //assigned to our defined webpage --Redirected
    
} 
else if(txt_box==''|| txt_box== '.')
{
    emp_space.innerHTML="Type something Relevant";
    search1.href=""; g
}
}