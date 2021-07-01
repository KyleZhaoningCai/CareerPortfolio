import React from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';

const MarioGame = () => {

    const unityContext = new UnityContext({
        loaderUrl: "/games/mario-build/mario-build.loader.js",
        dataUrl: "/games/mario-build/mario-build.data",
        frameworkUrl: "/games/mario-build/mario-build.framework.js",
        codeUrl: "/games/mario-build/mario-build.wasm",
    });

    return (
        <div className="center-flex">
            <div className="mario-container hide-on-med-and-down">
                <Unity unityContext={unityContext} className="unity-game" />
            </div>
        </div>
        
    )
}

export default MarioGame;