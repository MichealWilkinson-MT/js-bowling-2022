const {
    BowingPlayer
} = require('../player');

describe('Get player points', () => {
    it('Given a player has 0 points, when retrieving their points, then we get 0', () => {
        const player = new BowingPlayer();
        expect(player.playerPoints()).toEqual(0);
    });
})

describe('Get player name', () => {
    it('Retrieves Player name', () => {
        const name = new BowingPlayer();
        expect(name.getPlayer()).toEqual('Bobo');
    });
})

describe('Creating a new frame', () => {
    it('Retrieves New frame', () => {
        const frame = new BowingPlayer();
        expect(frame.newFrame()).toEqual(0);
    })
})

describe('')
