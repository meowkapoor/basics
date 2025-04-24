const todo = []

renderArray();

function renderArray(){
  let todoElements = ``;

  todo.forEach(function(todoObject, index){
    const { name,duedate } = todoObject;
    let html = `
      <div>${name}</div>
      <div>${duedate}</div>
      <button class="css-delete-button" onclick="
        todo.splice(${index},1);
        renderArray();
      ">Delete</button>` //generating html code
    todoElements+=html;
  })
  
  document.querySelector('.js-print-todo').innerHTML = todoElements;
  
}

function addToArray(){
  const inputElement = document.querySelector('.js-todo');
  const name = inputElement.value;

  const duedateElement = document.querySelector('.js-due-date-input');
  const duedate = duedateElement.value;
  todo.push({
    name,
    duedate
  });
  
  inputElement.value = '';
  duedateElement.value = '';

  if (name !== '') {
    renderArray();
  }

}

function addToArrayKey(event) {
  if (event.key === 'Enter') {
    addToArray();
  }
}

function reset() {
  document.querySelector('.js-print-todo').innerHTML = '';

  const inputElement = document.querySelector('.js-todo').value = '';

  todo.splice(0,todo.length);

}

