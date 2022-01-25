const bcrypt = require("bcryptjs");

function hashPassword(originalPass, hashingMethod) {
  bcrypt.genSalt(10, (error, salt) => {
    if (error) {
      console.log(error.message);
    }
    bcrypt.hash(originalPass, salt, hashingMethod);
  });
}

module.exports = hashPassword;
