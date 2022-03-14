const {
    BowlingPlayer
} = require('../player');

describe('Get player points', () => {
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
        expect(player.cumulativeFrameScoring(1)).toEqual(9)
    });
    it('Given a player has had 2 balls for 2 frames and it is not a strike it will return the score', () => {
        const player = new BowlingPlayer();
        player.recordBall(7)
        player.recordBall(2)
        player.recordBall(2)
        player.recordBall(6)
        expect(player.cumulativeFrameScoring(2)).toEqual(17)
    });
    it('Given a player has rolled a ball for 1 frames and its not complete return an empty string', () => {
        const player = new BowlingPlayer();
        player.recordBall(7)
        expect(player.cumulativeFrameScoring(1)).toEqual("")
    });
    it('Given a player has hit a spare it will return a / if the next ball has not been bowled yet', () => {
        const player = new BowlingPlayer();
        player.recordBall(7)
        player.recordBall(3)
        expect(player.cumulativeFrameScoring(1)).toEqual("/")
    });
    it('Given a player has hit a spare it will add the next pin to the score', () => {
        const player = new BowlingPlayer();
        player.recordBall(7)
        player.recordBall(3)
        player.recordBall(3)
        expect(player.cumulativeFrameScoring(1)).toEqual(13)
    });
    it('Given a player has hit a strike it will return an X if the next frame isnt complete', () => {
        const player = new BowlingPlayer();
        player.recordBall(10)
        expect(player.cumulativeFrameScoring(1)).toEqual("X")
    });
    it('Given a player has hit a strike it will return an X if the next frame isnt complete', () => {
        const player = new BowlingPlayer();
        player.recordBall(10)
        player.recordBall(5)
        expect(player.cumulativeFrameScoring(1)).toEqual("X")
    });
    it('Given a player has hit a strike  it will add the next frame to the score', () => {
        const player = new BowlingPlayer();
        player.recordBall(10)
        player.recordBall(3)
        player.recordBall(0)
        expect(player.cumulativeFrameScoring(1)).toEqual(13)
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
        expect(player.cumulativeFrameScoring(1)).toEqual(24)
        expect(player.getFrameScore(1)).toEqual(24)
        expect(player.getFrameScore(2)).toEqual(14)
        expect(player.getFrameScore(3)).toEqual(4)
    });
    it('Given a player has bowled two strike then dont bowl it shows X', () => {
        const player = new BowlingPlayer();
        player.recordBall(10)
        player.recordBall(10)
        player.recordBall(2)
        expect(player.cumulativeFrameScoring(1)).toEqual("X")
        expect(player.getFrameScore(1)).toEqual("X")
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
        expect(player.cumulativeFrameScoring(10)).toEqual(300)
        expect(player.cumulativeFrameScoring(1)).toEqual(30)
        expect(player.cumulativeFrameScoring(3)).toEqual(90)
        expect(player.getFrameScore(10)).toEqual(30)
        expect(player.getFrameScore(1)).toEqual(30)
        expect(player.getFrameScore(3)).toEqual(30)
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
    it('a player has a name when starting', () => {
        const player = new BowlingPlayer("Tom");
        expect(player.name).toEqual("Tom")
    });
})
describe('Checking player frame', () => {
    it('determines that the current frame is 1 when no balls have been recorded', () => {
        const player = new BowlingPlayer("Dave");
        expect(player.getCurrentFrame()).toEqual(1);

    });
    it('determines that the current frame is 1 when 1 non-strike has been recorded', () => {
        const player = new BowlingPlayer("Dave");
        player.recordBall(7)
        expect(player.getCurrentFrame()).toEqual(1);

    });
    it('determines that the current frame is 2 when 2 non-strikes have been recorded', () => {
        const player = new BowlingPlayer("Dave");
        player.recordBall(7)
        player.recordBall(1)
        expect(player.getCurrentFrame()).toEqual(2);

    });
    it('determines that the current frame is 2 when 1 strike has been recorded', () => {
        const player = new BowlingPlayer("Dave");
        player.recordBall(10)
        expect(player.getCurrentFrame()).toEqual(2);

    });

    it('determines that the current frame is 10 when 10 frames have been recorded', () => {
        const player = new BowlingPlayer("Dave");
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
        expect(player.getCurrentFrame()).toEqual(10);
    });


    it('determines that the current frame is 10 when more than 10 frames have been recorded', () => {
        const player = new BowlingPlayer("Dave");
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
        expect(player.getCurrentFrame()).toEqual(10);
    });
})

describe('Frame 10 completeness', () => {
    it('is marked complete after 2 normal balls (not strike or spare)', () => {
        const player = new BowlingPlayer("Dave");
        //record 18 balls (first 9 frames)
        for (let i = 1; i <= 18; i++) {
            player.recordBall(0);
        }
        expect(player.isFrameComplete(10)).toEqual(false);
        player.recordBall(0);
        player.recordBall(0);
        expect(player.isFrameComplete(10)).toEqual(true);
    });

    it('is marked complete after 1 strike & 2 normal balls (not strike or spare)', () => {
        const player = new BowlingPlayer("Dave");
        //record 18 balls (first 9 frames)
        for (let i = 1; i <= 18; i++) {
            player.recordBall(1);
        }
        expect(player.isFrameComplete(9)).toEqual(true);
        expect(player.isFrameComplete(10)).toEqual(false);
        player.recordBall(10);
        expect(player.isFrameComplete(10)).toEqual(false);
        player.recordBall(0);
        expect(player.isFrameComplete(10)).toEqual(false);
        player.recordBall(0);
        expect(player.isFrameComplete(10)).toEqual(true);
    });

    it('is marked complete after 1 strike & 2 balls for a spare', () => {
        const player = new BowlingPlayer("Dave");
        //record 18 balls (first 9 frames)
        for (let i = 1; i <= 18; i++) {
            player.recordBall(1);
        }
        expect(player.isFrameComplete(9)).toEqual(true);
        expect(player.isFrameComplete(10)).toEqual(false);
        player.recordBall(10);
        expect(player.isFrameComplete(10)).toEqual(false);
        player.recordBall(0);
        expect(player.isFrameComplete(10)).toEqual(false);
        player.recordBall(10);
        expect(player.isFrameComplete(10)).toEqual(true);
    });

    it('is marked complete after 3 strikes', () => {
        const player = new BowlingPlayer("Dave");
        //record 18 balls (first 9 frames)
        for (let i = 1; i <= 18; i++) {
            player.recordBall(1);
        }
        expect(player.isFrameComplete(9)).toEqual(true);
        expect(player.isFrameComplete(10)).toEqual(false);
        player.recordBall(10);
        expect(player.isFrameComplete(10)).toEqual(false);
        player.recordBall(10);
        expect(player.isFrameComplete(10)).toEqual(false);
        player.recordBall(10);
        expect(player.isFrameComplete(10)).toEqual(true);
    });

    it('is marked complete after 1 spare & 1 other ball', () => {
        const player = new BowlingPlayer("Dave");
        //record 18 balls (first 9 frames)
        for (let i = 1; i <= 18; i++) {
            player.recordBall(1);
        }
        expect(player.isFrameComplete(9)).toEqual(true);
        expect(player.isFrameComplete(10)).toEqual(false);
        player.recordBall(9);
        expect(player.isFrameComplete(10)).toEqual(false);
        player.recordBall(1);
        expect(player.isFrameComplete(10)).toEqual(false);
        player.recordBall(0);
        expect(player.isFrameComplete(10)).toEqual(true);
    });
});

