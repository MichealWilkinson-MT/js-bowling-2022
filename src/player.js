class BowingPlayer {
    constructor(player, points)  {
        this.player = player
        this.points = points
    }
    getPlayer = () => {
        return this.player;
    }
    getPoints = () => {
        this.points = []
        return this.points;
    }
    // scoreGame = (pins) => {
    //     this.points += pins;
    //     return this.points.push(pins);
    // }
};


module.exports = {
    BowingPlayer
}
