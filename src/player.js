
class BowlingPlayer {
    
    balls = []
    /**
     * constructor for player name
     */
    constructor(playerName) {
    this.name = playerName
    }
    /**
     * returns the score
     * @returns {number}
     */
    getScore = () => {
        return this.score;
    }
    /**
     * Makes sure the number of pins scored is between 0-10
     * @param {number} numberOfPins 
     * @returns {boolean}
     */
    recordBall = (numberOfPins) => {
        if (numberOfPins > 10 || numberOfPins < 0) {
            return false
        }
        let frame = 1
        let frameball = 1
        // for loop to check the frames. If its a strike advance the frame and if they have had two bowls advance the frame
        for (let i = 0; i < this.balls.length; i++) {
    
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
        if (!this.isFrameComplete(frame) && (this.getFramePins(frame) + numberOfPins > 10)){
            return false
        }
            
        //adds the number of pins scored to the array balls
        this.balls.push(numberOfPins)
        return true
    }
    /**
     * This adds the number of pins in the current frame to the total score
     * @param {number} framenumber 
     * @returns {number}
     */
    getFramePins = (framenumber) => {
        const balls = this.getBallsInFrame(framenumber)
        let totalScore = 0
        for (let i = 0; i < balls.length; i++) {
            totalScore = totalScore + balls[i]
        }
        return totalScore
    }
    /**
     * Determines if the frame is a strike
     * @param {number} framenumber 
     * @returns {boolean}
     */
    isFrameAStrike = (framenumber) => {
        const balls = this.getBallsInFrame(framenumber)
        if (balls[0] == 10) {
            return true
        }
        return false

    }
/**
 * This checks that both balls have been thrown in a frame then advances
 * @param {number} framenumber 
 * @returns array of numbers
 */
    getBallsInFrame = (framenumber) => {
        let balls = []
        let frame = 1
        let frameball = 1
        for (let i = 0; i < this.balls.length; i++) {
            if (frame > framenumber) {
                break
            }
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
    /**
     * checks if the frame is a spare
     * @param {number} framenumber 
     * @returns {boolean}
     */
    isFrameASpare = (framenumber) => {
        if (this.isFrameAStrike(framenumber) == false && this.getFramePins(framenumber) == 10) {
            return true
        }
        return false

    }

    /**
     * checks if the frame has been completed
     * @param {number} framenumber 
     * @returns {boolean}
     */
    isFrameComplete = (framenumber) => {
        if (this.getBallsInFrame(framenumber).length == 2 || this.isFrameAStrike(framenumber)) {
                return true
            }
            return false
        }
    /**
     * Adds the scoring together
     * @param {number} framenumber 
     * @returns {number}
     */
    frameScoring = (framenumber) => {
        let score = 0
        const balls = this.getBallsInFrame(framenumber)
        // if the next frame isnt completed return a string
        if (balls.length < 2 && !this.isFrameAStrike(framenumber)) {
            return "";
        }
        // if they have bowled a spare and not completed the next frame yet return a /
        if (this.isFrameASpare(framenumber) && this.getBallsInFrame(framenumber + 1).length < 1) {
            return "/";
        }
        // if they have bowled a strike and not completed the next frame yet return a X
        if (this.isFrameAStrike(framenumber) && !this.isFrameComplete(framenumber + 1)) {
            return "X";
        }
        // if they have bowled two strike and not completed the next frame yet return a X for both
        if (this.isFrameAStrike(framenumber) && this.isFrameAStrike(framenumber + 1) && !this.isFrameComplete(framenumber + 2)) {
            return "X";
        }
        // for loop to add the additional scores to score
        for (let i = 1; i <= framenumber; i++) {
            score = score + this.getFramePins(i)
            // if its a spare it adds the next bowl to score
            if (this.isFrameASpare(i)) {
                const theNextBall = this.getBallsInFrame(i + 1)[0]
                score = score + theNextBall
            }
            // if its a strike it adds the next frame to the score
            if (this.isFrameAStrike(i)) {
                const theNextFrame = this.getFramePins(i + 1)
                score = score + theNextFrame
                // if they have thrown two strikes it adds pins from the frame + 2
                if (this.isFrameAStrike(i + 1)) {
                    const theFrameAfter = this.getFramePins(i + 2)
                    score = score + theFrameAfter
                }
                    
            }
        }
        return score
    }
}



module.exports = {
    BowlingPlayer
}


