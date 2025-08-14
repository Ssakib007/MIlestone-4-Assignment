////// Problem 1  //////
function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "invalid";
  }
  const fine = fare + fare * (20 / 100) + 30;
  return fine;
}


//// Problem 2  ///////

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "invalid";
  }
  let output = "";
  for (const character of str) {
    if (character !== " ") {
      output = output + character;
    }
  }
  let result = output.toUpperCase();
  return result;
}