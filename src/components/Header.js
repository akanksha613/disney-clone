import React from 'react'
import styled from 'styled-components';

function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu>
          <a>
            <img src='/images/home-icon.svg'/>
            <span>HOME</span>
          </a>
          <a>
            <img src='/images/search-icon.svg'/>
            <span>SEARCH</span>
          </a>
          <a>
            <img src='/images/watchlist-icon.svg'/>
            <span>WATCHLIST</span>
          </a>
          <a>
            <img src='/images/original-icon.svg'/>
            <span>ORIGINALS</span>
          </a>
          <a>
            <img src='/images/movie-icon.svg'/>
            <span>MOVIES</span>
          </a>
          <a>
            <img src='/images/series-icon.svg'/>
            <span>SERIES</span>
          </a>
        </NavMenu>

        <UserImg src='https://lumiere-a.akamaihd.net/v1/images/ct_mulan_upcportalreskin_20694_78e0045d.jpeg'/>

    </Nav>

  )
}

export default Header

const Nav = styled.div`
  height: 70px;
  background: black;
  display:flex;
  align-items: center;
  padding: 0 30px;
  overflow-x: hidden

`
const Logo = styled.img`
  width: 80px;

`
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
  a{
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img{
      height: 20px;
    }
    span{
      font-size: 13px ;
      letter-spacing: 1.42px;
      position: relative;
      &:after{
        content:'';
        height: 2px;
        background: white;
        position: absolute;
        left:0;
        right:0;
        bottom:-6px;
        opacity: 0;
        transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
        transform-origin: left center;
        transform: scaleX(0);
      }
    }
    &:hover{
      span:after{
        transform: scaleX(1);
        opacity:1;
      }
    }

  }
`
const UserImg = styled.img`

  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
`