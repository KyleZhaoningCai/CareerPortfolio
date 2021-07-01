import React, {Fragment} from 'react';
import JailbreakVideo from './JailbreakVideo';

const Jailbreak = () => {

    return (
        <Fragment>
            <h2>Jailbreak</h2>
            <JailbreakVideo />
            <div className="section"></div>
            <div className="divider"></div>
            <p className="flow-text">This is the first game I developed. I did not make the animations, they are from the Unity Asset Store.
             This game was built on a very old version of Unity so I cannot build it for WebGL. Therefore, I included a video of me showcasing the game</p>
            <p className="flow-text"><a href="https://github.com/KyleZhaoningCai/Third-Person-Stealth">Link to the GitHub repository</a></p>
        </Fragment>
    )
}

export default Jailbreak;