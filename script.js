
document.addEventListener('DOMContentLoaded', function() {
    // let game_board_div = document.querySelector('#gameBoard');
    // console.log(game_board_div)
     for(let i = 0 ; i<9 ; i++){
       let button = document.querySelector(`#B${i}`);
       button.addEventListener('click',()=>{playGame.markBoard(`B${i}`)})
    //     let board = document.createElement('BUTTON');
    //     board.id = `board${i}`;
    //     console.log(board)
    //     game_board_div.append(board);
     }
});
const gameBoard = (() => {
    //game board module
    
    let game_board = {};
    
    return {
        game_board,
      
    };
  })();

const player = (name,sign) =>{
    const sayName = () => console.log(`my name is ${name} mark ${ marka }`);
    const marka = sign;
    return {sayName,marka}
}


const playGame = (()=>{
  const p1 = player("p1Name","X");
  const p2 = player("p2Name","O");
  let x = 5;
  let turn = 1;
  let board = {};
  const test = ()=> { x = x +1;
    console.log(p1.marka,x);
   
    
  };
  const markBoard =(Bid) =>{
    button = document.querySelector(`#${Bid}`);
    if(turn === 1){
      if(button.innerHTML === ""){
      button.innerHTML = p1.marka;
      turn=turn+1;
      }
    }else if(turn === 2){
      if(button.innerHTML === ""){
        button.innerHTML = p2.marka;
        turn = turn - 1;
      }
    }

  };
  
  //const p1Turn = ()
  //const p2Turn = ()

  // manages game
  return{test,x,markBoard}
})();

//p1 = player("p1Name","X")
//p2 = player("p2Name","O")
playGame.test()
playGame.test()
playGame.test()

console.log(playGame.x)