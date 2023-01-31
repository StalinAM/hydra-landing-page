import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.svg'
import Button from './Button'

const Container = styled.nav`
  padding: 3rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Menu = styled.ul`
  display: flex;
  gap: 3rem;
  color: ${(props) => props.theme.white};
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
  gap: 1.5rem;
`
function Header() {
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
        <Menu>
          {NAVIGATION_LINKS.map((item) => (
            <Item key={item.href}>
              <a href={item.href}>{item.title.toUpperCase()}</a>
            </Item>
          ))}
        </Menu>
        <ButtonC>
          <Button href='#contact' text='contact us' />
          <Button href='#' text='join hydra' />
        </ButtonC>
      </Container>
    </header>
  )
}

export default Header
