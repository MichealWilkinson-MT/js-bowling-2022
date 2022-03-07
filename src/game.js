const { BowlingPlayer } = require("./player")


class BowlingGame {
    currentPlayerID = 0
    framenumber = 1
    constructor(players) {
        this.players = []
        for (let i = 0; i < players.length; i++){
            const playerName = players[i]
            this.players.push(new BowlingPlayer(playerName))
        }
}
    currentPlayerTurn = () => {
        return this.players[this.currentPlayerID]
    }
    recordScore = (score) => {

         const isValid = this.players[this.currentPlayerID].recordBall(score)
        
        if (this.players[this.currentPlayerID].isFrameComplete(this.framenumber)) {
            this.currentPlayerID ++
        }
        return isValid
   }
    
}







module.exports = {
    BowlingGame
}