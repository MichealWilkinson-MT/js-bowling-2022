const playerNames = ["Steve", "Larry", "Bob", "Anne", "Lara", "Elyse"];

const game = new BowlingGame(playerNames);

while(!game.isFinished()) {
    console.log(game.whoseTurn());
    console.log(game.currentFrame());

    const pinsHit = Math.floor(Math.random() * 11); // A random number of pins between 0 and 11 (11 indicating user error)

    const isValidBallTotal = game.recordBall(pinsHit);
    if (!isValidBallTotal) {
        console.log(`Error: Pin total ${pinsHit} for ${game.whoseTurn()} frame ${game.currentFrame()} is invalid, please try again`)
    }
}

console.log(game.getScorecard());
console.log(`Congratulations to ${game.getWinner()} you won`)