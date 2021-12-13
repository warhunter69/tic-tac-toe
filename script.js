
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
    value = 0;
    return {
        game_board,
      
    };
  })();

const player = (name,sign) =>{
    const sayName = () => console.log(`my name is ${name} mark ${ marka }`);
    const playerName = name;
    const marka = sign;
    const board = [];
    const checkVictory = () =>{
      //check if player won
      if(board.includes("B0") && board.includes("B1") && board.includes("B2")){
        //win
        return true;
      }else if(board.includes("B3") && board.includes("B4") && board.includes("B5")){
        return true;
      }else if(board.includes("B6") && board.includes("B7") && board.includes("B8")){
        return true;
      }else if(board.includes("B0") && board.includes("B3") && board.includes("B6")){
        return true;
      }else if(board.includes("B1") && board.includes("B4") && board.includes("B7")){
        return true;
      }else if(board.includes("B2") && board.includes("B5") && board.includes("B8")){
        return true;
      }else if(board.includes("B0") && board.includes("B4") && board.includes("B8")){
        return true;
      }else if(board.includes("B2") && board.includes("B4") && board.includes("B6")){
        return true;
      }else{
        //not yet
        return false;
      }
    }
    return {sayName,marka,board,checkVictory,playerName}
}


const playGame = (()=>{
  const p1 = player("p1Name","X");
  const p2 = player("p2Name","O");
  let x = 5;
  let turn = 1;
  let board1 = [];
  let board2 = [];
  const test = ()=> { x = x +1;
    console.log(p1.marka,x);
   
    
  };
  const endGame = (name) =>{
    for(let i = 0 ; i<9 ; i++){
      let button = document.querySelector(`#B${i}`);
      button.disabled = true;
    }
    let winner = document.querySelector(`#winner`);
    winner.innerHTML = name;

  };
  const markBoard =(Bid) =>{
    button = document.querySelector(`#${Bid}`);
    if(turn === 1){
      if(!(p1.board.includes(button.id)) && !(p2.board.includes(button.id))){
      button.innerHTML = p1.marka;
      turn=turn+1;
      p1.board.push(button.id);
      console.log(p1.checkVictory())
      if(p1.checkVictory()){
        endGame(p1.playerName)
      }
      }
    }else if(turn === 2){
      if(!(p1.board.includes(button.id)) && !(p2.board.includes(button.id))){
        button.innerHTML = p2.marka;
        turn = turn - 1;
        p2.board.push(button.id);
        if(p2.checkVictory()){
          endGame(p2.playerName)
        }
      }
    }

  };
  
  
  return{test,x,markBoard}
})();

//p1 = player("p1Name","X")
//p2 = player("p2Name","O")
playGame.test()
playGame.test()
playGame.test()

console.log(playGame.x)