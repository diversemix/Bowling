# bowling-game-kata

## The rules of bowling

* A game is 10 frames
* At the start of each frame there are 10 upright pins
* After a spare or a strike the pins are reset to be upright
* In each frame you get up to two rolls to knock down all the pins
* A ball that does not knock down any pins is called a gutter ball
* A spare is when you knock down all the pins in a frame
* A strike is when you knock down all the pins at the first opportunity
* The score for a frame is the number of pins knocked down
* If a spare is scored the next roll is added as a bonus
* If a strike is scored the next two rolls are added as a bonus
* In the 10th frame extra balls may be rolled to complete the frame


## The task

Create a class (or the equivalent in the language you are using) which can capture the rolls of a player and calculate their final score at the end of the game.

The class could be called `Game` with methods `roll(pins: int)` and `score()`

## Some example games and scores

20 gutter balls - score `0`

20 single pin balls - score `20`

12 strikes in a roll - score `300`


### Acknowledgements

I have adapted this kata over the years but the original was by Uncle Bob and is available here: http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata
