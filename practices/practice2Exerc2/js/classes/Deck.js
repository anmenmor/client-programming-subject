class Deck{
    constructor(possibleCardSuits, possibleCardValues){
        this.cards = []
        this.possibleCardSuits = possibleCardSuits
        this.possibleCardValues = possibleCardValues
    }

    check(card) {
        return this.possibleCardSuits.includes(card.suit) && this.possibleCardValues.includes(card.value)
    }

    add(card) {
        this.cards.push(card)
    }

    remove(card){
        this.cards = this.cards.filter(element => element.value !== card.value || element.suit !== card.suit)
    }

    shuffle(){
        let currentIndex = this.cards.length; 
        let temporaryValue; 
        let randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = this.cards[currentIndex];
          this.cards[currentIndex] = this.cards[randomIndex];
          this.cards[randomIndex] = temporaryValue;
        }
    }
}