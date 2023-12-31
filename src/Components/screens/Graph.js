import React from 'react'
import styled from 'styled-components'

export default function Graph() {
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
margin-top: 115px;
@media all and (max-width: 1080px){
  font-size:35px;
  margin: 90px 100px 0px -150px;
};
@media all and (max-width: 768px){
  font-size:30px;
};
@media all and (max-width: 640px){
  font-size: 25px;
  margin: 111px 0px 0px -100px;
};
`;
