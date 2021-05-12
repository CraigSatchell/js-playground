const  isValidEmail = require('./email.js');

test('Craig.satchell@gmail.com to a valid email', () => {
  expect(isValidEmail('Craig.satchell@gmail.com')).toBeTruthy();
});

test('-diamondjones@gmail.comm to a valid email', () => {
   expect(isValidEmail('-diamondjones@gmail.com')).not.toBeTruthy();
 });
