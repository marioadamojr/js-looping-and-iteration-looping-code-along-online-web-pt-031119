// Code your solutions in this file
function writeCards(names, occasion) {
  let returnMessages = [];
  for (let i = 0; i < cards.length; i++) {
    returnMessages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
  }
  return returnMessages;
}
