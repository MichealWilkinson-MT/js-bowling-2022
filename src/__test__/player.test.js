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
        player.recordBall(0)
        expect(player.getScore()).toEqual(0);
    })
    it('Given a player has rolled 1 ball and hit 4 pins their score should be 4', () => {
        const player = new BowlingPlayer();
        player.recordBall(4)
        expect(player.getScore()).toEqual(4);
    })
    it('Given a player has rolled 2 balls and hit 3 & 6 pins their score should be 9', () => {
        const player = new BowlingPlayer();
        player.recordBall(3)
        player.recordBall(6)
        expect(player.getScore()).toEqual(9);
    })
    it('Given a player has rolled 1 ball and hit 10 their frame should be a strike', () => {
        const player = new BowlingPlayer();
        player.recordBall(10)
        player.isAStrike()
        expect(player.isAStrike()).toEqual(true);
    })
});
