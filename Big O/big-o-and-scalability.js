const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(1000000).fill("nemo");

function findNemo(arr) {
  const t0 = performance.now();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") console.log("Found Nemo!");
  }
  const t1 = performance.now();
  console.log("Call to find nemo took " + (t1 - t0) + " miliseconds");
}

findNemo(large);
