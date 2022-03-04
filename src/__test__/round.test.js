const { frame }  = require('../round.js')

describe('Retrieves score if pins are 0', () => {
    it('Retrieves score of 0', () => {
        const currentPoints = new frame();
        currentPoints.scoreGame(0)
        expect(currentPoints.getCurrentPoints()).toEqual([0])
    })
})

describe('Retrieves score if pins are 2', () => {
    it('Retrieves score of 2', () => {
        const currentPoints = new frame();
        currentPoints.scoreGame(1)
        expect(currentPoints.getCurrentPoints()).toEqual([1])
    })
})