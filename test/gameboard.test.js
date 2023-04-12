const gameboard = require('../src/gameboard.js');

test('testing gameboard class', () => {
    let mygameboad= new gameboard(3,4)      
    expect(mygameboad.data).toBe(0);
    
});

test('placing a ship in 0,0 size 1', () => {
  let mygameboad= new gameboard(3,4)      
  expect(mygameboad.placeShip(0,0,1)).toBe(true);
  expect(mygameboad.gameShips.length).toBe(1);
  expect(mygameboad.gameBoard[0][0]).toBe("O");  
});


test('placing a ship in 0,0 size 1', () => {
  let mygameboad= new gameboard(3,4)      
  expect(mygameboad.placeShip(3,4,1)).toBe(false);
  expect(mygameboad.gameShips.length).toBe(0);
  expect(mygameboad.gameBoard[0][0]).toBe("F");  
});