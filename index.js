// Code your solutions in this file
function writeCards(names, occasion) {
  let returnMessages = [];
  for (let i = 0; i < names.length; i++) {
    returnMessages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
  }
  return returnMessages;
}

function countdown(number){
  while (number >= 0){
    console.log(number);
    number--;
  }
