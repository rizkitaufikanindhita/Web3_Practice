// hashing
// tidak bisa di unhashing

const crypto = require("crypto");

const input = "rizki";
const hash = crypto.createHash("sha256").update(input).digest("hex");

console.log(hash);

// result
// 6aa107b5118bc17ddfaf4b84f8efc7e76711b5e6e851ac61b7bf8f3557313a22
