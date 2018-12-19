document.addEventListener('DOMContentLoaded', () => {

  const addMenuItemBtn = document.querySelector('form')
  const addMenuItemInput = document.querySelector('#input-item')
  const menuListHTML = document.querySelector('ul')
  const checkAllBtn = document.querySelector('#check-btn')
  const uncheckAllBtn = document.querySelector('#uncheck-btn')
  const resetBtn = document.querySelector('#reset-btn')
  let menu = JSON.parse(localStorage.getItem('items')) || []

  //Check all items
  function checkAllItems(){
    menu.map(item => item.done? true: item.done = true)
    updateLocalStorage()
    renderNewMenu()
  }
  //Uncheck all items
  function uncheckAllItems(){
    menu.map(item => !item.done? true: item.done = false)
    updateLocalStorage()
    renderNewMenu()
  }
  //Reset the menu by removing all items from the menu array and local storage
  function resetMenu(){
    menu = [] //make the menu = []
    localStorage.removeItem('items')
    renderNewMenu()
  }
  //Save checkbox status into menu array and local localStorage
  function toggleCheckBox(e){
    if(!e.target.matches('input')) return false
    const index = e.target.dataset.index
    menu[index].done = !menu[index].done
    updateLocalStorage()
  }

  //Render the menu array in the html
  function renderNewMenu(){
    const menuInHTLM = menu.map((item, index) => {
      return `<li>
                <input type="checkbox" data-index="${index}" id="item${index}" ${item.done? 'checked':''}>
                <label for="item${index}">"${item.text}</label>
              </li>`
    }).join('')
    menuListHTML.innerHTML = menuInHTLM
  }

  //Add value into a menu array
  function addMenuItem(e){
    e.preventDefault()
    const item = {
      text: addMenuItemInput.value,
      done: false
    }
    menu.push(item)
    updateLocalStorage()
    renderNewMenu()
    //Reset the form (input text = '')
    this.reset()
  }
  //Function that update the local localStorage
  function updateLocalStorage(){
    localStorage.setItem('items', JSON.stringify(menu))
  }
  //Render the page with items stored in localStorage
  function init(){
    renderNewMenu()
  }

  init()

  //Create 3 buttons "check all", "uncheck all", "clear all"
  uncheckAllBtn.addEventListener('click', uncheckAllItems)
  checkAllBtn.addEventListener('click', checkAllItems)
  resetBtn.addEventListener('click', resetMenu)
  menuListHTML.addEventListener('click', toggleCheckBox)
  addMenuItemBtn.addEventListener('submit', addMenuItem)
})
