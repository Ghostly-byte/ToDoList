window.addEventListener('load',()=>{
   const addTask = document.getElementById('btnAdd')
   const inputField = document.getElementById('inputField')
   const listTasks = document.getElementById('tasks')

   addTask.addEventListener('click', (e)=>{
    let paragraph = document.createElement('p')
    paragraph.innerText = inputField.value
    listTasks.appendChild(paragraph)
    
    inputField.value = null
    paragraph.addEventListener('click',(c)=>{
        
            paragraph.style.textDecoration = "line-through"
        
    })

    paragraph.addEventListener('dblclick',(f)=>{
        listTasks.removeChild(paragraph)
    })

   })
})

