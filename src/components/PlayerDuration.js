import React from 'react'

function PlayerDuration({dur, currentTime, currTime, totalTime, handleProgress}) {
    return (
        <div className="progress-container">
            <span className="currTime">{currTime}</span>
            <input 
                value={dur ? (currentTime * 100) / dur : 0}
                onChange={(e) => handleProgress(e)}
                type="range" 
                name="progressBar" 
                id="progressBar"
            />
            <span className="totalTime">{totalTime}</span>
        </div>
    )
}

export default PlayerDuration
