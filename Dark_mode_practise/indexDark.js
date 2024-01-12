let night = document.querySelector('.n');
let light = document.querySelector('.l');
let body=document.querySelector('body');


light.onclick=()=>{
  let nyt = night.classList.toggle("night"); //night mode
  body.classList.toggle("nytMode");

// let  refresh=localStorage.setItem("refresh",nyt);
// return refresh;
};
night.onclick=()=>{
    night.classList.toggle("night"); //day mode
    body.classList.toggle("nytMode");
};


 