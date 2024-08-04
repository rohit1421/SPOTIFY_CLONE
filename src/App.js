
// import React from 'react';
// import Sidebar from './components/Sidebar';
// import NowPlaying from './components/NowPlaying';
// import AlbumArt from './components/AlbumArt';
// import GlobalStyles from './styles/GlobalStyles';

// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <div className="App">
//         <Sidebar />
//         <main>
//           <AlbumArt />
//         </main>
//         <NowPlaying />
//       </div>
//     </>
//   );
// }

// export default App;
// App.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import NowPlaying from './components/NowPlaying';
import AlbumArt from './components/AlbumArt';
import UserIcon from './components/UserIcon';

const AppContainer = styled.div`
  display: flex;
  background-color: #121212;
  color: white;
  height: 100vh;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    fetch('https://cms.samespace.com/items/songs')
      .then(response => response.json())
      .then(data => {
        setSongs(data.data);
        if (data.data.length > 0) {
          setCurrentSong(data.data[0]);
        }
      })
      .catch(error => console.error('Error fetching songs:', error));
  }, []);

  const handleUserIconClick = () => {
    // Handle user icon click
    console.log('User icon clicked');
  };


  return (
    <AppContainer>
      <Sidebar songs={songs} setCurrentSong={setCurrentSong} />
      <MainContent>
        <AlbumArt currentSong={currentSong} />
        <NowPlaying currentSong={currentSong} />
      </MainContent>
      <UserIcon onClick={handleUserIconClick} />
    </AppContainer>
  );
};

export default App;