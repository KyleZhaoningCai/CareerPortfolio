import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';

const BattleCityTowerDefenseGame = () => {

    const unityContext = new UnityContext({
        loaderUrl: "/games/td-build/td.loader.js",
        dataUrl: "/games/td-build/td.data",
        frameworkUrl: "/games/td-build/td.framework.js",
        codeUrl: "/games/td-build/td.wasm",
    });

    return (
        <div className="col l5 offset-l1">
            <div className="tower-defense-container">
              <Unity unityContext={unityContext} className="unity-game" />
            </div>
        </div>
    )
}

export default BattleCityTowerDefenseGame;
