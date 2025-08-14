/// We have to create a function which will calculate the penalty amount of the train fare of the passengers. Create a function named totalFine which will take fare as the input and will calculate the fine and will return fine.
/// total fine = ticket fare + 20% surcharge + 30 service charge
/// the function will take a positive number as the input
/// if the input is not a number or is negative number, it will return invalid string.
/// Hints -- if the input is 200, then fine is 200 + 200 * (20/100) + 30 = 270

function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "Invalid";
  }
  const fine = fare + fare * (20 / 100) + 30;
  return fine;
}

console.log(totalFine(200));
