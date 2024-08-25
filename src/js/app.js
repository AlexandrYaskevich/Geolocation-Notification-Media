import formatDate from "./datalist";
import getPosition from "./getgeoposition";

const position = getPosition();
const list = document.querySelector('.list');
const forminput = document.querySelector('.forminput');
const ids = [];
const currentDate = new Date();


forminput.addEventListener("change", (e) => {
    e.preventDefault();
    
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('items');
    const id =  Math.floor(Math.random() * 10);
    if(!ids.includes[id]) {
    itemDiv.dataset.id = id;
    ids.push(id);
    }
    let input = forminput.value;
    itemDiv.textContent = `${input} ${position} ${formatDate(currentDate)}`;
    forminput.value = ""; 
    list.appendChild(itemDiv);
    
});