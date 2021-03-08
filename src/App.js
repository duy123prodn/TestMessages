import MessengerCustomerChat from 'react-messenger-customer-chat';
import React, { useState } from 'react'
import './App.css'
import Home from './components/Home'
import AddNewSong from './components/AddNewSong'
import SongList from './components/SongList'
import SongDetail from './components/SongDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import { useSelector } from 'react-redux'

// const sortedSong = [...externalsongs].sort((a, b) => new Date(a.publishedDate) - new Date(b.publishedDate))


function App() {

  const songListFromStore = useSelector(state => state.songs.songList);
  console.log(songListFromStore);


  // const [ song ] = useState(songListFromStore);


  return (
    <div className="App">
      <Router>
        <div className="Navbar">
          <NavLink to="/Home">Home</NavLink>

          <NavLink to="/AddNewSong">Add New Song</NavLink>

          <NavLink to="/songs">List of Songs</NavLink>
        </div>
        <div >
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/songs">
              <SongList songs={songListFromStore} />
            </Route>
            <Route path="/song/:songId">
              <SongDetail songs={songListFromStore} />
            </Route>
            <Route path="/AddNewSong">
              <AddNewSong songs={songListFromStore} />
            </Route>
          </Switch>
        </div>
      </Router>
      <div>
        <MessengerCustomerChat
          pageId="105409911443105"
          appId="338273787600006"
          htmlRef="<REF_STRING>"
        />
      </div>
    </div>

  );
}

export default App;
