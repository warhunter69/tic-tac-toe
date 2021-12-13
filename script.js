
document.addEventListener('DOMContentLoaded', function() {
    // let game_board_div = document.querySelector('#gameBoard');
    // console.log(game_board_div)
    for(let i = 0 ; i<9 ; i++){
      let button = document.querySelector(`#B${i}`);
      button.addEventListener('click',()=>{playGame.markBoard(`B${i}`)});
    

    }
    let a = document.querySelector('#restart');
    a.addEventListener('click',()=>{playGame.restart()});
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
    const sayName = () => {console.log(`my name is ${name} mark ${ marka }`);}
    const playerName = name;
    const marka = sign;
    let board = [];
    const checkVictory = () =>{
      //check if player won
      console.log(playerName,board)
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
    return {sayName,marka,board,playerName}
}


const playGame = (()=>{
  const p1 = player("p1Name","X");
  const p2 = player("p2Name","O");
  let x = 5;
  let turn = 1;
  const turn_div = document.querySelector("#turn");
  const test = ()=> { x = x +1;
    console.log(p1.marka,x);
   
    
  };
  const checkVictory = (player) =>{
    //check if player won
    console.log(player.playerName,player.board)
    if(player.board.includes("B0") && player.board.includes("B1") && player.board.includes("B2")){
      //win
      p1.board = []
      p2.board = []
      return true;
    }else if(player.board.includes("B3") && player.board.includes("B4") && player.board.includes("B5")){
      p1.board = []
      p2.board = []
      return true;
    }else if(player.board.includes("B6") && player.board.includes("B7") && player.board.includes("B8")){
      p1.board = []
      p2.board = []
      return true;
    }else if(player.board.includes("B0") && player.board.includes("B3") && player.board.includes("B6")){
      p1.board = []
      p2.board = []
      return true;
    }else if(player.board.includes("B1") && player.board.includes("B4") && player.board.includes("B7")){
      p1.board = []
      p2.board = []
      return true;
    }else if(player.board.includes("B2") && player.board.includes("B5") && player.board.includes("B8")){
      p1.board = []
      p2.board = []
      return true;
    }else if(player.board.includes("B0") && player.board.includes("B4") && player.board.includes("B8")){
      p1.board = []
      p2.board = []
      return true;
    }else if(player.board.includes("B2") && player.board.includes("B4") && player.board.includes("B6")){
      p1.board = []
      p2.board = []
      return true;
    }else{
      //not yet
      return false;
    }
  }
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
      if(checkVictory(p1)){
        endGame(p1.playerName);
       
        
      }
      }
    }else if(turn === 2){
      if(!(p1.board.includes(button.id)) && !(p2.board.includes(button.id))){
        button.innerHTML = p2.marka;
        turn = turn - 1;
        p2.board.push(button.id);
        if(checkVictory(p2)){
          endGame(p2.playerName);
         
          
        }
      }
    }

  };
  
  const restart = () =>{

   
    for(let i = 0 ; i<9 ; i++){
      let button = document.querySelector(`#B${i}`);
      button.innerHTML ='';
      button.disabled = false;
    }
    let winner = document.querySelector(`#winner`);
    winner.innerHTML = "";
  }
  return{markBoard,restart}
})();
