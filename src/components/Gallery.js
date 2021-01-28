import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #eeeeee;
`;

export const Gallery = () => {
  return (
    <GalleryContainer>
      <Title>Coming Soon</Title>
    </GalleryContainer>
  )
}

export default Gallery;
