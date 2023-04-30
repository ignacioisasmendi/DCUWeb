import React, {useState} from 'react';
import styled from 'styled-components';
import MenuButton from './MenuButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faWindowRestore} from '@fortawesome/free-solid-svg-icons'



function Navbar(){

  const[clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta negado lo pasa a false y viceversa
    setClicked(!clicked)
  }
  return(
    <>
      <NavContainer>
        <a className='logo-img-container' href='index.html'>
          <img src={require('../imagen/DCUlogo.png')}/>
          <h2><span>Don't Call Us</span></h2>
        </a>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a className='link' onClick={handleClick} href='index.html'><FontAwesomeIcon className='icons' icon={faHouse} /> Inicio</a>
          <a className='link' onClick={handleClick} href='https://www.youtube.com/watch?v=KQ_xtBn4r94'><FontAwesomeIcon className='icons' icon={faWindowRestore} /> Demo</a>
          <a onClick={handleClick} href='https://www.youtube.com/watch?v=kJ1Fv23KxP0&ab_channel=IndioSolariOficial'><FontAwesomeIcon className='icons' icon={faUsers} /> Sobre Nosotros</a>
        </div>
        <div className='button-container'>
          <MenuButton clicked={clicked} handleClick={handleClick}/>
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

const NavContainer = styled.nav`
  h2{
    color: #000;
    font-weight: 400;
    position: relative;
    top: -75px;
    left: 90px;
    height: 20px;
    span{
      font-weight: bold;
    }
  }

  .logo-img-container{
    height: 80px;
    width: 145px;
  }

  img{
    width: 80px;
    height: 80px;
    top: 5px;

    position: relative;
  }

  padding: .4rem;
  height 75px;
  background-color: #c60;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: #fff;
    text-decoration: none;
    margin-right: 1rem;
  }
  

  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: #fff;
      font-size: 2rem;
      display: block;
    }
    .a:hover{
      color: #4ff;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: #000;
        display: inline;
        margin-left: 5px;
      }
      a:hover{
        color: #ccc;
      }
    }
  
  }

 

  .links.active{
    width: fit-content;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: #fff;
      margin-left: 20px;
      margin-top: 10px;
    }
    a:hover{
      color: #4ff;
      .icons{
        color: #4ff;
      }
    }
    .icons{
      color: #fff;
    }
    .link{
      width: fit-content;
      margin-left: 80px;
    }
    
  }

  .button-container{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  position: absolute;
  background-color: #222;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease;
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default Navbar;
