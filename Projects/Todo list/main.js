const input = document.getElementById('input');
const addBtn = document.querySelector('.assign');
const main = document.querySelector('.list-container');
const totalcount = document.getElementById('counting');

let count = 0;

addBtn.addEventListener('click', () => {
  if (input.value != 0) {
    document.getElementById('alert').innerText = '';
    adding();
    input.value = '';
  } else {
    document.getElementById('alert').innerText = 'Please enter any text';
  }
});

//............................Adding Function..................................

function adding() {
  //Creating the List div ad assigining
  const list = document.createElement('div');
  list.classList.add('list');
  main.appendChild(list);
  //Creating the Text Container div ad assigining
  const textContainer = document.createElement('div');
  textContainer.classList.add('text-container');
  list.appendChild(textContainer);
  //Creating the Todo Text div ad assigining
  const todoText = document.createElement('p');
  todoText.setAttribute('id', 'todo-text');
  textContainer.appendChild(todoText);
  list.classList.add('add-list');
  //Assigining the value
  todoText.innerText = input.value;
  //creating the button div
  const totalButtons = document.createElement('div');
  totalButtons.classList.add('button');
  list.appendChild(totalButtons);
  //Creating the the done button
  const doneBtn = document.createElement('button');
  doneBtn.innerHTML = '<i class="fas fa-check"></i>';
  doneBtn.classList.add('done');
  totalButtons.appendChild(doneBtn);
  //Creating the the del button
  const delBtn = document.createElement('button');
  delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  delBtn.classList.add('del');
  totalButtons.appendChild(delBtn);
  //..................Delete...................
  delBtn.addEventListener('click', () => {
    list.classList.remove('add-list');
    list.innerHTML = '';
    count--;
    totalcount.innerText = 'No of count : ' + count;
  });

  //.......................done...............
  doneBtn.addEventListener('click', () => {
    const mainText = document.getElementById('todo-text');
    mainText.innerHTML = `<del>${mainText.innerText}</del>`;
  });
  doneBtn.addEventListener('dblclick', () => {
    const mainText = document.getElementById('todo-text');
    mainText.innerHTML = mainText.innerText;
  });
  count++;
  totalcount.innerText = 'No of count : ' + count;
}
