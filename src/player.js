
class BowlingPlayer {
score = 0
totalFrame = 0
balls = []
getScore = () => {
    return this.score;
}
recordBall = (numberOfPins) => {
    this.score += numberOfPins
    this.balls.push(numberOfPins)
}
isAStrike = (numberOfPins) => {
    if (this.score == 10){
        return true;
    }
    return false
    }
getFramePins = (framenumber) => {
    let score = 0
    let frame = 1
    let frameball = 1
    for (let i = 0; i < this.balls.length; i++){
        if (frame == framenumber){
            score = score + this.balls[i]
        } 
        if (this.balls[i] == 10){
            frameball = 1
            frame ++
            continue
        }
        frameball ++ 
        if (frameball > 2){
            frame ++
            frameball = 1
        }
    } 
    return score
}
}  

module.exports = {
    BowlingPlayer
}


//identify is a frame is a strike or spare (2x function)

//calculate score