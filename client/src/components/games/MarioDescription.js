import React, {Fragment} from 'react';
import MarioGame from './MarioGame';
import marioStateMachine from './mario-state-machine.png';

const MarioDescription = () => {

    return (
        <Fragment>
            <h2>Super Mario Bros. 1-1</h2>
            <MarioGame />
            <h3 className="hide-on-large-only">The game is only playable on a computer. Please use a computer and a bigger screen to play this game.</h3>
            <div className="section"></div>
            <div className="divider"></div>
            <p className="flow-text">Refresh the page or use a different browser if the game does not load</p>
            <p className="flow-text">Use W S A D or up down left right arrow keys to control Mario. Press space key to shoot fireballs.</p>
            <p className="flow-text">A challenge project proposed by my professor and I was the only student to complete this challenge.
             The challenge does not include the underground area, and should be at least 90% similar to the original game.</p>
            <p className="flow-text"><a href="https://github.com/KyleZhaoningCai/Mario-1-1">Link to the GitHub repository</a></p>
            <p className="flow-text">Mario animation state machine.</p>
            <img src={marioStateMachine} alt="Mario State Machine" className="mario-state-machine-diagram"/>
        </Fragment>
    )
}

export default MarioDescription;