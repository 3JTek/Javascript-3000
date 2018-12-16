let secondHand
let minuteHand
let hourHand

function updateHands(){
  const currentTime = new Date()
  const secondNow = currentTime.getSeconds()
  const minutesNow = currentTime.getMinutes()
  const hoursNow = currentTime.getHours()
  const positionSecondNow = (secondNow / 60 * 360) + 90
  secondHand.style.transform = `rotate(${positionSecondNow}deg)`
  const positionMinutesNow = (minutesNow / 60 * 360) + 90
  minuteHand.style.transform = `rotate(${positionMinutesNow}deg)`
  const positionHourNow = (hoursNow / 12 * 360) + 90
  hourHand.style.transform = `rotate(${positionHourNow}deg)`
}

function init(){
  secondHand = document.querySelector('.seconds')
  minuteHand = document.querySelector('.minutes')
  hourHand = document.querySelector('.hours')
  //Update them first to avoid having a weird transition when the page is loaded
  updateHands()
  setInterval(updateHands, 1000)
}

document.addEventListener('DOMContentLoaded', init)
