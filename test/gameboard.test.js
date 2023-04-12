const gameboard = require('../src/gameboard.js');

test('testing gameboard class', () => {
    let mygameboad= new gameboard(3,4)      
    expect(mygameboad.data).toBe(0);
    
  });
  