
class BowlingPlayer {
    score = 0
    balls = []
    getScore = () => {
        return this.score;
    }
    recordBall = (numberOfPins) => {
        this.score += numberOfPins
        this.balls.push(numberOfPins)
    }
    isAStrike = (numberOfPins) => {
        if (this.score == 10) {
            return true;
        }
        return false
    }
    getFramePins = (framenumber) => {
        const balls = this.getBallsInFrame(framenumber)
        let totalScore = 0
        for (let i = 0; i < balls.length; i++){
            totalScore = totalScore + balls[i]
        }
        return totalScore
    }
    isFrameAStrike = (framenumber) => {
        const balls = this.getBallsInFrame(framenumber)
        if (balls[0] == 10){
            return true
        }
        return false

    }

    getBallsInFrame = (framenumber) => {
        let balls = []
        let frame = 1
        let frameball = 1
        for (let i = 0; i < this.balls.length; i++) {
            if (frame == framenumber) {
                balls.push(this.balls[i])
            }

            if (this.balls[i] == 10) {
                frameball = 1
                frame++
                continue
            }

            frameball++
            if (frameball > 2) {
                frame++
                frameball = 1
            }
        }
            return balls
        

    }

    isFrameASpare = (framenumber) => {
            if (this.isFrameAStrike(framenumber) == false && this.getFramePins(framenumber) == 10) {
                return true
            }
            return false

        }




    //gameScoring = () => {
     //   for (let i = 1; i <= 10; i++){

     //   }
//for loop to go through frames
// if statment for strike
//if statment for spare
// way to add the output onto score



    }
module.exports = {
    BowlingPlayer
}


// calculate score
// 