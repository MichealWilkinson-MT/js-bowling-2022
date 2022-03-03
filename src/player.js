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
        this.points.push(pins)
    }
};


module.exports = {
    BowingPlayer
}
