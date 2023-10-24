// document.body.innerHTML='hello'; 
//obejct.object.property ='string'
document.title = 'GOOD JOB'; 

//document object reprents the webpage wholy 

console.log(document.title);

document.title='changed'; 
console.log(document.title);

console.log(document.body); 

console.log(typeof(document.body));

console.log(document.body.innerHTML); //innerHTML -> All the HTML elenmnts accessed
//document.body.innerHTML='Body CHnaged'

// document.body.innerHTML='<button>Button2</button>'
// can also create new HTML not chnage the text like above 

document.querySelector('button').innerHTML='button_chnged';

const btn2 = document.querySelector('.butt2') ;
// querySelector('.class') 
console.log(btn2);

const btn1= document.getElementById('butt2');
btn1.onclick=function(){
    if(document.getElementById('butt2').innerHTML=='Below_butt'){
    document.querySelector('#butt2').innerHTML='crack';
    }
    else{
        document.querySelector('#butt2').innerHTML='Below_butt';
    }
}


