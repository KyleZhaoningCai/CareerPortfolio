import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';

const TreasureHunterGame = () => {

    const unityContext = new UnityContext({
        loaderUrl: "/games/bh-build/hunter-build.loader.js",
        dataUrl: "/games/bh-build/hunter-build.data",
        frameworkUrl: "/games/bh-build/hunter-build.framework.js",
        codeUrl: "/games/bh-build/hunter-build.wasm",
    });

    return (
        <div className="center-flex">
            <div className="treasure-hunter-container hide-on-med-and-down">
                <Unity unityContext={unityContext} className="unity-game" />
            </div>
        </div>
        
    )
}

export default TreasureHunterGame;