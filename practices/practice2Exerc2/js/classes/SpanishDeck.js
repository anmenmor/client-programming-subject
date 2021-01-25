class SpanishDeck extends Deck{
    constructor(){
        let suits = ["oros", "copas", "bastos", "espadas"]
        let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]
        super(suits , values)
    }

    remove(card) {
        if(card) {
            super.remove(card)
        } else {
            let randomNumber = Math.floor(Math.random() * this.cards.length)
            let cardToRemove = this.cards[randomNumber]
            super.remove(cardToRemove)
        }
    }
}