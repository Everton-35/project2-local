let cards = [];
let suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];
let playerTotal = 0;
let dealerTotal = 0;
    
function fillTheDeck() {  
    for (let cardNum = 1; cardNum <= 13; cardNum++) {
        for (let i=0; i < suits.length; i++) {
            cards.push(cardNum + ' ' + suits[i]);
            }   
    }
}
  

function givePlayerACard() {

  let cardIndex = Math.floor(Math.random() * cards.length);
  let cardPicked = cards[cardIndex];
  let showMe = cards.splice(cardIndex, 1);  //not sure i need to store these
  
  let cardSplit = cardPicked.split(" ");
  playerTotal = playerTotal + parseInt(cardSplit[0]);
  
  return cardPicked;
};



function giveDealerACard() {

  let cardIndex = Math.floor(Math.random() * cards.length);
  let cardPicked = cards[cardIndex];
  let showMe = cards.splice(cardIndex, 1);  //not sure i need to store these
 
  let cardSplit = cardPicked.split(" ");
  dealerTotal = dealerTotal + parseInt(cardSplit[0]);
  
  return cardPicked;
}

/*
function compareScores() {
  if (playerTotal <= dealerTotal) {
    ask via screen(button)  twist? or stick?
  }
} else {
   ask the same question of the dealer
   via onscreen button
}
*/


fillTheDeck();

let firstCard = givePlayerACard();
document.getElementById("pCard1").innerHTML = firstCard;

let secondCard = givePlayerACard();
document.getElementById("pCard2").innerHTML = secondCard;



let writePlayersTotal = playerTotal;
document.getElementById("pTotal").innerHTML = "The Players score is  " + writePlayersTotal;

if (playerTotal === 21) {
  console.log('You\'ve won!');
}

let dealersFirstCard = giveDealerACard();
document.getElementById("dCard1").innerHTML = dealersFirstCard;

let dealersSecondCard = giveDealerACard();
document.getElementById("dCard2").innerHTML = dealersSecondCard;

let writeDealersTotal = dealerTotal;
document.getElementById("dTotal").innerHTML = "The Dealers score is  " + writeDealersTotal;

if (dealerTotal === 21) {
  console.log('You\'ve won!');
}













