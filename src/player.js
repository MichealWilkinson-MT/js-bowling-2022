
class BowlingPlayer {

    balls = []
    /**
     * constructor for player class
     * @param {string} playerName
     */
    constructor(playerName) {
        this.name = playerName
    }

    /**
     * Records a ball thrown by the player, ensures that the score for the frame is valid (IE: Between 0 and 10), will not record the value if the ball is invalid
     * @param {number} numberOfPins 
     * @returns {boolean} false if the total supplied is invalid
     */
    recordBall = (numberOfPins) => {
        if (numberOfPins > 10 || numberOfPins < 0) {
            return false
        }
        let frame = this.getCurrentFrame();
        if (this.getFramePins(frame) + numberOfPins > 10) {
            if (!(frame == 10 && (this.isFrameASpare(frame) || this.isFrameAStrike(frame)))) {
                return false
            }
        }

        //adds the number of pins scored to the array balls
        this.balls.push(numberOfPins)
        return true
    }

    /**
    * Gets the current frame number IE: the lowest incomplete framenumber 
    * 
    * @returns {number}
    */
    getCurrentFrame = () => {
        let frame = 1
        let frameball = 1
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
        if (this.isFrameComplete(frame)) {
            frame++
        }
        return Math.min(10, frame)
    }

    /**
     * This gets the number of pins hit total in a given frame
     * 
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
     * Gets the balls thrown in a given frame, will return an array with between 0 and 2 
     * elements depending on how many balls were thrown for the frame
     * 
     * @param {number} framenumber 
     * @returns {number[]}
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
        // if we're in frame 10 we need to perform different checks (frame 10 can have upto 3 balls...)
        if (framenumber == 10) {
            // Do they deserve an extra frame?
            if (this.isFrameAStrike(10)) {
                // The do and the extra frame is incomplete
                if (!this.isFrameComplete(11)) {
                    return false;
                }
                if (this.isFrameAStrike(11)) {
                    return this.getBallsInFrame(12).length > 0
                }
                return true
            }
            if (this.isFrameASpare(10)) {
                return this.getBallsInFrame(11).length > 0
            }
        }
        if (this.getBallsInFrame(framenumber).length == 2 || this.isFrameAStrike(framenumber)) {
            return true
        }
        return false
    }

    /**
     * Determines the cumulative score achived by a given frame in the game
     * @param {number} framenumber 
     * @returns {number}
     */
    cumulativeFrameScoring = (framenumber) => {
        let score = 0
        // for loop to add the additional scores to score
        for (let i = 1; i <= framenumber; i++) {
            const framescore = this.getFrameScore(i);
            if (framescore == "" || framescore == "/" || framescore == "X") {
                return framescore;
            }
            score = score + framescore;
        }
        return score
    }

    /**
    * Determines the score achived in a given frame in the game
    * @param {number} framenumber 
    * @returns {number}
    */
    getFrameScore = (framenumber) => {
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
        if (framenumber == 10) {
            if (this.isFrameAStrike(10) && this.isFrameAStrike(11) && this.getBallsInFrame(12).length == 0) {
                return "X";
            }
        } else {
            // if they have bowled two strike and not completed the next frame yet return a X for both
            if (this.isFrameAStrike(framenumber) && this.isFrameAStrike(framenumber + 1) && !this.isFrameComplete(framenumber + 2)) {
                return "X";
            }
        }

        score = score + this.getFramePins(framenumber)
        // if its a spare it adds the next bowl to score
        if (this.isFrameASpare(framenumber)) {
            const theNextBall = this.getBallsInFrame(framenumber + 1)[0]
            score = score + theNextBall
        }
        // if its a strike it adds the next frame to the score
        if (this.isFrameAStrike(framenumber)) {
            const theNextFrame = this.getFramePins(framenumber + 1)
            score = score + theNextFrame
            // if they have thrown two strikes it adds pins from the frame + 2
            if (this.isFrameAStrike(framenumber + 1)) {
                const theFrameAfter = this.getFramePins(framenumber + 2)
                score = score + theFrameAfter
            }

        }

        return score
    }
}


module.exports = {
    BowlingPlayer
}
