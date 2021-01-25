const inputCardSuit = document.getElementById('cardSuit');
const inputCardValue = document.getElementById('cardValue');
const textInput = document.getElementById('showDeck');
const clickCreateSpanishDeck = document.getElementById('createSpanishDeck');
const clickAddCard = document.getElementById('addCard');
const clickRemoveCard = document.getElementById('removeCard');
const clickCreateFrenchDeck = document.getElementById('createFrenchDeck');
const clickShuffle = document.getElementById('shuffle');
let deck;

clickCreateSpanishDeck.addEventListener('click', () =>{
    deck = new SpanishDeck();
    textInput.value = '';
})

clickCreateFrenchDeck.addEventListener('click', () =>{
    deck = new FrenchDeck();
    textInput.value = '';
})

clickAddCard.addEventListener('click', () =>{
    let suit = inputCardSuit.value.trim();
    let value = inputCardValue.value.trim();
    let card = new Card(suit,value);
    if(deck.check(card)){
        deck.add(card)
        textInput.value = deck.cards.map(v => `${v.value} ${v.suit}\n`).toString().replaceAll(",", "")
    } else {
        alert("La carta no se puede anadir")
    }
})

clickRemoveCard.addEventListener('click', () =>{
    let suit = inputCardSuit.value.trim();
    let value = inputCardValue.value.trim();
    if(deck.cards.length !== 0) {
        if (suit === '' && value === '' && deck instanceof SpanishDeck) {
            deck.remove();
        } else {
            let card = new Card(suit, value);
            if(deck.check(card)){
                deck.remove(card)
            } else {
                alert("La carta no se puede eliminar")
            }
        }
        textInput.value = deck.cards.map(v => `${v.value} ${v.suit}\n`).toString().replaceAll(",", "");
    } else {
        alert("There´s no cards to remove");
    }
})

clickShuffle.addEventListener('click', () =>{
    deck.shuffle();
    textInput.value = deck.cards.map(v => `${v.value} ${v.suit}\n`).toString().replaceAll(",", "");
})