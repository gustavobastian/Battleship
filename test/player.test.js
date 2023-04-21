const player = require('../src/player.js');

test.skip('testing player class', () => {    
    let playerLocal= new player("computer",5,5)          
    expect(playerLocal.fillingBoard()).toBe("done");
    let playerLocal2= new player("Pedro",5,5)       
    expect(playerLocal2.fillingBoard()).toBe("done");    
    
});