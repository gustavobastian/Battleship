const gameboard = require('../src/gameboard.js');

test('testing gameboard class', () => {
    let mygameboad= new gameboard(3,4)  
    mygameboad.printGameBoard();
    expect(mygameboad.data).toBe(0);
    
  });
  