import React from 'react'

function PlayerInfo(props) {
    return (
        <div className="player-info">
            <div className="info-img">
                <img src={props.song.img_src} alt=""></img>
            </div>
            <h3 className="info-title">{props.song.title}</h3>
            <h4 className="info-artist">{props.song.artist}</h4>
        </div>
    )
}

export default PlayerInfo
