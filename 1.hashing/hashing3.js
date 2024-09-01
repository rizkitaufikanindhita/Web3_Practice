//What if I ask you that the input string should start with 100xdevs ? How would the code change?

const crypto = require("crypto");

const findWithPrefix = (prefix) => {
  let num = 0;

  while (true) {
    let numString = num.toString();
    let input = "100xdevs" + numString;
    const hash = crypto.createHash("sha256").update(input).digest("hex");
    if (hash.startsWith(prefix)) {
      return { inputhash: input, outputhash: hash };
    }
    num++;
  }
};

console.log(findWithPrefix("00000"));
