console.log(this)

const todoTextBox = document.getElementById('todoTextBox')
const addButton = document.getElementById('addButton')
const taskListUL = document.getElementById('taskListUL')

// add event listener to the button for click 
addButton.addEventListener('click', function() {

    const todoTitle = todoTextBox.value 
    // create an li element 
    let li = document.createElement('li')
    li.innerHTML = todoTitle
    li.setAttribute('class', 'todo-item')

    // create a remove button 
    let removeButton = document.createElement('button')
    removeButton.className = "removeButton"
    removeButton.setAttribute('class', 'buttonremove')
    removeButton.addEventListener('click', function() {
        removeButton.parentElement.remove()
    })
    removeButton.innerHTML = 'Remove'

    li.appendChild(removeButton)
    
    // append the li to the taskListUL
    taskListUL.appendChild(li)
})
 <ul id = "taskListUL">
            <li>
            <label>Wash the car </label>
            <button>Remove</button>
            </li>
            <li>Clean the house</li>
</ul>
*/