const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const btn = document.querySelector('.form__btn');
const total = document.querySelector('.total__text');
const taskList = document.querySelector('.task__list');
let i = 0;

form.addEventListener('submit', (e) => {
   e.preventDefault();
   i++;

   const inputValue = input.value;

   if (inputValue === "") return;

   const taskElement = document.createElement('div');
   taskElement.classList.add(('task__item'));

   const taskWrap = document.createElement('div');
   taskWrap.classList.add(('task__item-wrap'));

   const taskInput = document.createElement('input');
   taskInput.classList.add(('task__item-inner'));
   taskInput.type = 'text';
   taskInput.value = inputValue;
   taskInput.setAttribute('readonly', 'readonly');
   taskWrap.appendChild(taskInput);

   taskElement.appendChild(taskWrap);

   const taskButtons = document.createElement('div');
   taskButtons.classList.add(('button'));

   const buttonAdd = document.createElement('button');
   buttonAdd.classList.add(('button__add'));
   buttonAdd.innerHTML = 'Add';

   const buttonDel = document.createElement('button');
   buttonDel.classList.add(('button__del'));
   buttonDel.innerHTML = 'Del';

   taskButtons.appendChild(buttonAdd);
   taskButtons.appendChild(buttonDel);

   taskWrap.appendChild(taskButtons);
   taskList.appendChild(taskElement);
   input.value = '';

   buttonAdd.addEventListener('click', () => {
      if (buttonAdd.innerText.toLowerCase() == 'edit') {
         taskInput.removeAttribute('readonly');
         taskInput.focus();
         buttonAdd.innerText = 'Save';
      } else {
         taskInput.setAttribute('readonly', 'readonly');
         buttonAdd.innerText = 'Edit';
      }
   });

   buttonDel.addEventListener('click', () => {
      taskList.removeChild(taskElement);
      i--;
      total.textContent = i;
   });

   total.textContent = i;

})


