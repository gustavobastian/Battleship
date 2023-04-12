const ship = require('../src/ship.js');

test('testing ship class', () => {
  let myShip= new ship(3)  
  expect(myShip.isSunk()).toBe(false);
  expect(myShip.shipLength).toBe(3);
  expect(myShip.hit()).toBe(true);
  expect(myShip.isSunk()).toBe(false);
  expect(myShip.hit()).toBe(true);
  expect(myShip.isSunk()).toBe(false);
  expect(myShip.hit()).toBe(true);
  expect(myShip.isSunk()).toBe(true);
  expect(myShip.hit()).toBe(false);
});
