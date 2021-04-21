import React, {useState, useRef, useEffect} from 'react'
import PlayerInfo from './PlayerInfo'
import PlayerControls from './PlayerControls'
import PlayerDuration from './PlayerDuration'
import PlayerVolume from './PlayerVolume'

function Player(props) {
    const audioref = useRef(null)
    const [isPlaying, setIsPlaying ] = useState(false);
    const [stateVolume, setStateVolume] = useState(0.5);
    const [currentTime, setCurrentTime] = useState(0);
    const [dur, setDur] = useState(0);

    const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s) }

    useEffect(() => {
        if(isPlaying) {
            audioref.current.play();
        } else {
            audioref.current.pause();
        }
    })

    useEffect(() => {
        handleVolume(stateVolume)
        setDur(audioref.current.duration)
    }, [props.songs[props.currentSongIndex].src])

    const handleVolume = (r) => {
        setStateVolume(r)
        audioref.current.volume = r
    }

    const handleProgress = (e) => {
        let compute = (e.target.value * dur) / 100;
        setCurrentTime(compute);
        audioref.current.currentTime = compute
    }

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
        <audio
            onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
            onCanPlay={(e) => setDur(e.target.duration)}
            onEnded={skipSong}
            src={props.songs[props.currentSongIndex].src} 
            ref={audioref}>
        </audio>
        <PlayerVolume
            stateVolume={stateVolume}
            handleVolume={handleVolume}
        />
        <h4>Playing Now</h4>
        <PlayerInfo song={props.songs[props.currentSongIndex]}/>
        <PlayerDuration 
            dur={dur}
            currentTime={currentTime}
            totalTime={fmtMSS(dur)} 
            currTime={fmtMSS(currentTime)}
            handleProgress={handleProgress}
        />
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