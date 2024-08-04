// AlbumArt.js
// import React from 'react';
// import styled from 'styled-components';

// const AlbumArtContainer = styled.div`
//   flex-grow: 1;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const AlbumImage = styled.img`
//   width: 300px;
//   height: 300px;
// `;

// const AlbumArt = () => {
//   return (
//     <AlbumArtContainer>
//       <AlbumImage src="/path-to-viva-la-vida-album-art.jpg" alt="Viva La Vida" />
//     </AlbumArtContainer>
//   );
// };

// export default AlbumArt;

// components/AlbumArt.js
import React from 'react';
import styled from 'styled-components';

const AlbumArtContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlbumImage = styled.img`
  width: 300px;
  height: 300px;
`;

const AlbumArt = ({ currentSong }) => {
  return (
    <AlbumArtContainer>
      {currentSong && (
        <AlbumImage 
          src={`https://cms.samespace.com/assets/${currentSong.cover}`} 
          alt={currentSong.name} 
        />
      )}
    </AlbumArtContainer>
  );
};

export default AlbumArt;