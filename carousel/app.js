//Create an envent listener on all div
//Capture mouseDown and record value
//Create an event listener mouseMove and record value
document.addEventListener('DOMContentLoaded', () => {

  const divContainer = document.querySelector('.container')
  let mouseDown = false
  let clickStart

  function stopScrolling(){
    mouseDown = false
  }

  divContainer.addEventListener('mousedown', (e) => {
    mouseDown = true
    clickStart = e.pageX
  })

  divContainer.addEventListener('mousemove', (e) => {
    if(mouseDown){
      window.scroll(window.scrollX + (e.pageX - clickStart)/2, 0)
      clickStart = e.pageX
    }
  })

  divContainer.addEventListener('mouseleave', stopScrolling)
  divContainer.addEventListener('mouseup', stopScrolling)
})
