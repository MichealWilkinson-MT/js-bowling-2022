const { BowlingGame } = require('./src/game')

const playerNames = ["Steve", "Larry", "Bob", "Anne", "Lara", "Elyse"];

const game = new BowlingGame(playerNames);

while (!game.isGameFinished()) {
    const pinsHit = Math.floor(Math.random() * 11); // A random number of pins between 0 and 11 (11 indicating user error)

    const isValidBallTotal = game.recordScore(pinsHit);
}
const winners = game.getWinners()
try {
    console.log(`Congratulations to ${winners.map((player) => { return player.name })} you won with a score of ${winners[0].cumulativeFrameScoring(10)}`)
} catch (e) {
    game.players.forEach((pa) => {
        console.log(pa.balls)
        console.log(pa.cumulativeFrameScoring(10))
    })
}