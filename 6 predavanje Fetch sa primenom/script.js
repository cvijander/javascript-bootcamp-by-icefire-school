let url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('greska ' +error ));


