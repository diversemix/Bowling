import Frame from "./frame";

/**
 * Game - this has the responisiblity to orchestrate Frames and keep track of
 * the current score.
 *
 * @returns a new game object
 */
export default class Game {

    frames;
    index;

    constructor() {
        this.frames = Array.from(new Array(10)).map(() => (new Frame()));
        this.index = 0;
    }

    roll(pins) {
        let currentFrame = this.frames[this.index];
        currentFrame.roll(pins);
        if (currentFrame.isFinished()) {
            this.index += 1;
        }
    }

    isFinished() {
        return this.index == 10;
    }

    score() {
        let finalScore = 0;
        let previousFrameScores;
        this.frames.forEach((frame, i) => {
            const currentFrameScores = frame.frameScore;
            if(previousFrameScores && previousFrameScores.isStrike()){
                // Add bonus to the currentFrameScores
            }
            previousFrameScores = currentFrameScores;
        });

        return finalScore;
    }

    // return {
    //     currentFrameIndex: 0,
    //     score: 0,
    //     currentFrame: Frame,
    //     frames: Frames[0],
    // }
}
