const gameboard = require('../src/gameboard.js');

test('testing gameboard class', () => {
    let mygameboad= new gameboard(3,4)      
    expect(mygameboad.data).toBe(0);
    
});

test('placing a ship in 0,0 size 1',  () => {
  let mygameboad= new gameboard(3,4)      
  expect(mygameboad.placeShip(0,0,1)).toBe(true);
  expect(mygameboad.gameShips.length).toBe(1);
  expect(mygameboad.gameBoard[0][0]).toBe("O");  
});


test('placing a ship in 3,4 size 1',  () => {
  let mygameboad= new gameboard(3,4)      
  expect(mygameboad.placeShip(3,4,1)).toBe(false);
  expect(mygameboad.gameShips.length).toBe(0);
  expect(mygameboad.gameBoard[0][0]).toBe("F");  
});

test('placing 2 ships in 0,0 size 1',() => {
  let mygameboad= new gameboard(4,4)      
  expect(mygameboad.placeShip(0,0,1)).toBe(true);
  expect(mygameboad.gameShips.length).toBe(1);
  expect(mygameboad.gameBoard[0][0]).toBe("O");  
  expect(mygameboad.placeShip(0,0,1)).toBe(false);
  expect(mygameboad.gameShips.length).toBe(1);
  expect(mygameboad.gameBoard[0][0]).toBe("O");  
});

test('placing 1 ships vertical in 0,0 size 3', () => {
  let mygameboad= new gameboard(4,4)      
  expect(mygameboad.placeShip(0,0,3,"V")).toBe(true);
  expect(mygameboad.gameShips.length).toBe(1);
  expect(mygameboad.gameBoard[0][0]).toBe("O");
  expect(mygameboad.gameBoard[0][1]).toBe("O");
  expect(mygameboad.gameBoard[0][2]).toBe("O");  
  expect(mygameboad.gameBoard[1][0]).toBe("F");  
  expect(mygameboad.gameBoard[2][0]).toBe("F");    
});

test('placing 1 ships horizontal in 0,0 size 3', () => {
  let mygameboad= new gameboard(4,4)      
  expect(mygameboad.placeShip(0,0,3,"H")).toBe(true);
  expect(mygameboad.gameShips.length).toBe(1);
  expect(mygameboad.gameBoard[0][0]).toBe("O");
  expect(mygameboad.gameBoard[1][0]).toBe("O");
  expect(mygameboad.gameBoard[2][0]).toBe("O");  
  expect(mygameboad.gameBoard[0][1]).toBe("F");  
  expect(mygameboad.gameBoard[0][2]).toBe("F");    
});

test('placing 1 ships horizontal in 1,0 size 3', () => {
  let mygameboad= new gameboard(4,4)      
  expect(mygameboad.placeShip(1,0,3,"H")).toBe(true);
  expect(mygameboad.gameShips.length).toBe(1);
  expect(mygameboad.gameBoard[0][0]).toBe("F");
  expect(mygameboad.gameBoard[1][0]).toBe("O");
  expect(mygameboad.gameBoard[2][0]).toBe("O");  
  expect(mygameboad.gameBoard[3][0]).toBe("O");  
  expect(mygameboad.gameBoard[0][2]).toBe("F");    
});