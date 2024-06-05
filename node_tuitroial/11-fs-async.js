const { readFileSync, writeFileSync } = require("fs");
console.log("start");
readFileSync("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFileSync(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      { flag: "a" }
    );
    console.log("done with this task");
  });
});
