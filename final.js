////// Problem 1  //////
function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }
  const fine = fare + fare * (20 / 100) + 30;
  return fine;
}

//// Problem 2  ///////

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  let result = str.split(" ").join("").toUpperCase();
  return result;
}
