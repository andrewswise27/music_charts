import React, { useEffect, useState } from 'react';
import MusicList from '../components/MusicList';

const MusicContainer = () => {
    const [songs, setSongs] = useState([]);

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs))
    };


  
  return (
    <div>
        hello
        <MusicList songs={songs}/>
    </div>
  )
}

export default MusicContainer;