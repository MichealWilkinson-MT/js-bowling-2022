class BowlingPlayer {
score = 0
getScore = () => {
    return this.score;
}
recordBall = (numberOfPins) => {
    this.score += numberOfPins
}
}

module.exports = {
    BowlingPlayer
}