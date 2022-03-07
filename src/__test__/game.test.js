const {
    BowlingGame
} = require('../game');


describe('Check Total Frames', () => {
    xit('Check the game has a max of 10 frames per person', () => {
        const game = new BowlingGame();
        expect(game.getFrame()).toEqual(0,10);
    })
})
