import React from 'react'
import styled from 'styled-components'

function Viewer() {
  return (
    <Container>
        <Wrap>
            <img src='/images/viewers-disney.png'/>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-pixar.png'/>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-marvel.png'/>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-starwars.png'/>
        </Wrap>
        <Wrap>
            <img src='/images/viewers-national.png'/>
        </Wrap>
    </Container>
  )
}

export default Viewer

const Container = styled.div`
    margin-top:30px;
    display: grid;
    padding : 30px 0 26px;
    grid-gap: 25px;
    grid-template-columns:repeat(5,minmax(0,1fr));
`
const Wrap = styled.div`
    border-radius: 10px;
    border: 3px solid rgba(249,249,249, 0.1);
    box-shadow:rgba(0 0 0 / 69%) 0px 26px 30px -10px,
    rgba(0 0 0 /73%) 0px 16px 12px -10px;
    cursor: pointer;
    transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.05);
        border-color: rgba(249,249,249, 0.8);
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }

`