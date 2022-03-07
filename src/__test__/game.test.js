const {
    BowlingGame
} = require('../game');


describe('check game has players', () => {
    it('check the game has at least 1 player', () => {
        const game = new BowlingGame(["Tom", "AJ", "Jamie", "Callum","Mark"]);
        expect(game.players.length).toEqual(5);
    })
})
