import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended For You</h4>
        <Content>
            <Wrap>
                <img src='https://www.10wallpaper.com/wallpaper/1280x1024/1505/Stand_By_Me_Doraemon_Movie_HD_Widescreen_Wallpaper_08_1280x1024.jpg'/>
            </Wrap>
            <Wrap>
                <img src='https://www.10wallpaper.com/wallpaper/1280x1024/1505/Stand_By_Me_Doraemon_Movie_HD_Widescreen_Wallpaper_08_1280x1024.jpg'/>
            </Wrap>
            <Wrap>
                <img src='https://www.10wallpaper.com/wallpaper/1280x1024/1505/Stand_By_Me_Doraemon_Movie_HD_Widescreen_Wallpaper_08_1280x1024.jpg'/>
            </Wrap>
            <Wrap>
                <img src='https://www.10wallpaper.com/wallpaper/1280x1024/1505/Stand_By_Me_Doraemon_Movie_HD_Widescreen_Wallpaper_08_1280x1024.jpg'/>
            </Wrap>


        </Content>
    </Container>
  )
}

export default Movies

const Container= styled.div`

`
const Content = styled.div`
    display: grid;
    grid-gap:25px;
    grid-template-columns : repeat(4, minmax(0, 1fr));

`

const Wrap = styled.div`
cursor: pointer;
border-radius: 10px;
overflow: hidden;
border: rgba(249,249,249, 0.1);
box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
rgba(0 0 0 /73%) 0px 16px 10px -10px;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;


img{
    width: 100%;
    height: 100%;
    object-fit: cover;

}
&:hover{
    transform: scale(1.05);
    border-color: rgba(249,249,249, 0.8);
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}


`