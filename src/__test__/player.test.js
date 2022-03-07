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
    it('Given a player has rolled both balls for a frame we can return the score for the frame', () => {
        const player = new BowlingPlayer();
        player.recordBall(1)
        player.recordBall(8)
        expect(player.getFramePins(1)).toEqual(9)
    })
    it('Given a player has rolled both balls for a frame we can return the score for the frame', () => {
        const player = new BowlingPlayer();
        player.recordBall(2)
        player.recordBall(4)
        expect(player.getFramePins(1)).toEqual(6)
    })
    it('Given a player has rolled both balls for two frames we can return the score for the frames', () => {
        const player = new BowlingPlayer();
        player.recordBall(2)
        player.recordBall(4)
        player.recordBall(1)
        player.recordBall(8)
        expect(player.getFramePins(1)).toEqual(6)
        expect(player.getFramePins(2)).toEqual(9)
    })
    it('Given a player has rolled both balls for two frames we can return the score for the frames', () => {
        const player = new BowlingPlayer();
        player.recordBall(10)
        player.recordBall(1)
        player.recordBall(8)
        expect(player.getFramePins(1)).toEqual(10)
        expect(player.getFramePins(2)).toEqual(9)
    })
    it('Given a player has rolled 1 ball and hit a strike in frame 1 it will return strike for frame 1', () => {
        const player = new BowlingPlayer();
        player.recordBall(10)
        expect(player.isFrameAStrike(1)).toEqual(true)
    })
    it('Given a player has rolled a ball and hit a strike in frame 1 & 7 it will return strike for frame 1 & 7', () => {
        const player = new BowlingPlayer();
        player.recordBall(10)
        expect(player.isFrameAStrike(1, 7)).toEqual(true)
    })
    it('Given a player has rolled two balls and hit a spare in frame 1 it will return a spare for frame 1', () => {
        const player = new BowlingPlayer();
        player.recordBall(9)
        player.recordBall(1)
        expect(player.isFrameASpare(1)).toEqual(true)
    })
    it('Given a player has had 4 rolled balls it will return the total score', () => {
        const player = new BowlingPlayer();
        player.recordBall(5)
        player.recordBall(4)
        player.recordBall(3)
        player.recordBall(1)
        expect(player.getFramePins(1) + player.getFramePins(2)).toEqual(13)
    });
});
