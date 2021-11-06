import { taskList } from "../app.js";
import clearScreen from "./clearScreen.js";
var date = new Date();


const addInput = document.getElementById('add-input');
const errorMessage = document.getElementById('error-message');

export default function createTask() {
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