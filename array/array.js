const todoList=[]; //empty array
let emptySpace =document.querySelector('.space1') ;

function addTodo(){
    const tBox1 = document.querySelector('.tbox1');
    let input = tBox1.value;
    //console.log(input);

    let duedate=  document.querySelector('.calender');
    let DueDate=duedate.value; //not used it yet
    let object={
        Name:input,
        DueDate:DueDate
    };

    if(input!=''){
        todoList.push(object); // adds the input values continuously to the end of array
        console.log(todoList);  
        renderTodoList();
    }  

    tBox1.value='';
   
     
}
function renderTodoList(){
    let todoListHTML='';
    for( let i = 0 ;  i < todoList.length ; i++ ){
        let inpArray= todoList[i];
        let html = `<p>

            ${inpArray.Name} ${inpArray.DueDate}
            <button onclick="
            todoList.splice(${i},1);
            renderTodoList();
            if(todoList.length== 0){
                emptySpace.innerHTML='';
               }
            " > Delete </button>
               
                  </p>`;
        console.log(html);
        todoListHTML += html; 
//Abv line has already previously stored inpArray value and concatinates another <p> tag which willdsiplayin a new line since it is given as innerHTML = todoListHTML, the HTML code will be executed and displays the the newly enteredconcatenated value to the next line
//  console.log(todoListHTML);    
        emptySpace.innerHTML=todoListHTML;
      
    
    
    } 
}

