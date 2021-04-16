import React, {useState, useRef, useEffect} from 'react'
import PlayerInfo from './PlayerInfo'
import PlayerControls from './PlayerControls'

function Player(props) {
    const audioref = useRef(null)
    const [isPlaying, setIsPlaying ] = useState(false);

    useEffect(() => {
        if(isPlaying) {
            audioref.current.play();
        } else {
            audioref.current.pause();
        }
    })

    const skipSong = (forward = true) => {
        if(forward) {
            props.setCurrentSongIndex(() => {
                let songIndex = props.currentSongIndex;
                songIndex++

                if(songIndex > props.songs.length - 1) {
                    songIndex = 0;
                }

                return songIndex;
            })
        } else {
            props.setCurrentSongIndex(() => {
                let songIndex = props.currentSongIndex;
                songIndex--

                if(songIndex < 0) {
                    songIndex = props.songs.length - 1;
                }

                return songIndex;
            })
        }
    }

    return (
        <div className="player">
        <audio src={props.songs[props.currentSongIndex].src} ref={audioref}></audio>
        <h4>Playing Now</h4>
        <PlayerInfo song={props.songs[props.currentSongIndex]}/>
        <PlayerControls 
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying}
            skipSong={skipSong}
        />
        <p>
            <strong className="next-up">Next Up: </strong>  
            <span className="next-song">
                {props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}
            </span>
        </p>
        </div>
    )
}

export default Player