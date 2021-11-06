const list = document.querySelector('.task-list');


export default function clearScreen() {
    while(list.hasChildNodes()) list.removeChild(list.lastChild);
}