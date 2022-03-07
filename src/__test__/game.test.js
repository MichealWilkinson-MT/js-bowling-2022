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
    it('player 1 threw 1 ball and recorded their score', () => {
        const game = new BowlingGame(["Steve", "AJ", "Jamie", "Callum", "Mark"]);
        game.recordScore(4)
        expect(game.players[0].getFramePins(1)).toEqual(4);
    })
    it('player 1 threw 2 balls and recorded their score', () => {
        const game = new BowlingGame(["Steve", "AJ", "Jamie", "Callum", "Mark"]);
        game.recordScore(4)
        game.recordScore(5)
        expect(game.players[0].getFramePins(1)).toEqual(9);
    })
    it('after player 1 threw 2 balls it should switch to the next player', () => {
        const game = new BowlingGame(["Steve", "AJ", "Jamie", "Callum", "Mark"]);
        game.recordScore(4)
        game.recordScore(5)
        expect(game.currentPlayerTurn().name).toEqual("AJ");
    })

})
