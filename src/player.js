class BowingPlayer {
    constructor(player)  {
        this.player = player
        this.points = []
    }
    getPlayer = () => {
        return this.player;
    }
    getPoints = () => {
        return this.points;
    }
    scoreGame(pins) {
        let newScore = this.points + pins;
        this.points.push(newScore)
        return this.points
    }
};


module.exports = {
    BowingPlayer
}
