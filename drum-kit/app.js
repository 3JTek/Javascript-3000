
function makeSound(keyCode){
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
  if(!audio) return
  audio.currentTime = 0
  audio.play()
}

function keyDisplayEffect(keyCode){
  const div = document.querySelector(`div[data-key="${keyCode}"]`)
  if(!div) return
  div.classList.add('playing')
}

function playDrum({keyCode}){
  makeSound(keyCode)
  keyDisplayEffect(keyCode)
}

function removePlayingClass(e){
  if(e.propertyName === 'transform'){
    e.target.classList.remove('playing')
  }
}

document.addEventListener('keydown', playDrum)
document.addEventListener('transitionend', removePlayingClass)
