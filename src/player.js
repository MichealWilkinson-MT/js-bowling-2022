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
};


module.exports = {
    BowingPlayer
}
