const btn= document.querySelector('.butt2'); 

function func(){
    console.log('buttOn Pressed!');
    if(btn.innerText=='Subscribe'){ 
        document.querySelector('.butt2').innerHTML='subscribed';
    }
    else{
        document.querySelector('.butt2').innerHTML='Subscribe';
    }
}

 btn.onclick= function(){
    func();
 };


 
 const btn2=document.querySelector('.btn2');

 btn2.onclick=function(){
    
   calculateTotal();
   
 };

const inp = document.querySelector(".inp1");
 

inp.onkeyup=function(event){
     //keydown means when enter pressed
    //  console.log(event.key); //reference for event.key shows wat key we press
    if(event.key=='Enter'){
        calculateTotal();
  
    }
    
};

 
inp.oninput=function(){
  document.querySelector('.js-3').innerHTML= inp.value;
};

    


 function calculateTotal(){
    
    const inp = document.querySelector(".inp1");
  
    
    let val= Number(inp.value);
   
// since the val is a string data type we used JSOn or we can use 
// we can use let value1 = Number(inp,value);   Both are ryt
  // let val= JSON.parse(value1);   can use this also
   
    if(val>0 && val <=40){
        val= val + 10;
        console.log(val);
        document.querySelector('.js-1').innerHTML=val ;
        document.querySelector('.js-2').innerHTML='$';
    }
    
  else if(val >=50){
    console.log(val);
    document.querySelector('.js-2').innerHTML=val ;
    document.querySelector('.js-1').innerHTML='$';
  }
 }

 
 window.console.log('window');