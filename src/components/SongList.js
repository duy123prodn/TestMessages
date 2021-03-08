import React from 'react'
import { Link } from 'react-router-dom'
import SongRow from "./SongRow";

export default function songList(props){
  return (
    <div>
      <h1>Hello. This is ListSongs Page !</h1>
      {props.songs.map(song => 
        <Link key={song.id} to={`song/${song.id}`}><SongRow song={song}></SongRow></Link>
        )}
    </div>
  )
}