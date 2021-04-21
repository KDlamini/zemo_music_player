import React from 'react'

function PlayerInfo(props) {
    return (
        <div className="player-info">
            <div className="info-img">
                <img src={props.song.img_src} alt=""></img>
            </div>
            <h4 className="info-title">{props.song.title}</h4>
            <h5 className="info-artist">{props.song.artist}</h5>
        </div>
    )
}

export default PlayerInfo
