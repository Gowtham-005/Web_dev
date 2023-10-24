console.log("LOCAL STORAGE EXAMPLE");

var add = document.getElementById("add");
var sub = document.getElementById("sub");
var reset =document.getElementById("reset");

let value=0;
console.log("Default value", value);

add.onclick=function(){ 
    value+=1;
    console.log(value);
    localStorage.setItem('name', value);
};
 sub.onclick=function(){
    value-=1;
    console.log(value);
    localStorage.setItem('name', value);
 };
 reset.onclick=function(){
    value = 0;
    console.log(value);
    localStorage.setItem('name', value);
 };


 if(!localStorage.getItem('name')){
    console.log("No value is incremented or drecremented");
 }
else{
    let stored = localStorage.getItem('name');
    console.log('The final score is',stored);
}


