const { BowlingPlayer } = require("./player")


class BowlingGame {
    constructor(players) {
        this.players = []
        for (let i = 0; i < players.length; i++){
            const playerName = players[i]
            this.players.push(new BowlingPlayer(playerName))
        }
}

    
    currentPlayerTurn = () => {
        return this.players[0]
    }
}







module.exports = {
    BowlingGame
}