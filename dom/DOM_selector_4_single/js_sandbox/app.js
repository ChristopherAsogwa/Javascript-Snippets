// document.getElementById()

// const id = document.getElementById('task-title');
// console.log(id);
// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// // Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
taskTitle.style.display = 'block';
const taskList = document.querySelector('.card-title');
taskList.id = "heading-task";
const taskListId = document.getElementById('heading-task');
// console.log(taskListId);
taskListId.style.color = "#ff0000";
taskListId.style.backgroundColor = "#000";
taskListId.style.paddingTop = "5px";
taskListId.style.paddingBottom = "5px";
taskListId.style.paddingLeft = "5px";
taskListId.style.borderRadius = "15px";
// console.log(taskListId);
// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';
// document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';




