const formAddTodo = document.querySelector('.form-add-todo')
const inputSearchTodo = document.querySelector('.form-search input')
const todosContianer = document.querySelector('.todos-container')

formAddTodo.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.add.value.trim()
  if (inputValue.length) {
    todosContianer.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-center">
     <span>${inputValue}</span>
     <i class="far fa-trash-alt delete"></i>
    </li>`

    event.target.reset()
  }
})

todosContianer.addEventListener('click', event => {
  const clickedElement = event.target

  if (Array.from(clickedElement.classList).includes('delete')) {
    clickedElement.parentElement.remove()
  }
})

inputSearchTodo.addEventListener('input', event => {
  const inputValue = event.target.value.trim().toLowerCase()
  Array.from(todosContianer.children).
   filter(todo =>  !todo.textContent.toLowerCase().includes(inputValue))
   .forEach(todo => {
    todo.classList.remove('d-flex')
    todo.classList.add('hidden')
  })
  Array.from(todosContianer.children).
   filter(todo =>  todo.textContent.toLowerCase().includes(inputValue))
   .forEach(todo => {
    todo.classList.remove('hidden')
    todo.classList.add('d-flex')
  })
})