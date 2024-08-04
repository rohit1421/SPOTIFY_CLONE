import React from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa';

const UserIconContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  cursor: pointer;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #282828;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; // This ensures the image stays within the circular boundary
`;

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // This ensures the image covers the entire space without distortion
`;

const UserIcon = ({ onClick, imageUrl }) => {
  return (
    <UserIconContainer onClick={onClick}>
      <IconWrapper>
        {imageUrl ? (
          <UserImage src={imageUrl} alt="User" />
        ) : (
          <FaUser color="#fff" size={20} />
        )}
      </IconWrapper>
    </UserIconContainer>
  );
};

export default UserIcon;