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
        expect(player.getFramePins(1)).toEqual(9)
        expect(player.getFramePins(2)).toEqual(4)
    });
    it('Given a player has had 2 balls and it is not a strike it will return the score', () => {
        const player = new BowlingPlayer();
        player.recordBall(7)
        player.recordBall(2)
        expect(player.frameScoring(1)).toEqual(9)
    });
    it('Given a player has had 2 balls for 2 frames and it is not a strike it will return the score', () => {
        const player = new BowlingPlayer();
        player.recordBall(7)
        player.recordBall(2)
        player.recordBall(2)
        player.recordBall(6)
        expect(player.frameScoring(2)).toEqual(17)
    });
    it('Given a player has rolled a ball for 1 frames and its not complete return an empty string', () => {
        const player = new BowlingPlayer();
        player.recordBall(7)
        expect(player.frameScoring(1)).toEqual("")
    });
    it('Given a player has hit a spare it will return a / if the next ball has not been bowled yet', () => {
        const player = new BowlingPlayer();
        player.recordBall(7)
        player.recordBall(3)
        expect(player.frameScoring(1)).toEqual("/")
    });
    it('Given a player has hit a spare it will add the next pin to the score', () => {
        const player = new BowlingPlayer();
        player.recordBall(7)
        player.recordBall(3)
        player.recordBall(3)
        expect(player.frameScoring(1)).toEqual(13)
    });
    it('Given a player has hit a strike it will return an X if the next frame isnt complete', () => {
        const player = new BowlingPlayer();
        player.recordBall(10)
        expect(player.frameScoring(1)).toEqual("X")
    });
    it('Given a player has hit a strike it will return an X if the next frame isnt complete', () => {
        const player = new BowlingPlayer();
        player.recordBall(10)
        player.recordBall(5)
        expect(player.frameScoring(1)).toEqual("X")
    });
    it('Given a player has hit a strike  it will add the next frame to the score', () => {
        const player = new BowlingPlayer();
        player.recordBall(10)
        player.recordBall(3)
        player.recordBall(0)
        expect(player.frameScoring(1)).toEqual(13)
    });
    it('Given a player has bowled both balls the frame is completed', () => {
        const player = new BowlingPlayer();
        player.recordBall(8)
        player.recordBall(1)
        expect(player.isFrameComplete(1)).toEqual(true)
    });
    it('Given a player has bowled a strike the frame is completed', () => {
        const player = new BowlingPlayer();
        player.recordBall(10)
        expect(player.isFrameComplete(1)).toEqual(true)
    });
    it('Given a player has bowled 1 ball the frame is not complete', () => {
        const player = new BowlingPlayer();
        player.recordBall(8)
        expect(player.isFrameComplete(1)).toEqual(false)
    });
    it('Given a player has bowled a strike and their next throw is a strike it shows 20 + pins knocked in next frame', () => {
        const player = new BowlingPlayer();
        player.recordBall(10)
        player.recordBall(10)
        player.recordBall(2)
        player.recordBall(2)
        expect(player.frameScoring(1)).toEqual(24)
    });
    it('Given a player has bowled two strike then dont bowl it shows X', () => {
        const player = new BowlingPlayer();
        player.recordBall(10)
        player.recordBall(10)
        player.recordBall(2)
        expect(player.frameScoring(1)).toEqual("X")
    });
    it('Given a player has bowled a perfect game they should recieve 300', () => {
        const player = new BowlingPlayer();
        player.recordBall(10)
        player.recordBall(10)
        player.recordBall(10)
        player.recordBall(10)
        player.recordBall(10)
        player.recordBall(10)
        player.recordBall(10)
        player.recordBall(10)
        player.recordBall(10)
        player.recordBall(10)
        player.recordBall(10)
        player.recordBall(10)
        expect(player.frameScoring(10)).toEqual(300)
        expect(player.frameScoring(1)).toEqual(30)
        expect(player.frameScoring(3)).toEqual(90)
        
    });
    it('Given a player tries to score more than 10 for a frame, it doesnt work', () => {
        const player = new BowlingPlayer();
        player.recordBall(11)
        expect(player.recordBall(11)).toEqual(false)
    });
    it('Given a player tries to score less than 0 for a frame, it doesnt work', () => {
        const player = new BowlingPlayer();
        player.recordBall(-1)
        expect(player.recordBall(-1)).toEqual(false)
    });
    it('Given a player scored greater than 10 for both balls, it doesnt work', () => {
        const player = new BowlingPlayer();
        player.recordBall(5)
        player.recordBall(6)
        expect(player.recordBall(11)).toEqual(false)
    });
})
