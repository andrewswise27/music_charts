import React from 'react';
import MusicItem from './MusicItem';

const MusicList = ({songs}) => {
    
    const musicItems = songs.map((song, index) => {
        return <li key={index}>{song.feed.entry.title.label}</li>
    })
  
    return (
    <div>
        <ul>
            {musicItems}
        </ul>
    </div>
  )
}

export default MusicList;