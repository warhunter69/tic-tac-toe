const calculator = (() => {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {
      add,
      sub,
      mul,
      div,
    };
  })();
const Person = (name) => {
const sayName = () => console.log(`my name is ${name}`)
return {sayName}
}

const Nerd = (name) => {
// simply create a person and pull out the sayName function with destructuring assignment syntax!
const {sayName} = Person(name)
const doSomethingNerdy = () => console.log('nerd stuff')
return {sayName, doSomethingNerdy}
}

const jeff = Nerd('jeff')

jeff.sayName() //my name is jeff
jeff.doSomethingNerdy() // nerd stuff

//////////////////////////////////////////////////////////////////////////////////////////

const gameBoard = (() => {
    //game board module
    let game_board = {};
    
    return {
        game_board,
      
    };
  })();

const player = (name) =>{
    const sayName = () => console.log(`my name is ${name}`);
    return {sayName}
}
p1 = player("p1");
p2 = player("p2");