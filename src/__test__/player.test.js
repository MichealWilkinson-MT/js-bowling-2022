const {
    BowlingPlayer
} = require('../player');

describe('Get player points', () => {
    it('Given a player has rolled no balls their score should be 0', () => {
        const player = new BowlingPlayer();
        expect(player.getScore()).toEqual(0);
    });
    it('Given a player has rolled 1 ball and hit 0 pins their score should be 0', () => {
        const player = new BowlingPlayer();
        expect(player.getScore()).toEqual(0);
    })
});
