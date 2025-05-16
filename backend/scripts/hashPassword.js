// scripts/hashPassword.js
const bcrypt = require("bcryptjs");

const password = "JayKaarthaVeerya8824Arju"; // change this

bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error("❌ Error hashing password:", err);
  } else {
    console.log("✅ Hashed Password:");
    console.log(hash);
  }
});
