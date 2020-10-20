function checkGas(litreLeft, tankCapacity) {
  if (litreLeft < 0) {
    return "error";
  }
  if (litreLeft > tankCapacity) {
    return "High";
  } else if (litreLeft > tankCapacity / 2) {
    return "Medium";
  } else if (litreLeft > tankCapacity / 4) {
    return "Low";
  }
  return "Critical"
}
console.log(checkGas(101, 100));
