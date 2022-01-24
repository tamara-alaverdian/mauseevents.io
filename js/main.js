let enterEventCount = 0;
let leaveEventCount = 0;
let clickEventCount=0
const mouseTarget = document.getElementById('mouseTarget');
const unorderedList = document.getElementById('unorderedList');

mouseTarget.addEventListener('mouseenter', e => {
    mouseTarget.style.border = '5px dotted orange';
    enterEventCount++;
    addListItem('This is mouseenter event ' + enterEventCount + '.');
});

mouseTarget.addEventListener('mouseleave', e => {
    mouseTarget.style.border = '1px solid #333';
    leaveEventCount++;
    addListItem('This is mouseleave event ' + leaveEventCount + '.');
});
mouseTarget.addEventListener('click', e => {
    mouseTarget.style.border = '5px dotted orange';
    clickEventCount++;
    addListItem('This is mouseclick event ' + clickEventCount + '.');
});

function addListItem(text) {
    let newTextNode = document.createTextNode(text);
    let newListItem = document.createElement("li");


    newListItem.appendChild(newTextNode);
    unorderedList.appendChild(newListItem);
}