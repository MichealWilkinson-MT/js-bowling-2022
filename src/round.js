class frame {
    constructor()  {
        this.currentPoints = []
    }
    getCurrentPoints = () => {
        return this.currentPoints;
    }
    scoreGame(pins) {
        if (this.currentPoints.length >= 1) {
            let newScore = this.currentPoints[0] += pins
            this.currentPoints.push(newScore)
            // this.points.reduce((prev, curr) => prev + curr, 0)
        } else {
            this.currentPoints.push(pins)
        }
    }
}

module.exports = { frame }