class BowingPlayer {
    playerPoints = () => {
        let points = 0
        return points;
    }

    _player = 'Bobo';
    getPlayer = () => {
        return this._player;
    }

    newFrame = () => {
        for (let newFrame = 0; newFrame <= 2; newFrame++) {
            return newFrame;
        }
    }
};


module.exports = {
    BowingPlayer
}
