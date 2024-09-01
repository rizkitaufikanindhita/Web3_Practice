// You will have to brute force until you find a value that starts with 00000

const crypto = require("crypto");

const findWithPrefix = (prefix) => {
  let num = 0;

  while (true) {
    let numString = num.toString();
    let input = numString;
    const hash = crypto.createHash("sha256").update(input).digest("hex");
    if (hash.startsWith(prefix)) {
      return { inputhash: input, outputhash: hash };
    }
    num++;
  }
};

console.log(findWithPrefix("00000"));
