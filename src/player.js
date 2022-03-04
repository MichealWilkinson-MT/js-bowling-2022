class BowingPlayer {
    constructor(player)  {
        this.player = player
        this.points = []
        this.rolls = []
    }
    getPlayer = () => {
        return this.player;
    }
    getPoints = () => {
        return this.points;
    }
    scoreGame(pins) {
        if (this.points.length >= 1) {
            let newScore = this.points[0] + pins
            this.points.push(newScore)
            // this.points.reduce((prev, curr) => prev + curr, 0)
        } else {
            this.points.push(pins)
        }
    }
};


module.exports = {
    BowingPlayer
}
