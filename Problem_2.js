/// build a function named onlyCharacter() which will take string input and will keep only the characters and will convert them into capital letters. function will also remove all the spaces. the input string may have spaces , capital, and small letters.
/// if the input is not string, it will return "invalid" string
/// sample input "ha ck m e 1 @ru.c n" output HACKME1@RU.CN
///sample input "serv er:: Dow n" output SERVER::DOWN
/// sample input true output invalid
/// sample input ["hack", "me"] output invalid

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  }
  //   let output = "";
  //   for (const character of str) {
  //     if (character !== " ") {
  //       output = output + character;
  //     }
  //   }
  let result = str.split(" ").join("").toUpperCase();
  return result;
}

console.log(onlyCharacter("  h e llo wor   ld"));
