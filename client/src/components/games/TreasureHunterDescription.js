import React, {Fragment} from 'react';
import TreasureHunterGame from './TreasureHunterGame';

const TreasureHunterDescription = () => {

    return (
        <Fragment>
            <h2>Treasure Hunter</h2>
            <TreasureHunterGame />
            <h3 className="hide-on-large-only">The game is only playable on a computer. Please use a computer and a bigger screen to play this game.</h3>
            <div className="section"></div>
            <div className="divider"></div>
            <p className="flow-text">Refresh the page or use a different browser if the game does not load</p>
            <p className="flow-text">A simple 2D platformer game</p>
            <p className="flow-text"><a href="https://github.com/KyleZhaoningCai/Treasure-Hunter">Link to the GitHub repository</a></p>
        </Fragment>
    )
}

export default TreasureHunterDescription;