import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import open from '../assets/hamburger.svg'
import close from '../assets/close.svg'
import Button from './Button'

const Container = styled.nav`
  padding: 3rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1280px) {
    padding: 3rem 2.5rem;
  }
  @media screen and (max-width: 480px) {
    padding: 2rem 1rem;
  }
`
const MenuC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  @media screen and (max-width: 1080px) {
    display: ${(props) => (props.show ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.darkPurple};
    flex-direction: column;
    width: min(75vw, 400px);
    height: 100vh;
    justify-content: center;
    z-index: 300;
  }
`
const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  color: ${(props) => props.theme.white};
  @media screen and (max-width: 1280px) {
    gap: 2rem;
  }
  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
  }
`
const Item = styled.li`
  cursor: pointer;
  position: relative;
  &:hover {
    color: ${(props) => props.theme.lightPurple};
  }
  &::before {
    content: '';
    position: absolute;
    height: 3px;
    background-color: ${(props) => props.theme.lightPurple};
    bottom: -10px;
    transition: 0.3s;
    width: 0%;
  }
  &:hover::before {
    width: 100%;
  }
`
const ButtonC = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  @media screen and (max-width: 1080px) {
    display: flex;
    justify-content: center;
  }
`
const Open = styled.img`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 1080px) {
    display: block;
  }
`
const Close = styled.img`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 1080px) {
    display: block;
    top: 95px;
    right: 40px;
    position: absolute;
  }
`
function Header({ toggle, setToggle }) {
  const NAVIGATION_LINKS = [
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Technologies', href: '#technologies' },
    { title: 'How to', href: '#how-to' }
  ]
  return (
    <header>
      <Container>
        <img src={logo} />
        <MenuC show={toggle}>
          <Menu>
            {NAVIGATION_LINKS.map((item) => (
              <Item key={item.href}>
                <a href={item.href}>{item.title.toUpperCase()}</a>
              </Item>
            ))}
            <Close src={close} onClick={() => setToggle(!toggle)} />
          </Menu>
          <ButtonC>
            <Button href='#contact' text='contact us' />
            <Button href='#' text='join hydra' />
          </ButtonC>
        </MenuC>
        <Open onClick={() => setToggle(!toggle)} src={open} />
      </Container>
    </header>
  )
}

export default Header
