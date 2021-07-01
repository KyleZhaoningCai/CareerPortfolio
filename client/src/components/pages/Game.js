import React, {Fragment} from 'react';
import {useRouteMatch, Route, Switch} from 'react-router-dom';
import BattleCityTowerDefenseDescription from '../games/BattleCityTowerDefenseDescription';
import BattleCityTowerDefenseGame from '../games/BattleCityTowerDefenseGame';

const Game = () => {

    let match = useRouteMatch();
    console.log(`${match.path}/tower-defense`);

    return (
            <div className="row first-row">
                <Switch>
                    <Route path={`${match.path}/tower-defense`}>
                        <Fragment>
                            <BattleCityTowerDefenseDescription />
                            <BattleCityTowerDefenseGame />
                        </Fragment>
                    </Route>
                </Switch>
            </div>
    )
}

export default Game;
