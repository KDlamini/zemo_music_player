import React, {useState, useEffect} from 'react';
import Player from './components/Player'

function App() {
    const [songs] = useState([
        {
            title: "Golden",
            artist: "Harry Styles",
            img_src: "./images/harry-syles-fine-line-album-cover.jpeg",
            src: "./music/Harry Styles - Golden (Official).mp3"
        },
        {
            title: "Watermerlon Sugar",
            artist: "Harry Styles",
            img_src: "./images/harry-syles-fine-line-album-cover.jpeg",
            src: "./music/Harry Styles - Watermelon Sugar (Official Audio).mp3"
        },
        {
            title: "Peaches ft. Daniel Caesar, Giveon",
            artist: "Justin Bieber",
            img_src: "./images/Justin_Bieber_-_Justice.png",
            src: "./music/Justin Bieber - Peaches ft. Daniel Caesar, Giveon.mp3"
        },
        {
            title: "Streets",
            artist: "Doja Cat",
            img_src: "./images/doja-cat-street-cover.jpeg",
            src: "./music/Doja Cat - Streets (Audio).mp3"
        },
        {
            title: "Montero (Call Me By Your Name",
            artist: "Lil Nas X",
            img_src: "./images/lil-nas-x-call-me-by-your-name.jpg",
            src: "./music/Lil Nas X - MONTERO (Call Me By Your Name).mp3"
        }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

    useEffect(() => {
        setNextSongIndex(() => {
            if(currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        })
    }, [currentSongIndex])

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