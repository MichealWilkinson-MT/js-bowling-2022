const {
    BowingPlayer
} = require('../player');

describe('Retrieves Player Name', () => {
    it('Retrieves Player Name', () => {
        const game = new BowingPlayer('Wes');
    expect(game.getPlayer()).toEqual('Wes');
    })
})

describe('Retrieves Player Points', ()  => {
    it('Retrieves Player Points', ()  => {
        const currentPoints = new BowingPlayer();
    expect(currentPoints.getPoints()).toEqual([]);
    })
})

describe('Retrieves score if pins are 0', () => {
    it('Retrieves score of 0', () => {
        const currentPoints = new BowingPlayer([]);
        currentPoints.scoreGame(0)
        expect(currentPoints.getPoints()).toEqual([])
    })
})

describe('Retrieves score if pins are 1', () => {
    it('Retrieves score of 1', () => {
        const currentPoints = new BowingPlayer([]);
        currentPoints.scoreGame(1)
        expect(currentPoints.getPoints()).toEqual(1)
    })
})
