
document.addEventListener('DOMContentLoaded', function() {
    // let game_board_div = document.querySelector('#gameBoard');
    // console.log(game_board_div)
     for(let i = 0 ; i<9 ; i++){
       let button = document.querySelector(`#B${i}`);
       button.addEventListener('click',()=>{mark(`B${i}`,sign)})
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

function mark(Bid,sign){
  button = document.querySelector(`#${Bid}`);
  button.innerHTML = sign;
}
const playGame = (()=>{
  const p1 = player("p1Name","X")
  const p2 = player("p2Name","O")
  const test = ()=> {console.log(p1.marka,p2.marka)};
  //const p1Turn = ()
  //const p2Turn = ()

  // manages game
  return{test,p1}
})();

//p1 = player("p1Name","X")
//p2 = player("p2Name","O")
playGame.test()