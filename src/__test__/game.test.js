const {
    BowlingGame
} = require('../game');


describe('check game has players', () => {
    it('check the game has at least 1 player', () => {
        const game = new BowlingGame(["Tom", "AJ", "Jamie", "Callum", "Mark"]);
        expect(game.players.length).toEqual(5);
    });
    it('whos turn it is in the game', () => {
        const game = new BowlingGame(["Tom", "AJ", "Jamie", "Callum", "Mark"]);
        expect(game.currentPlayerTurn().name).toEqual("Tom");
    })
    it('whos turn it is in the game', () => {
        const game = new BowlingGame(["Steve", "AJ", "Jamie", "Callum", "Mark"]);
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
    it('after every player has had their turn, it resets to the first player', () => {
        const game = new BowlingGame(["Steve", "AJ", "Jamie", "Callum", "Mark"]);
        game.recordScore(10)
        game.recordScore(10)
        game.recordScore(10)
        game.recordScore(10)
        game.recordScore(10)
        expect(game.currentPlayerTurn().name).toEqual("Steve");
    });
});

describe('game over', () => {
    it('after everyone has thrown all their balls the game will end', () => {
        const game = new BowlingGame(["Steve", "AJ"]);
        for (let i = 1; i <= 39; i++) {
            expect(game.recordScore(4)).toEqual(true);
            expect(game.isGameFinished()).toEqual(false);
            expect(game.framenumber).toEqual(Math.floor(i / 4) + 1)
        }
        expect(game.recordScore(4)).toEqual(true);
        expect(game.isGameFinished()).toEqual(true);
    });
    it('can track extra balls with strikes in the last frame', () => {
        const game = new BowlingGame(["Steve", "AJ"]);
        for (let frame = 1; frame <= 9; frame++) {
            for (let ball = 1; ball <= 4; ball++) {
                game.recordScore(3);
            }
            expect(game.isGameFinished()).toEqual(false);
        }
        expect(game.currentPlayerTurn().name).toEqual("Steve");
        expect(game.framenumber).toEqual(10);
        expect(game.isGameFinished()).toEqual(false);
        game.recordScore(10);
        expect(game.currentPlayerTurn().name).toEqual("Steve");
        expect(game.framenumber).toEqual(10);
        expect(game.isGameFinished()).toEqual(false);
        game.recordScore(10);
        expect(game.currentPlayerTurn().name).toEqual("Steve");
        expect(game.framenumber).toEqual(10);
        expect(game.isGameFinished()).toEqual(false);
        game.recordScore(10);
        expect(game.currentPlayerTurn().name).toEqual("AJ");
        expect(game.framenumber).toEqual(10);
        expect(game.isGameFinished()).toEqual(false);
        game.recordScore(1);
        expect(game.currentPlayerTurn().name).toEqual("AJ");
        expect(game.framenumber).toEqual(10);
        expect(game.isGameFinished()).toEqual(false);
        game.recordScore(9);
        expect(game.currentPlayerTurn().name).toEqual("AJ");
        expect(game.framenumber).toEqual(10);
        expect(game.isGameFinished()).toEqual(false);
        game.recordScore(1);
        expect(game.isGameFinished()).toEqual(true);

    });
});
describe('We know who won the game', () => {
    it('returns no winners if the game is not over', () => {
        const game = new BowlingGame(["Steve", "AJ"]);
        game.recordScore(4)
        game.recordScore(4)
        game.recordScore(5)
        game.recordScore(5)
        expect(game.isGameFinished()).toEqual(false);
        expect(game.getWinners()).toEqual([]);
    });
    it('can tell who won a normal game', () => {
        const game = new BowlingGame(["Steve", "AJ"]);
        for (let frame = 1; frame <= 10; frame++) {
            for (let ball = 1; ball <= 4; ball++) {
                game.recordScore(ball);
            }
        }
        expect(game.isGameFinished()).toEqual(true);
        expect(game.getWinners().length).toEqual(1);
        expect(game.getWinners()[0].name).toEqual("AJ");
    });
    it('returns all players who drew', () => {
        const game = new BowlingGame(["Steve", "AJ"]);
        for (let frame = 1; frame <= 10; frame++) {
            for (let ball = 1; ball <= 4; ball++) {
                game.recordScore(4);
            }
        }
        expect(game.isGameFinished()).toEqual(true);
        expect(game.getWinners().length).toEqual(2);
    });
})