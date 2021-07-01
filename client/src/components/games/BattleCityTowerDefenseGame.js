import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';

const BattleCityTowerDefenseGame = () => {

    const unityContext = new UnityContext({
        loaderUrl: "/games/build/td.loader.js",
        dataUrl: "/games/build/td.data",
        frameworkUrl: "/games/build/td.framework.js",
        codeUrl: "/games/build/td.wasm",
    });

    return (
        <div className="col l5 offset-l1">
            <div className="tower-defense-container">
              <Unity unityContext={unityContext} className="tower-defense-game" />
            </div>
        </div>
    )
}

export default BattleCityTowerDefenseGame;
