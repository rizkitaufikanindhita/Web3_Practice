const crypto = require("crypto");

const findWithPrefix = (prefix) => {
  let num = 0;

  while (true) {
    let numString = num.toString();
    let input =
      `
      harkirat => Raman | Rs 100
Ram => Ankit | Rs 10
      ` + numString;
    const hash = crypto.createHash("sha256").update(input).digest("hex");
    if (hash.startsWith(prefix)) {
      return { nonce: numString, outputhash: hash };
    }
    num++;
  }
};

console.log(findWithPrefix("00000"));
