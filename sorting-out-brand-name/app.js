// const finalList = brandName.map(element => element.replace(/↵/g,'').trim(''))

let brandName = ["Black Panther (2018)", "Mission: Impossible - Fallout (2018)", "BlacKkKlansman (2018)", "A Star Is Born (2018)", "A Quiet Place (2018)", "Spider-Man: Into the Spider-Verse (2018)", "Paddington 2 (2018)", "Incredibles 2 (2018)", "Eighth Grade (2018)", "Roma (2018)", "Leave No Trace (2018)", "Call Me by Your Name (2018)", "Won't You Be My Neighbor? (2018)", "Can You Ever Forgive Me? (2018)", "Widows (2018)", "The Death of Stalin (2018)", "First Man (2018)", "Phantom Thread (2018)", "I, Tonya (2018)", "Ant-Man and the Wasp (2018)", "Crazy Rich Asians (2018)", "The Post (2018)", "Sorry to Bother You (2018)", "Shoplifters (Manbiki kazoku) (2018)", "The Hate U Give (2018)", "The Favourite (2018)", "Hereditary (2018)", "Isle of Dogs (2018)", "The Rider (2018)", "Avengers: Infinity War (2018)", "McQueen (2018)", "A Fantastic Woman (Una mujer fantástica) (2018)", "Summer 1993 (Estiu 1993) (2018)", "Three Identical Strangers (2018)", "First Reformed (2018)", "The Guilty (Den skyldige) (2018)", "Free Solo (2018)", "Minding the Gap (2018)", "The Old Man & the Gun (2018)", "Wildlife (2018)", "Tea With the Dames (Nothing Like a Dame) (2018)", "Searching (2018)", "The Tale (2018)", "Shirkers (2018)", "Mandy (2018)", "Oh Lucy! (2018)", "Loveless (Nelyubov) (2018)", "Pick of the Litter (2018)", "Hannah Gadsby: Nanette (2018)", "Night Comes On (2018)", "Love, Simon (2018)", "Annihilation (2018)", "If Beale Street Could Talk (2018)", "The Ballad of Buster Scruggs (2018)", "Science Fair (2018)", "Foxtrot (2018)", "In Between (2018)", "Zama (2018)", "RBG (2018)", "You Were Never Really Here (2018)", "Deadpool 2 (2018)", "Bumblebee (2018)", "The Endless (2018)", "Border (Gräns) (2018)", "I Am Not a Witch (2018)", "The Cakemaker (2018)", "Blindspotting (2018)", "Burning (Beoning) (2018)", "They Shall Not Grow Old (2018)", "Filmworker (2018)", "Beast (2018)", "Custody (Jusqu'à la garde) (2018)", "Sweet Country (2018)", "Blaze (2018)", "Ralph Breaks the Internet (2018)", "Lean on Pete (2018)", "To All the Boys I've Loved Before (2018)", "Bisbee '17 (2018)", "Western (2018)", "Robin Williams: Come Inside My Mind (2018)", "Hearts Beat Loud (2018)", "Private Life (2018)", "Support the Girls (2018)", "Journey's End (2018)", "Tully (2018)", "Revenge (2018)", "American Animals (2018)", "Dark Money (2018)", "CAM (2018)", "Teen Titans Go! To the Movies (2018)", "Molly's Game (2018)", "Cold War (Zimna wojna) (2018)", 'The Guardians (Les Gardiennes) (2018)', "24 Frames (2018)", "A Simple Favor (2018)", "Halloween (2018)", "Whitney (2018)", "Sicilian Ghost Story (2018)", "Game Night (2018)", "A Prayer Before Dawn (2018)"]

const newBrandName = brandName.map(element => {
  const film = new Object({name: '',preposition: ''})
  if(element.startsWith('A ')){
    film.preposition = 'A '
    film.name = element.replace('A ', '')
  } else if(element.startsWith('The ')){
    film.preposition = 'The '
    film.name = element.replace('The ', '')
  } else {
    film.preposition = ''
    film.name = element
  }
  return film
})
newBrandName.sort((a,b) => a.name > b.name? 1 : -1)
console.log(newBrandName)
