
let todoList = JSON.parse(localStorage.getItem('todoList')); //string is of no use --object di form ch array di form .
if(todoList==null){
    todoList = [];
}

// delete-Books
const booklist = document.querySelector('#book-list ul');

booklist.addEventListener('click',function(e){
  if(e.target.className == 'delete'){
    const li = e.target.parentNode;
    booklist.removeChild(li);
  }
});

//add Books

const addBooks = document.querySelector('#add-book');

addBooks.addEventListener('submit',e =>{
  e.preventDefault();
  const inputValue = addBooks.querySelector('input[type="text"]').value;
  const li = document.createElement('li');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');
  booklist.appendChild(li);
  li.appendChild(span1);
  li.appendChild(span2);
  span1.classList.add('name');
  span2.classList.add('delete');
  span1.textContent = inputValue;
  span2.textContent = 'Delete';
  localStorage.setItem('books',JSON.stingify(todoList));
  console.log(todoList);
});

//hide books

//tabbed-Content

const tabs = document.querySelector('#tabbed-content ul');
tabs.addEventListener('click', e =>{
  const pannel = document.querySelectorAll('pannel');
  if(e.target.tagName == 'LI'){
    const clicked = document.querySelector(e.target.dataset.target);
    pannel.forEach(function(pannel){
      if(pannel == clicked){
        console.log('clicked');
        pannel.classList.add('active');
      }
      else{
        pannel.classList.remove('active');
      }
    });
  }
});





















/*
const list = document.querySelector('#book-list ul');

// delete Books
list.addEventListener('click',e =>{
  e.preventDefault();
  //console.log('hi');
 // now store the value of li to delete
if(e.target.className == 'delete'){
  const li = e.target. parentNode;
  list.removeChild(li);
}
});


// add books

const addBtn = document.querySelector('#add-book');

addBtn.addEventListener('submit',e =>{
  e.preventDefault();
  if(addBtn.querySelector('input[type ="text"]').value.length != 0){
  const value = addBtn.querySelector('input[type ="text"]').value;
  //console.log(value);
  // lets add li in the list
const li = document.createElement('li');
const bookName = document.createElement('span');
const deleteBtn = document.createElement('span');
bookName.classList.add('name');                      //bookName.setAttribute('class','name');
deleteBtn.classList.add('delete');                                                                //bookName.textContent = value;

bookName.textContent = value;
deleteBtn.textContent = 'delete';

li.appendChild(bookName);
li.appendChild(deleteBtn);
list.appendChild(li);
}
else {
  window.alert('Please enter something');
}
});

// hide button

const hide = document.querySelector('#add-book #hide');

hide.addEventListener('change',e =>{
   if(e.target.checked){
       list.style.display = 'none';
   }
    else{
        list.style.display = 'block';
    }
});
Tabbed-Content

const tabs = document.querySelector('.tab');
const pannel = document.querySelectorAll('.pannel');

tabs.addEventListener('click', e =>{
  if(e.target.tagName == 'LI'){
    const clicked = document.querySelector(e.target.dataset.target);
    pannel.forEach(function(pannel){
      if(pannel == clicked){
        console.log('clicked');
        pannel.classList.add('active');
      }
      else{
        pannel.classList.remove('active');
      }
    });
  }
});
*/
