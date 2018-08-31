const character ='https://anapioficeandfire.com/api/characters';
const house = 'https://anapioficeandfire.com/api/houses';
const firstFavorite = document.querySelectorAll('.favorites');
const theirHouse = document.querySelectorAll('.houses')





axios.get(`${character}/name`)
.then(function(response){
  console.log(response)

})


  //firstFavorite.innerHTML = character.value.innerHTML
