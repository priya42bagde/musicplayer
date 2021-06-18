import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Alphabet",
      artist: "Charles Bradlee",
      img_src: "./images/abc.jpg",
      src: "./music/Kids-abc song.mp3",
    },
    {
      title: "You Are My Sunshine",
      artist: "Jimmie Davis",
      img_src: "./images/sunshine.jpg",
      src: "./music/Kids-You Are My Sunshine.mp3",
    },
    {
      title: "Johny Johny Yes Papa",
      artist: "Chandar",
      img_src: "./images/Johny.jpg",
      src: "./music/Kids-Johny Johny Yes Papa.mp3",
    },
    {
      title: "Twinkle Twinkle Little Star",
      artist: "Jane Taylor",
      img_src: "./images/twinkle.jpg",
      src: "./music/Kids-Twinkle twinkle little star.mp3",
    },
    {
      title: "Baba Baba Black Ship",
      artist: "Rudyard Kipling",
      img_src: "./images/sheep.jpg",
      src: "./music/Kids-Baba Black Sheep.mp3",
    },
    {
      title: "Baby Shark",
      artist: "Pinkfong",
      img_src: "./images/shark.jpg",
      src: "./music/Kids-Baby Shark.mp3",
    },
    {
      title: "Skidamarink",
      artist: "Felix F. Feist",
      img_src: "./images/skin.jpg",
      src: "./music/Kids-I love you.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
