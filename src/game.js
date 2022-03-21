/**
 * Game - this has the responisiblity to orchestrate Frames and keep track of
 * the current score.
 *
 * @returns a new game object
 */
export default function CreateGame() {
    return {
        currentFrameIndex: 0,
        score: 0,
        currentFrame: Frame,
        frames: Frames[0],
        roll : () => {
            if (true) { // If new frame
                score += currentFrame.score
                frames += [currentFrame]

                if (frames.length == 10) {
                    currentFrame = Frame()
                }
            }
        }
    }
}
