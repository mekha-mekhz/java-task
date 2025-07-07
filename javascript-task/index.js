const taskInput = document.getElementById('task');
const addButton = document.getElementById('addbutton');
const allBtn = document.getElementById('all');
const activeBtn = document.getElementById('active');
const completedBtn = document.getElementById('completed');
const item = document.getElementById('item');
// Load saved tasks
window.onload = function () {
  const saved = JSON.parse(localStorage.getItem('tasks')) || [];
  let i = 0;
  while (i < saved.length) {
    createTaskElement(saved[i].text, saved[i].done);
    i++;
  }
};
// Save tasks to localStorage
function saveTasks() {
  const taskArray = [];
  const listItems = item.querySelectorAll('li');
let i = 0;
  while (i < listItems.length) {
    const li = listItems[i];
    const checkbox = li.querySelector('input[type="checkbox"]');
    const label = li.querySelector('span');

    if (label) {
      taskArray.push({
        text: label.textContent.trim(),
        done: checkbox.checked
      });
    }
    i++;
  }

  localStorage.setItem('tasks', JSON.stringify(taskArray));
}// Create a new task element
function createTaskElement(text, completed = false) {
  const li = document.createElement('li');
  li.classList.add('task-item');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = completed;

  const label = document.createElement('span');
  label.textContent = text;

  if (completed) {
    label.classList.add('completed');
  }

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      label.classList.add('completed');
    } else {
      label.classList.remove('completed');
    }
    saveTasks();
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add('delete-btn');

  deleteBtn.addEventListener('click', () => {
    li.remove();
    saveTasks();
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(deleteBtn);
  item.appendChild(li);
}
// Add a task
addButton.onclick = () => {
  const text = taskInput.value.trim();
  if (text === "") {
    alert("Please enter a task.");
    return;
  }
  createTaskElement(text);
  saveTasks();
  taskInput.value = "";
};
// Show All Tasks
allBtn.onclick = () => {
  const listItems = item.querySelectorAll('li');
  let i = 0;
  while (i < listItems.length) {
    listItems[i].style.display = '';
    i++;
  }
};
// Show Only Active Tasks
activeBtn.onclick = () => {
  const listItems = item.querySelectorAll('li');
  let i = 0;
  while (i < listItems.length) {
    const checkbox = listItems[i].querySelector('input[type="checkbox"]');
    if (checkbox && !checkbox.checked) {
      listItems[i].style.display = '';
    } else {
      listItems[i].style.display = 'none';
    }
    i++;
  }
};
// Show Only Completed Tasks
completedBtn.onclick = () => {
  const listItems = item.querySelectorAll('li');
  let i = 0;
  while (i < listItems.length) {
    const checkbox = listItems[i].querySelector('input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
      listItems[i].style.display = '';
    } else {
      listItems[i].style.display = 'none';
    }
    i++;
  }
};
