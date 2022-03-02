const {
    BowingPlayer
} = require('../player');

describe('Get player points', () => {
    it('Given a player has 0 points, when retrieving their points, then we get 0', () => {
        const player = new BowingPlayer();
        expect(player.getPoints()).toEqual(0);
    });
})
