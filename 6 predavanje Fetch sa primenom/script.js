// let url = 'https://jsonplaceholder.typicode.com/todos';

// fetch(url)
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error('greska ' +error ));


/// ----------- drugi zadatak 

// async function fetchData(){
//   try {
//     let url = 'https://jsonplaceholder.typicode.com/todos';

//     let response = await fetch (url);
//     let data =await response.json();
    
//     console.log(data);
//   } 
//   catch (error) {
//      console.error(error)
//   } 
    
// }




// console.log(1);
// fetchData();

// console.log(3);

// --- treci primer tj aplikacija 

function filterData(todoList ,searchTerm ='') {
   return todoList.filter(todo => {
        let matchSearch = todo.title.toLowerCase().includes(searchTerm.toLowerCase());

        return matchSearch;
    });
    
}


async function getTodos() {
    try {
        let url = 'https://jsonplaceholder.typicode.com/todos';

        let response =await fetch(url);
        let data = await response.json();

        console.log(data)

        return data;
    }  catch (error) {
        console.error(error)
    }    
}

async function  displayTodos() 
{
    let searchTerm =  document.getElementById('filter').value;
    let todoList = await getTodos(); 
       // console.log(todoList);
    let filteredData =  filterData(todoList, searchTerm);   

    let todoListContainer =  document.getElementById('todoListContainer');

    todoListContainer.innerHTML='';

    filteredData.forEach(todo => {
        let li = document.createElement('li');
        let id = todo.id;
        let title =todo.title;
        let completed = todo.completed;

        li.innerHTML = `${id} ${title}`; 
  
        if(completed)
        {          
          li.style.backgroundColor ='green';
        } 
               
        todoListContainer.append(li);
    });

}


displayTodos();