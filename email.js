// check if email address is in a valid format
function isValidEmail(email) {
   let regex = /\b[a-z0-9/./-]+@[a-z0-9/./-]+[/.][a-z]+/i

   if (email === email.match(regex)[0]) {
      return true;
   } else {
      return false;
   }

}
module.exports = isValidEmail;