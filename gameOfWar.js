// We need a deck class with variable that is an array

class Deck{
    constructor(){
        this.deck = [];
    }

//a method of the deck to create a deck of 52 cards
    createDeck(){
        var suits = ['Spade', 'Club', 'Heart', 'Diamond'];
        var values = [ 2,3,4,5,6,7,8,9,10,11,12,13,14]
        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < values.length; x++) {
                let newCard = { Value: values[x], Suit: suits[i] };
                this.deck.push(newCard);
            }
        }
    }
//a method to shuffle the deck
    shuffleDeck(){
        let i = 0;
        let j = 0;
        let temp = 0;
        for (i = this.deck.length - 1 ; i > 0;i--){
            j = Math.floor(Math.random() * (i+1));
            temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }
    //a method that deals a random card
    dealCard(){
        let index = Math.floor(Math.random()*this.deck.length);
        let card = this.deck[index];
        this.deck.splice(index,1);
        return card;
    }
}

// making a player class that has score, and cards as variables
class Player{ 
    constructor(){
        this.score = 0;
        this.cards=[] ;
    }

    //takes cards being dealt from the deck
    takeACard(card){
        this.cards.push(card);
    }
    //play a card from each player and updates hand
    playCard(){
        return this.cards.pop();
    }
    //updates score
    updateScore(){
        this.score++;
    }
}
//create the class to play the game

//create a class to run the game that has two players and a deck of cards
class Game{
    constructor(){
        this.player1= new Player;
        this.player2 = new Player;
        this.deck = new Deck;
    }

    start(){
        alert(`I DECLARE WAR!`)
//shuffle the deck
       const newDeck= this.deck
       newDeck.createDeck();
       newDeck.shuffleDeck();
       console.log(newDeck);
//deal the cards
        for(let i = 0; i < 26; i++){
            let dealtCard= newDeck.dealCard();
            this.player1.takeACard(dealtCard);
            dealtCard = newDeck.dealCard();
            this.player2.takeACard(dealtCard);
        }
//players play their card
        for (let i =0; i <26; i++){
            let player1Hand= this.player1.playCard();
            let player2Hand= this.player2.playCard();
//log out each players card
        console.log(player1Hand, player2Hand);
//assign points to the winner and display current points
            if(player1Hand.Value > player2Hand.Value){
                this.player1.updateScore();
                console.log('Player 1 Wins this hand!');
            }
            else if (player1Hand.Value < player2Hand.Value){
                this.player2.updateScore();
                console.log('Player 2 Wins this hand!')
            }
            else{console.log('You tied! Play again')}
            console.log(`Player 1 has: ${this.player1.score} points, Player 2 has: ${this.player2.score} points`)
        }

//declare a winner
        if(this.player1.score> this.player2.score){
            alert(`Player 1 is VICTORIOUS`)
        }
        else{ alert(`Player 2 is VICTORIOUS`)}

        alert('GAME OVER!!');

    }





}

//Start the Game
let game= new Game;
game.start();
