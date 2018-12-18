// Data for the exercices
const inventors = [
  {first: 'Marie', last: 'Curry', year: 1920, passed: 1960},
  {first: 'franck', last: 'Heinstein', year: 1870, passed: 1940},
  {first: 'Jean', last: 'Edison', year: 1520, passed: 1599},
  {first: 'Silvay', last: 'Bathrrom', year: 1540, passed: 1930}
]

const people = ['Jean, Michel', 'Marie, Annick', 'Jean, Marie', 'Martin, Luther', 'Avril, Lavigne']

//1 Filter for those born in the 1500's
const inventors1500 = inventors.filter(inventor => {
  if(inventor.year >= 1500 && inventors.passed < 1600){
    return true
  }
})
console.log('Inventors born in the 1500\'s',inventors1500)

//2 Array of inventors' first and last name
const inventorFirtAndLastName = inventors.map(inventor => `${inventor.first}, ${inventor.last}`)
console.log('inventors first and last name', inventorFirtAndLastName)

//3 Sort of the inventors by dob oldest => youngest
const arraySorted = inventors.sort((current, next) => current.year < next.year ? true: -1)
console.log('Inventors sorted by oldest', arraySorted)

//4 How many years did all the inventors live
const sumYearsLived = inventors.reduce((sumYear, inventor) => sumYear + (inventor.passed - inventor.year),0)
console.log('Sum years lived ', sumYearsLived);

//5 Sort the inventors by years lives
const sortByYearLived = inventors.sort((a, b) => {
  const inventorALifeSpan = a.passed - a.year
  const inventorBLifeSpan = b.passed - b.year
  return inventorALifeSpan < inventorBLifeSpan? true: -1
})
console.log('Inventors longest life span', sortByYearLived)

//6 Sort out boulevards that have "de" in their name
// const listBoulevards = Array.from(document.querySelectorAll('.mw-category-group a'))
// listBoulevards
//   .map(boulevardLink => boulevardLink.textContent)
//   .filter(boulevard => {
//     return boulevard.includes('de')
//   })
// console.log(listBoulevards)

//7 Sort people by last name
const peopleSorted = people.sort((a, b) => {
  const [aFirst, aLast] = a.split(', ')
  const [bFirst, bLast] = b.split(', ')
  return aLast > bLast? true: -1
})
console.log('People sorted out by last name', peopleSorted)

//8 Reduce, sum-up object in this arraySorted
const things = ['car', 'bike', 'truck', 'bike', 'truck','car', 'bike','car', 'bike','bike', 'truck','car', 'bike']

const transportationType = things.reduce((sumTransportationType, vehicule) => {
  if(!sumTransportationType[vehicule]){
    sumTransportationType[vehicule] = 0
  }
  sumTransportationType[vehicule]++
  return sumTransportationType
},{})

console.log(transportationType)
