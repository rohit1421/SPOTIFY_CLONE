// Sidebar.js
// import React from 'react';
// import styled from 'styled-components';
// import { FaSpotify, FaSearch } from 'react-icons/fa';

// const SidebarContainer = styled.div`
//   width: 300px;
//   background-color: #000000;
//   padding: 20px;
// `;

// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   font-size: 24px;
//   margin-bottom: 20px;
// `;

// const SearchInput = styled.input`
//   width: 100%;
//   padding: 10px;
//   background-color: #282828;
//   border: none;
//   border-radius: 4px;
//   color: white;
//   margin-bottom: 20px;
// `;

// const PlaylistItem = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
// `;

// const TrackImage = styled.img`
//   width: 40px;
//   height: 40px;
//   margin-right: 10px;
// `;

// const TrackInfo = styled.div`
//   flex-grow: 1;
// `;

// const TrackName = styled.div`
//   font-weight: bold;
// `;

// const ArtistName = styled.div`
//   font-size: 12px;
//   color: #b3b3b3;
// `;

// const TrackDuration = styled.div`
//   font-size: 12px;
//   color: #b3b3b3;
// `;

// const Sidebar = () => {
//   const playlist = [
//     { name: 'Starboy', artist: 'The Weeknd', duration: '4:16' },
//     { name: 'Demons', artist: 'Imagine Dragons', duration: '5:24' },
//     { name: 'Mouth of the river', artist: 'Imagine Dragons', duration: '6:23' },
//     { name: 'Ghost Stories', artist: 'Coldplay', duration: '3:10' },
//     { name: 'Sparks', artist: 'Coldplay', duration: '4:23' },
//     { name: 'Viva La Vida', artist: 'Coldplay', duration: '5:32' },
//     { name: 'Hymn for the weekend', artist: 'Coldplay', duration: '2:23' },
//     { name: 'Pain', artist: 'Ryan Jones', duration: '3:12' },
//     { name: 'Origin', artist: 'Imagine Dragons', duration: '3:43' },
//   ];

//   return (
//     <SidebarContainer>
//       <Logo>
//         <FaSpotify style={{ marginRight: '10px' }} /> Spotify
//       </Logo>
//       <SearchInput placeholder="Search Song, Artist" />
//       {playlist.map((track, index) => (
//         <PlaylistItem key={index}>
//           <TrackImage src={`https://via.placeholder.com/40`} alt={track.name} />
//           <TrackInfo>
//             <TrackName>{track.name}</TrackName>
//             <ArtistName>{track.artist}</ArtistName>
//           </TrackInfo>
//           <TrackDuration>{track.duration}</TrackDuration>
//         </PlaylistItem>
//       ))}
//     </SidebarContainer>
//   );
// };

// export default Sidebar;

// components/Sidebar.js
// components/Sidebar.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSpotify} from 'react-icons/fa';

const SidebarContainer = styled.div`
  width: 300px;
  background-color: #000000;
  padding: 20px;
  overflow-y: auto;
  margin-left: 0%; /* Adjust this value as needed */
  width: 50%;
`;


const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #1DB954;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const NavItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  padding: 5px 25px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
`;

const NavContainer = styled.div`
  display: flex;
  gap: 20px; 
  margin-left:160px;
`;



const SearchInput = styled.input`
  width: 50%;
  padding: 10px;
  background-color: #282828;
  border: none;
  border-radius: 20px;
  color: white;
  margin-bottom: 20px;
  margin-left:160px;
`;

const PlaylistItem = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  padding: 30px 0;
  cursor: pointer;
  &:hover {
    background-color: #282828;
  }
  margin-left:160px;
`;

const TrackImage = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

const TrackInfo = styled.div`
  flex-grow: 1;
`;

const TrackName = styled.div`
  font-size: 14px;
  color: white;
`;

const ArtistName = styled.div`
  font-size: 12px;
  color: #b3b3b3;
`;

const TrackDuration = styled.div`
  font-size: 12px;
  color: #b3b3b3;
`;
const Sidebar = ({ songs, setCurrentSong }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredSongs = songs.filter(song =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SidebarContainer >
      <Logo>
        <FaSpotify style={{ marginRight: '10px' }} /> Spotify
      </Logo>
      <div className='box'> 
        <NavContainer>
          <NavItem>For You</NavItem>
          <NavItem>Top Tracks</NavItem>
        </NavContainer>

        <SearchInput 
          placeholder="Search Song, Artist" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredSongs.map((song) => (
          <PlaylistItem key={song.id} onClick={() => setCurrentSong(song)}>
            <TrackImage src={`https://cms.samespace.com/assets/${song.cover}`} alt={song.name} />
            <TrackInfo>
              <TrackName>{song.name}</TrackName>
              <ArtistName>{song.artist}</ArtistName>
            </TrackInfo>
            <TrackDuration>{formatDuration(song.duration)}</TrackDuration>
          </PlaylistItem>
        ))}
      </div>
    </SidebarContainer>
  );
};

const formatDuration = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export default Sidebar;



