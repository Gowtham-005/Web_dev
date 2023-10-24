
//print (add);  //open Printer options in window
/*gogogoogogo */

//; is not mandatory but use everywhere to avoid error in certain statements ; is required

//alert( "hello bro mental munda")

/*     var inp= prompt('what is your name ? Bruh' , 'anonymous');
 alert("hello "  + inp + " !");

var inp2= prompt('Whats ur age?', '0');  //GEts an input from user 

var conf= confirm('Ur parents allowed');  // if ok pressed TRUE is sent , if cancel pressed FALSE is sent
 
if(inp2 >=18 || conf==true){
    alert("Your are allowed in this website "+ inp) //sends an alert message
 }

 else if(conf==false) {
    alert("You are not allowed here since ur parents has not allowed you!")
 }
 else{
    alert("You are not allowed here since ur age is "+ inp2 +" only 18+ is allowed")
 }         */
var msg; 

msg = " hello gowtham";
console.log(msg);

var octnum= 0o255;  // octal form 
var hexnum= 0xFF;  // hexa decimal number
console.log(octnum)
console.log(hexnum)

var exp = 11e10;
console.log(exp)

console.log(Number.MAX_VALUE)

console.log(Number.MIN_VALUE)

var mayBeInfinity = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(mayBeInfinity)


var name= 'gowtham';
var profession= "goodboy" // single and double quotes are same in JS

var yes = true; // boolean
var no = false;
console.log(yes)
console.log(no)
 
var gow = null;  //defined as null
console.log(gow)
 
var gow1;  //undefined
console.log(gow1)

// OBJECT 
var age= 40;
console.log(age )

age = "Gowtham";  // Loosely typed language : can change the datatype in the next line itselef not like C 
console.log(age)

console.log(typeof(age)) // checking the type of datatype using typeof() datatype

console.log(typeof(gow))   

var result = 10+20;
result = result-5;
console.log("answer =",result)

result= result*2;
console.log(result)  

// like these we can use '/ ' and ' % ' operators

var lang= "python";
console.log("hello "+ lang +" !")

console.log("15<10", 15<10) //false 


console.log("15==15", 15==15)
console.log('15=="15"', 15=="15") //string 15 has changed to number 15 -TYPE conersion took place 
// tos top type conversion we shouold use === to assign & compare
console.log('15==="15"', 15==="15")

// && || ! and or not  can be used as in C 


var age =16 , isMinor ;
isMinor= age >=18 ? 'no': 'yes'; // if age >=18 then ? ku aprom irukura value print agum and if not age>=18 vandu false na then : ku next irukura value print agum
console.log("output:", isMinor);

//COMPUND ASSIGNMENT OPERATORS 

var a=5 ,b=5;
a+=b; //a=a+b ;  both are same
console.log(a)

// IF ELSE 


var p1Age=51 , p2Age=52;
if(p1Age > p2Age){
    console.log("person1 is older");
}
else if (p1Age==p2Age) {
    console.log("person1 and person2 are of same age");
}  
else{
    console.log("person2 is older");
}

var i= 1;
while(i<=5){
    console.log("Hi da");
    i++;
}

//for(initialize ; condition ; increment)
for (i=1; i<=5 ; i++){
    console.log("for loop ",i)
}

function fname(param1 , param2 ){
    ///statements
    var res = param1+ param2;
    return res;
}


console.log("added value ", fname(1, 2));  //calling function called inside an console statemnt



let adder=0 ; // for printing a value when button is pressed 

//             OBJECTS 

let product= {
    title: "gowma",
    price: 6969
};

console.log("product name:", product.title);

console.log("product Price:", product.price);
console.log("product Details", product);

product.title= "goowtham";

product.new = "new added ";
console.log("product Details", product);
console.log("product TYPE :", typeof(product));



let count =5;
let storage2= localStorage.getItem("name");
 
let item ={
    brand:"Lewis",
    'brand-1': "bajji" ,
    ratings: {

        //object inside a object -> nested objects
        stars:4.5,
        count:storage2,
    } ,
    // we can create functions also inside the objects since functionas are also a type of value
    func: function func1(){
        console.log("this is a function inside object")
    },
};


console.log(item['brand']); //bracket notation -> gets the values assessed with the brand property
console.log(item.brand) // dot notation 
//it gives error if we used item.brand-1 -> since js will take - as subtraction
//hence we go for the bracket notation for these circumstances

console.log(item.ratings.stars); // displays the inside object elemnts

// we can just put the object name . function name to call it 
//Ex: console.log()  -> console is a OBJECT , log() is a FUNCTION inside the OBJECT console
item.func();

//              BUILT IN OBJECTS         like math.random()
//           JSON -> Javascript Object Notation ->To store data and is a Universal type 

//in JSON every variable is also written within "" so stringify is used to put ""

let obj2json=JSON.stringify(item) ;//stringify->will make it as string ->this code will convert our objct to a JSON 
console.log(obj2json);

let json2obj=JSON.parse(obj2json); // parse -> to convert JSON to JS object
console.log(json2obj); 

//LOCAL STORAGE  -> when we refresh a page this will  not get erased 
//local storage onlu support strings so we JSON.stringify to make a varibale as string

 localStorage.setItem("message" , "hello_Gow");
 const storage= localStorage.getItem("message");
 console.log(storage);


 //NOT WORKING------------------------------- 
 console.log(storage2);  

//----------------------------------

 console.log("gowtham".length);
 console.log("gowtham".toUpperCase());


const res= document.querySelector('.res');
res.innerHTML=storage2;



