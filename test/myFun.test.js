const myFun = require('../src/myFun.js');

test('testing myFun', () => {
  expect(myFun()).toBe("hello my Fun");
});
