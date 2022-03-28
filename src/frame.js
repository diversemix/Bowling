/**
 * Frame - This has the responsibility for determining the ball's outcome for
 * a roll. Manages total number of balls rolls that can be done for a given frame
 *  - manage the pins.
 */

export default class Frame {

    frameScore = []

    roll(pins) {
        this.frameScore.push(pins);
    }

    isFinished() {
        return isStrike() || this.frameScore.length === 2
    }

    isStrike() {
        return this.frameScore.length === 1 && this.frameScore[0] === 10
    }

    isSpare() {
        return this.frameScore.length === 2 && this.frameScore.reduce((l, r) => l + r) === 10
    }    


};
