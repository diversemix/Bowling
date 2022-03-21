import CreateGame from '../src/game.js';

describe("Test Game",()=> {
    it('Should create a new Game',()=> {
        // Arrange
        const newGame = CreateGame();

        // Act

        // Assert creates 1 frame with score 0
    })

    it('Should return a score of 0 if 20 balls go in the gutter', () => {
        // Arrange
        const newGame = CreateGame();

        // mock out Frame.roll()

        const ballRoll = newGame.roll();
        new Frame()

        // Assert scrore is 0
    })
});