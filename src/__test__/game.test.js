const {
    BowlingGame
} = require('../game');


describe('check game has players', () => {
    it('check the game has at least 1 player', () => {
        const game = new BowlingGame(["Tom", "AJ", "Jamie", "Callum", "Mark"]);
        expect(game.players.length).toEqual(5);
    });
    it('whos turn it is in the game', () => {
        const game = new BowlingGame(["Tom", "AJ", "Jamie", "Callum","Mark"]);
        expect(game.currentPlayerTurn().name).toEqual("Tom");
    })
    it('whos turn it is in the game', () => {
        const game = new BowlingGame(["Steve", "AJ", "Jamie", "Callum","Mark"]);
        expect(game.currentPlayerTurn().name).toEqual("Steve");
    })

})
