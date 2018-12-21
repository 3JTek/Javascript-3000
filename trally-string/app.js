document.addEventListener('DOMContentLoaded', () => {

  //Grab all li elements
  //Loop around and add time to each others (reduce)
  //Create a function that trasfrom time "min:sec" to hours:min:second
  const videos = [...document.querySelectorAll('[data-time]')]

  function calculateSecondOfVideo(duration){
    const [mins, secs] = duration.split('.')
    return parseInt(mins*60) + parseInt(secs)
  }

  const durationInSecond = videos.reduce((totalDuration, element) => {
    return totalDuration += calculateSecondOfVideo(element.getAttribute("data-time"))
  },0)

  const hours = Math.floor(durationInSecond / 3600)
  const minutes = Math.floor((durationInSecond % 3600) / 60)
  const seconds = durationInSecond - hours * 3600 - minutes * 60

console.log(hours, minutes, seconds);







})
