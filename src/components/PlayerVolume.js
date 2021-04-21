import React, {useState} from 'react'

function PlayerVolume({stateVolume, handleVolume}) {
    const [isVolumeClicked, setIsVolumeClicked] = useState(false);

    return (
        <div className="volume-container">
            <span className="volum" onClick={() => setIsVolumeClicked(!isVolumeClicked)}>
                <i className="volume down icon"></i>
            </span>
            {
                isVolumeClicked ?
                <input
                    orient="vertical"  
                    value={Math.round(stateVolume * 100)} 
                    type="range" 
                    name="volumeBar"
                    id="volumeBar" 
                    onChange={(e) => handleVolume(e.target.value/100)}>
                </input>
                :
                null
            }
        </div>
    )
}

export default PlayerVolume
