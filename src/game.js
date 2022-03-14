const { BowlingPlayer } = require("./player")

class BowlingGame {
    currentPlayerID = 0
    framenumber = 1
    /**
     * constructor
     * @param {string[]} players 
     */
    constructor(players) {
        this.players = []
        for (let i = 0; i < players.length; i++){
            const playerName = players[i]
            this.players.push(new BowlingPlayer(playerName))
        }
    }
    /**
     * checks the current player turn
     * @returns {BowlingPlayer}
     */
    currentPlayerTurn = () => {
        return this.players[this.currentPlayerID]
    }
    /**
     * if the players have all had a go it resets to the first players turn
     * @param {number} score 
     * @returns {number}
     */
    recordScore = (score) => {

         const isValid = this.players[this.currentPlayerID].recordBall(score)
        
        if (this.players[this.currentPlayerID].isFrameComplete(this.framenumber)) {
            this.currentPlayerID++
            if (this.currentPlayerID >= this.players.length) {
                this.currentPlayerID = 0
                this.framenumber ++
            }
        }

        return isValid
    }
    /**
     * Function to see if the game is over
     * @returns {boolean}
     */
    isGameFinished = () => {
        if (this.players[this.currentPlayerID].isFrameComplete(this.framenumber < 11 )) {
            return true 
        }
        return false
    }
    
}







module.exports = {
    BowlingGame
}