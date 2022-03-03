class BowlingPlayer {
score = 0
getScore = () => {
    return this.score;
}
recordBall = (numberOfPins) => {
    this.score += numberOfPins
}
isAStrike = (numberOfPins) => {
    if (numberOfPins == 10){
        return true;
    }
    else{
    return false;
    }
}
}

module.exports = {
    BowlingPlayer
}