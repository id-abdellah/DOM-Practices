const parentContainer = document.querySelector('.parent-container');
const taskPlace = document.querySelector('.task-place');
const input = document.querySelector('.task-place input');
const button = document.querySelector('.task-place button');

// task appear container
const taskContainer = document.createElement('div');
taskContainer.className = 'task-container';
taskContainer.style.cssText = `
  display: flex;
  border-radius: 4px;
  align-items: center;
  justify-content: space-between;
  background-color: #fafafa;
  margin-top: 18px;
`;

// paragraph of text
const paraOfText = document.createElement('p');
// paraOfText.innerText = input.value;
taskContainer.append(paraOfText);

paraOfText.style.cssText = `
  border-radius: 4px;
  padding: 6px 6px;
  font-size: 16px;
  font-weight: 600;
  flex: 1;
  letter-spacing: 0.6px;
`;

// icons
const icons = document.createElement('div');
icons.className = 'icons-container';
icons.style.cssText = `display: flex; flex-direction: row; user-select: none;`;
taskContainer.append(icons);

const doneIcon = document.createElement('span');
doneIcon.className = 'material-symbols-rounded';
doneIcon.classList.add('done-icon');
doneIcon.textContent = 'done';
doneIcon.style.cssText = `
  color: #52cb5f; 
  height: 30px; 
  width: 30px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  border-radius: 4px; 
  font-size: 20px;; 
  margin-left: 4px; 
  border: 1px solid #52cb5f;
  cursor: pointer;
  transition: .3s;`;

icons.append(doneIcon);

const deleteIcon = document.createElement('span');
deleteIcon.className = 'material-symbols-rounded';
deleteIcon.classList.add('deleting-icon');
deleteIcon.textContent = 'delete';
deleteIcon.style.cssText = `
  color: #e43e31; 
  font-size: 20px; 
  height: 30px; 
  width: 30px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  border-radius: 4px; 
  margin-inline: 4px;
  border: 1px solid #e43e31;
  cursor: pointer;
  transition: .3s`;

icons.append(deleteIcon);
//

//

// the main function that are added task bellow
function addingTasks() {
  paraOfText.innerText = input.value;
  if (input.value == '') {
    paraOfText.innerText = 'There is no task';
  }
  let cloned = taskContainer.cloneNode(true);
  cloned.className = 'task-container-cloned';
  input.value = '';
  input.focus();
  parentContainer.append(cloned);
}
// when click on + button
button.addEventListener('click', addingTasks);

// when press enter keyf
input.addEventListener('keypress', function (e) {
  if (e.keyCode == 13) {
    addingTasks();
  }
});
// completing a task
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('done-icon')) {
    e.target.parentElement.previousElementSibling.style.color = 'grey';
    e.target.parentElement.previousElementSibling.style.textDecoration =
      'line-through';
  }
});
// deleting a task
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('deleting-icon')) {
    e.target.parentElement.parentElement.remove();
  }
});
