import React from 'react'
import styled from 'styled-components';

export default function Tea() {
  return (
    <Container>
        <Heading>
            Coming Soon...
        </Heading>
    </Container>
  )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 100vh;
width: -webkit-fill-available;
`;

const Heading = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
`;
