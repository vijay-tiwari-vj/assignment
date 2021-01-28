import React from 'react';
import styled from 'styled-components';

const TodoContainer = styled.section`
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

export const ToDo = () => {
  return (
    <TodoContainer>
      <Title>Coming Soon</Title>
    </TodoContainer>
  )
}

export default ToDo;
