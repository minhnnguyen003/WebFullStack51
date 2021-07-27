import TaskList from './components/TaskList.js';
import AlertMessage from './components/AlertBox.js';
import TaskContainer from './components/TaskContainer.js';
import clearScreen from './models/clearScreen.js';

var taskList = [];
var date = new Date();
const localStorage = window.localStorage;
const addInput = document.getElementById('add-input');

const myList = document.getElementById('task-list')
const addBtn =  document.getElementById('add-btn');
const popUp = document.getElementById('popup-screen');
const closeBtn = document.getElementById('close-btn');
const searchBtn = document.getElementById('search-btn');
const searchBox = document.getElementById('search-box');
const searchInput = document.getElementById('search-input')
const submitBtn = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error-message');


closeBtn.addEventListener('click', function() {
    // popUp.style.opacity = 0;
    popUp.style.display = 'none';
});

addBtn.addEventListener('click', function() {
    // popUp.style.opacity = 1;
    popUp.style.display = 'flex';
    addInput.focus();
});

searchBtn.addEventListener('click', function() {
    searchBox.classList.toggle("showSearchBox");
    searchInput.focus();
});

submitBtn.addEventListener('click', function() {
    if(addInput.value === '')
    {
        errorMessage.style.display = 'block';
        setTimeout(function() {errorMessage.style.display = 'none';}, 2000);
    }
    else
    {
        let input = {
            name: addInput.value,
            date: date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
        }
        taskList.push(input);
        localStorage.setItem('tasklist', JSON.stringify(taskList));
        clearScreen();
        myList.setAttribute('list', localStorage.getItem('tasklist'));
        addInput.value = '';
    }
});

addInput.addEventListener('keyup', (e) => {
    if(e.key === 'Enter')
    {
        if(addInput.value === '')
        {
            errorMessage.style.display = 'block';
            setTimeout(function() {errorMessage.style.display = 'none';}, 2000);
        }
        else
        {
            let input = {
                name: addInput.value,
                date: date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
            }
            taskList.push(input);
            localStorage.setItem('tasklist', JSON.stringify(taskList));
            clearScreen();
            myList.setAttribute('list', localStorage.getItem('tasklist'));
            addInput.value = '';
        }
    }
});

searchInput.addEventListener('keyup', () => {
    clearScreen();
    let input = searchInput.value;
    let output = [];
    for(let task of taskList) if(input == task.name) output.push(task);
    localStorage.setItem('searchOutput', JSON.stringify(output));
    myList.setAttribute('list', localStorage.getItem('searchOutput'));
});