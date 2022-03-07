
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
        for (let i = 0; i < balls.length; i++) {
            totalScore = totalScore + balls[i]
        }
        return totalScore
    }
    isFrameAStrike = (framenumber) => {
        const balls = this.getBallsInFrame(framenumber)
        if (balls[0] == 10) {
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


    isFrameComplete = (framenumber) => {
        for (let i = 1; i <= framenumber; i++) {
            if (this.getBallsInFrame(framenumber).length <= 2) {
                return true
            }
            return false
        }
    }
    //function line 82
    //return true

    frameScoring = (framenumber) => {
        let score = 0
        const balls = this.getBallsInFrame(framenumber)

        if (balls.length < 2 && !this.isFrameAStrike(framenumber)) {
            return "";
        }
        if (this.isFrameASpare(framenumber) && this.getBallsInFrame(framenumber + 1).length < 1) {
            return "/";
        }
        if (this.isFrameAStrike(framenumber) && this.getBallsInFrame(framenumber + 1).length < 2) {
            return "X";
        }
        for (let i = 1; i <= framenumber; i++) {
            score = score + this.getFramePins(i)
            if (this.isFrameASpare(i)) {
                const theNextBall = this.getBallsInFrame(i + 1)[0]
                score = score + theNextBall
            }
            if (this.isFrameAStrike(i)) {
                const theNextFrame = this.getFramePins(i + 1)
                score = score + theNextFrame
            }
        }
        return score
    }
}




//for loop to go through frames
// if statment for strike
//if statment for spare
// way to add the output onto score


module.exports = {
    BowlingPlayer
}


