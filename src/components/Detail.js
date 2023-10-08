import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src='https://i.ytimg.com/vi/7rspQR7rhf0/maxresdefault.jpg'/>
      </Background>
      <ImageTitle>
        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/679119E881B53C0ED9485B0A245963AB9E428F65A165908BC64C1AFC46C4D8C6/scale?width=1200&aspectRatio=1.78'/>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src='/images/play-icon-black.png'/>
          <span>PLAY</span>
        </PlayButton>

        <TrailerButton>
          <img src='/images/play-icon-white.png'/>
          <span>TRAILER</span>
        </TrailerButton>

        <AddButton>
          <span>+</span>
        </AddButton>

        <GroupWatchButton>
          <img src='/images/group-icon.png'/>
        </GroupWatchButton>

      </Controls>
      <SubTitle>
        2018.7m.Family,Fantasy, Kids, Animation
      </SubTitle>
      <Description>
        A Chinesemom who's sad when her grown son leaves home gets another chance at motherhood when one of her dumplings springs to life. But she finds that nothing stays cute and small forever
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

`
const Background = styled.div`
  position:fixed;
  top:0;
  bottom: 0;
  left:0;
  right:0;
  z-index:-1;
  opacity:0.8;
  img{
    width: 100%;
    height:100%;
    object-fit:cover;
  }
`

const ImageTitle = styled.div`
  heigth: 30vh;
  width : 25vw;
  min-height: 170px;

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Controls = styled.div`
display:flex;
align-items: center;
`

const PlayButton = styled.button`
border-radius:4px;
font-size:15px;
display: flex;
padding: 0 22px;
margin-right: 20px;
align-items:center;
height: 56px;
background: rgb(249, 249, 249);
border: none;
letter-spacing:1.8px;
cursor: pointer;

&:hover{
  background: rgb(198, 198, 198);
}
`
const TrailerButton = styled(PlayButton)`
background: rgba(0,0,0,0.3);
border: 1px solid rgb(249, 249, 249);
color: rgb(249, 249, 249);
`
const AddButton = styled.button`
margin-right: 16px;
display:flex;
height:44px;
width:44px;
border-radius:50%;
border: 2px solid white;
align-items:center;
justify-content: center;
background-color:rgba(0,0,0,0.6);
cursor: pointer;
span{
  font-size: 30px;
  color:white;
}
`
const GroupWatchButton = styled(AddButton)`
background: rgb(0,0,0);
`

const SubTitle = styled.div`
color: rgb(249, 249, 249);
font-size: 15px;
min-height:20px;
margin-top: 26px;
display:flex;
`

const Description = styled.div`
line-height: 1.4;
font-size:20px;
margin-top:16px;
color: rgb(249, 249, 249);
text-align:left;
`
