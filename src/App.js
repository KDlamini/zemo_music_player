import React, {useState, useEffect} from 'react';
import Player from './components/Player'
import music from './components/Music';

function App() {
    const [songs] = useState(music);
    const songsLength = songs.length;
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    useEffect(() => {
        setNextSongIndex(() => {
            if(currentSongIndex + 1 > songsLength - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        })
    }, [currentSongIndex, songsLength]);

    return (
        <div className="App">
            <Player
                currentSongIndex={currentSongIndex}
                nextSongIndex={nextSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                songs={songs}
            />
        </div>
    )
}

export default App