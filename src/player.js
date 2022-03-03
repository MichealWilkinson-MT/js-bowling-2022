class BowlingPlayer {
score = 0
totalFrame = 0
getScore = () => {
    return this.score;
}
recordBall = (numberOfPins) => {
    this.score += numberOfPins
}
isAStrike = (numberOfPins) => {
    if (this.score == 10){
        return true;
    }
    return false
    }
}

module.exports = {
    BowlingPlayer
}