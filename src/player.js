class BowingPlayer {
    _player = 'Bobo';
    _rolls = 0;

    playerPoints = () => {
        let points = 0
        return points;
    }

    getPlayer = () => {
        return this._player;
    }

    newFrame = () => {
        for (let newFrame = 0; newFrame <= 2; newFrame++) {
            this.rolls = 2;
            return newFrame;
        }
    }
};


module.exports = {
    BowingPlayer
}
