let addButton = document.getElementById('addtoList')
let listContainer = document.getElementById('itemContainer');
let listinput = document.getElementById('inputField')

addButton.addEventListener('click', e=>{
    var paragraph = document.createElement('p')
    paragraph.innerText = listinput.value;
    listContainer = this.appendChild(paragraph)
})
