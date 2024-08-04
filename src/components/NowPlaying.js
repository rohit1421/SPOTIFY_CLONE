// NowPlaying.js
// import React from 'react';
// import styled from 'styled-components';
// import { FaPlayCircle, FaStepBackward, FaStepForward, FaVolumeUp } from 'react-icons/fa';

// const NowPlayingContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px;
//   background-color: #282828;
// `;

// const Controls = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const PlayButton = styled(FaPlayCircle)`
//   font-size: 32px;
//   margin: 0 20px;
// `;

// const TrackInfo = styled.div`
//   text-align: center;
// `;

// const TrackName = styled.div`
//   font-weight: bold;
// `;

// const ArtistName = styled.div`
//   font-size: 12px;
//   color: #b3b3b3;
// `;

// const VolumeControl = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const NowPlaying = () => {
//   return (
//     <NowPlayingContainer>
//       <Controls>
//         <FaStepBackward />
//         <PlayButton />
//         <FaStepForward />
//       </Controls>
//       <TrackInfo>
//         <TrackName>Viva La Vida</TrackName>
//         <ArtistName>Coldplay</ArtistName>
//       </TrackInfo>
//       <VolumeControl>
//         <FaVolumeUp style={{ marginRight: '10px' }} />
//         {/* Add a volume slider here if needed */}
//       </VolumeControl>
//     </NowPlayingContainer>
//   );
// };

// export default NowPlaying;


// components/NowPlaying.js
// import React from 'react';
// import styled from 'styled-components';
// import { FaPlayCircle, FaStepBackward, FaStepForward, FaVolumeUp } from 'react-icons/fa';

// // Styled components
// const NowPlayingContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 20px;
//   background-color: #282828;
//   color: white;
// `;

// const Controls = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const PlayButton = styled(FaPlayCircle)`
//   font-size: 32px;
//   margin: 0 15px;
//   cursor: pointer;
// `;

// const TrackInfo = styled.div`
//   text-align: center;
// `;

// const TrackName = styled.h3`
//   margin: 0;
//   font-size: 16px;
// `;

// const ArtistName = styled.p`
//   margin: 5px 0 0;
//   font-size: 14px;
//   color: #b3b3b3;
// `;

// const VolumeControl = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const NowPlaying = ({ currentSong }) => {
//   return (
//     <NowPlayingContainer>
//       <Controls>
//         <FaStepBackward />
//         <PlayButton />
//         <FaStepForward />
//       </Controls>
//       {currentSong && (
//         <TrackInfo>
//           <TrackName>{currentSong.name}</TrackName>
//           <ArtistName>{currentSong.artist}</ArtistName>
//         </TrackInfo>
//       )}
//       <VolumeControl>
//         <FaVolumeUp style={{ marginRight: '10px' }} />
//       </VolumeControl>
//     </NowPlayingContainer>
//   );
// };

// export default NowPlaying;


// import React from 'react';
// import styled from 'styled-components';
// import { FaPlayCircle, FaStepBackward, FaStepForward, FaVolumeUp } from 'react-icons/fa';

// const NowPlayingContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   padding: 10px 20px;
//   background-color: #282828;
//   color: white;
// `;

// const Controls = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const PlayButton = styled(FaPlayCircle)`
//   font-size: 32px;
//   margin: 0 15px;
//   cursor: pointer;
// `;

// const TrackInfo = styled.div`
//   text-align: left;
// `;

// const TrackName = styled.div`
//   font-size: 14px;
// `;

// const ArtistName = styled.div`
//   font-size: 12px;
//   color: #b3b3b3;
// `;

// const VolumeControl = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const NowPlaying = ({ currentSong }) => {
//   return (
//     <NowPlayingContainer>
//       {currentSong && (
//         <TrackInfo>
//           <TrackName>{currentSong.name}</TrackName>
//           <ArtistName>{currentSong.artist}</ArtistName>
//         </TrackInfo>
//       )}
//       <Controls>
//         <FaStepBackward />
//         <PlayButton />
//         <FaStepForward />
//       </Controls>
//       <VolumeControl>
//         <FaVolumeUp style={{ marginRight: '10px' }} />
//       </VolumeControl>
//     </NowPlayingContainer>
//   );
// };

// export default NowPlaying;


import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaPlayCircle, FaPauseCircle, FaStepBackward, FaStepForward, FaVolumeUp } from 'react-icons/fa';

const NowPlayingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #282828;
  color: white;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.div`
  font-size: 32px;
  margin: 0 15px;
  cursor: pointer;
`;

const TrackInfo = styled.div`
  text-align: left;
`;

const TrackName = styled.div`
  font-size: 14px;
`;

const ArtistName = styled.div`
  font-size: 12px;
  color: #b3b3b3;
`;

const VolumeControl = styled.div`
  display: flex;
  align-items: center;
`;

const NowPlaying = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(currentSong?.url));

  useEffect(() => {
    audioRef.current.src = currentSong?.url;
    if (isPlaying) {
      audioRef.current.play().catch((error) => console.error(error));
    } else {
      audioRef.current.pause();
    }
  }, [currentSong, isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <NowPlayingContainer>
      {currentSong && (
        <TrackInfo>
          <TrackName>{currentSong.name}</TrackName>
          <ArtistName>{currentSong.artist}</ArtistName>
        </TrackInfo>
      )}
      <Controls>
        <FaStepBackward />
        <PlayButton onClick={handlePlayPause}>
          {isPlaying ? <FaPauseCircle /> : <FaPlayCircle />}
        </PlayButton>
        <FaStepForward />
      </Controls>
      <VolumeControl>
        <FaVolumeUp style={{ marginRight: '10px' }} />
      </VolumeControl>
    </NowPlayingContainer>
  );
};

export default NowPlaying;
