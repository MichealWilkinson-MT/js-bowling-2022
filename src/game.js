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
        for (let i = 0; i < players.length; i++) {
            const playerName = players[i]
            this.players.push(new BowlingPlayer(playerName))
        }
    }

    /**
     * Returns the current player
     * @returns {BowlingPlayer}
     */
    currentPlayerTurn = () => {
        return this.players[this.currentPlayerID]
    }

    /**
     * Records a ball for the current player and advances the 
     * player turn / frame as appropriate
     * 
     * @param {number} score 
     * @returns {number}
     */
    recordScore = (score) => {

        const isValid = this.players[this.currentPlayerID].recordBall(score)

        if (this.players[this.currentPlayerID].isFrameComplete(this.framenumber)) {
            this.currentPlayerID++
            if (this.currentPlayerID >= this.players.length) {
                this.currentPlayerID = 0
                this.framenumber++
            }
        }

        return isValid
    }

    /**
     * Determines if the game is over
     * @returns {boolean}
     */
    isGameFinished = () => {
        return this.framenumber > 10
    }

    /**
     * Determines the winners of the game, if the game is not over the result is empty
     * @returns {BowlingPlayer[]}
     */
    getWinners = () => {
        if (!this.isGameFinished()) {
            return []
        }
        const topScore = this.players.reduce((previousValue, thisPlayer) => {
            return (Math.max(thisPlayer.cumulativeFrameScoring(10), previousValue))
        }, 0
        );

        return this.players.filter((player) => {
            return player.cumulativeFrameScoring(10) == topScore
        });
    }

}

module.exports = {
    BowlingGame
}