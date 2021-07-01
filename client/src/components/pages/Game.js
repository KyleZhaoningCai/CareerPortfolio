import React, {Fragment} from 'react';
import {useRouteMatch, Route, Switch} from 'react-router-dom';
import BattleCityTowerDefenseDescription from '../games/BattleCityTowerDefenseDescription';
import BattleCityTowerDefenseGame from '../games/BattleCityTowerDefenseGame';
import MarioDescription from '../games/MarioDescription';

const Game = () => {

    let match = useRouteMatch();
    console.log(`${match.path}/tower-defense`);

    return (
            <div className="row first-row">
                <Switch>
                    <Route exact path={`${match.path}/tower-defense`}>
                        <Fragment>
                            <BattleCityTowerDefenseDescription />
                            <BattleCityTowerDefenseGame />
                        </Fragment>
                    </Route>
                    <Route exact path={`${match.path}/mario`}>
                        <MarioDescription />
                    </Route>
                </Switch>
            </div>
    )
}

export default Game;
