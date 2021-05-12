const { isValidEmail } = require('./index.js');

test('Craig.satchell@gmail.com to a valid email', () => {
  expect(isValidEmail('Craig.satchell@gmail.com')).toBe(true);
});

test('Craig.satchell@gmail.com to a valid email', () => {
   expect(isValidEmail('-diamondjones@gmail.com')).toBe(true);
 });

