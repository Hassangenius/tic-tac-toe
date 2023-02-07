function init(){
  const game = document.querySelectorAll('.cell')
  let player = 'x'
  // let player2 = 'O'
  const winning_Array = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  const winner_message = document.querySelector('.winngmessage')
     // Put some logic here that will change the player to 'o'
    
  

  // game.forEach(g =>  {
  //   g.addEventListener('click', gaming)
  // })



  function gaming1(event){
    if(player === 'x'){
    event.target.textContent = 'x'
    player = 'o' 
     } else { 
      event.target.textContent = 'o'
      player = 'x'
     } 

  }


  game.forEach(g =>  {
    g.addEventListener('click', gaming1, {once : true})
}) 

// function winnner(p) { 
//   if(winning_Array[0] === 'x' && winning_Array[1] === 'x' && winning_Array[2] === 'x'){
//    p.target.textContent ='X is winner'}
//     console.log(winnner)}
//     player ? player ='x' : player ='o'
//   }
//   else{
    
//   }
//   return winner_message
// }
// function gameOver(draw) {
//   if ()
//  else if {winning_Array[0] === 'o' && winning_Array[1] === 'o' && winning_Array[2] === 'o'}
//   return textContent = 'O is winner'


}







window.addEventListener('DOMContentLoaded', init)

// loop through each element in the array "game", and add an event listener to it.