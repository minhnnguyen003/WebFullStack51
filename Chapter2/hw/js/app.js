import getData from "./models/getdata.js"; //module
import setData from "./models/setData.js"; //module
import ResultTable from "./components/ResultTable.js"; //component

const inputVal = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const errorMsg = document.getElementById('error-message');
const container = document.querySelector('.container');
const popUp = document.querySelector('.pop-up-bg');
window.onload = inputVal.focus();

function getInputData() {
    return inputVal.value != '';
}

function displayBlankUsername() {
    errorMsg.style.display = 'block';
    setTimeout(() => {errorMsg.style.display = 'none'}, 2000);
    inputVal.focus();
}

function callAPI () {
    if(getInputData()) {
        getData(inputVal.value)
        .then(data => {
            popUp.style.display = 'none';
            container.style.display = 'grid';
            console.log("Xuất dữ liệu thành công");
            console.log(data);
            setData(data);
        });
    }
    else displayBlankUsername();
}

inputVal.addEventListener('keyup', (e) => {
    if(e.key == 'Enter') callAPI();
});

submitBtn.addEventListener('click', callAPI);


