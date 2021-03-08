
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { addSong } from '../features/songSlice'
import { useDispatch } from "react-redux";

export default function AddNewSong() {

    const dispatch = useDispatch();

    const [songName, setSongName] = useState("");
    const [singerName, setSingerName] = useState("");
    const [lyric, setLyric] = useState("");
    const history = useHistory();

    const handdleSubmit = (event) => {
        event.preventDefault();
        if (songName && singerName && lyric) {
            const newId = uuidv4()
            
            const newSong = {
                id: newId,
                author: singerName,
                title: songName,
                lyric: lyric,
                publishedDate: new Date().toISOString()
            }
            dispatch(addSong(newSong))
            history.push(`/song/${newId}`)
        } else {
            alert('Please input all the fields!')
        }
    }

    return (
        <div className="add-new-song">
            <form >
                <h1>Hello! You are adding the song Name: `<b>{songName}</b>` of singer: `<b>{singerName}</b>` </h1>
                <p>Enter the song name:</p>
                <input
                    type='text'
                    name='songName'
                    value={songName}
                    onChange={e => setSongName(e.target.value)}
                />
                <p>Enter the singer name:</p>
                <input
                    type='text'
                    name='singerName'
                    value={singerName}
                    onChange={e => setSingerName(e.target.value)}
                />
                <p>Enter the short lyric:</p>
                <input
                    type='text'
                    name='lyric'
                    value={lyric}
                    onChange={e => setLyric(e.target.value)}
                />
                <div><button onClick={handdleSubmit} disabled={!songName || !singerName || !lyric}>Add New</button></div>
            </form>
        </div>
    )
}
function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        // eslint-disable-next-line 
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}