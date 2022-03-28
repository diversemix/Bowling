import Game from '../src/game.js';

describe("Test Game",()=> {
    it('Should return a score of 0 if 20 balls go in the gutter', () => {
        // Arrange
        const sut = new Game();

        // Act
        for (let f = 0; f < 10; f++) {
            sut.roll(0)
        }
    
        // Assert
        expect(sut.score()).toBe(0)
    })

    it('Should return a score of 22 for all 1s', () => {
        // Arrange
        const sut = new Game();

        // Act
        for (let f = 0; f < 20; f++) {
            sut.roll(1)
        }
    
        // Assert
        expect(sut.score()).toBe(20)
    })

    it('Should return a score of 300 for perfect game', () => {
        // Arrange
        const sut = new Game();

        // Act
        for (let f = 0; f < 10; f++) {
            sut.roll(10)
        }
    
        // Assert
        expect(sut.score()).toBe(300)
    })
});