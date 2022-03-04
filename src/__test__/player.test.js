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


