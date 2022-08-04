import React from 'react'

const MusicItem = ({song}) => {

  return (
  <li>{song.feed.entry.title.label}</li>
  )
};

export default MusicItem