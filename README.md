# Bowling
## Generic instructions
1. Fork this repository (top right)
2. Clone your fork `git clone https://github.com/<YOUR GH USERNAME>/js-bowling-2022.git`
    - NB: If using github desktop ensure you select "For my own purposes" and not "To Contribute to the upstream project" when cloning your fork
3. Work in branches

# The Kata
Create a set of classes which can be used by an application so that given a valid sequence of rolls for one line of American Ten-Pin Bowling, produces the total score for the game.

Try to approach this in a TDD fashion, thinking about what the simplest case is for a given function or class, write the test for it, write the code to pass that test and then think about what the next scenario is.

The flow I use for TDD is
1. Think about the next, simplest, case I can test for
2. Write the test to represent that change
3. Do a git commit for the test (git add <file containing test> then git commit)
4. Write code so that the test passes (again smallest possible changes, adding an `else if` to an `if .. else ..` is pretty small, renaming variables and adding loops isn't)
5. Do a git commit for the code and push the changes up (git add, git commit, git push). This means I know that my tests and code are now available if anyone else wants to make use of them
6. Examine my code and see if there is a way of simplifying it (**Refactor**)
7. If we have refactored do another commit and push and go back to the start

*Hint:* for bowling the simplests case I came up with was getting the score for a frame in which 1 ball had been bowled and no pins had been hit ...


## Minimum classes
We need a class to define a player, a player should have:
- A name
- A sequence of the number of pins knocked down for each ball, divided into frames
    - A frame has one or 2 balls and a number of pins knocked down for each ball rolled, the total pins for both balls can never be more than 10
- A way of recording the potential extra balls in the 10th frame (see Strikes spares and the 10th frame)
- A function for retrieving the player's total score for a given frame 

We need a class to define a game, a game should have:
- A number of players
- A function to get a multiline string representing the score card
    - To produce a multiline string "\n" will add a blank line
- Awareness of who's turn it is
- Awareness of the current frame

## Example score card
```
              |  1  |  2  |  3  |  4  |  5  |  6  |  7  |  8  |  9  |  10   |
Player Name 1 | - 3 | X   | 1 7 | 5 / | 3 / |     |     |     |     |       |
              |  3  | 21  | 29  | 42  |  /  |     |     |     |     |       |
Player Name2  | - 3 | X   | 1 7 | X   | 3   |     |     |     |     |       |
              |  3  | 21  | 29  | X   |     |     |     |     |     |       |
```
### Description
This would denote that the first 5 frames have been bowled by "Player Name 1" but only the first ball of frame 5 had been bowled by "Player Name2"
- The top row indicates the frame 
- The row aligned with the player name shows the pins knocked down for each ball
    - `-` denotes no pins
    - `X` denotes all pins knocked down in the first ball (a strike)
    - `/` denotes all pins knocked down between both balls (a spare
- The row under a player's name denotes their cumulative score
    - Notes:
        - The `X` denotes that the score for a frame where the player scored a strike cannot be displayed because the next frame is not completed yet 
        - The `/` denotes that the score for a frame where the player scored a spare cannot be displayed because the next ball has not been bowled yet
- The spacing should be consistent, if printed using a monospace font the pipes should line up

## Scoring spares and strikes
Spares are relatively simple, if a player scores a spare their score is 10 (total number of pins knocked down) + the number of pins knocked down on the first ball of the next frame

A strike can become more complex if you score multiple strikes in a row  
Strike: score 10 points + the number of pins you knock down for the entire next frame.

Double:  
1st frame – 20 points + the number of pins you knock down in 3rd frame   
2nd frame – same as scoring for strike  

Turkey:  
1st frame - 30 points   
2nd frame – same as scoring for double  
3rd frame – same as scoring for strike  

Four-Bagger (and onwards):  
1st frame - 30 points   
2nd frame - 30 points   
3rd frame – same as scoring for double  
4th frame – same as scoring for strike  

## Strikes spares and the 10th frame
If in the regular 2 balls you get for the 10th frame you score a spare, you then get 1 extra ball, this is used to calculate the score for your spare BUT NOT added to the total

If in the first ball of the 10th frame you score a strike you get 2 extra balls, like a spare, these are not added to your total but rather used to calculate the score for your strike. 
If you score strikes with your first ball and the first extra ball of the 10th frame you get 1 final ball. Scoring a strike with this gets you no extra balls but does net you a perfect score for the frame of 30
