import React from 'react'
import styled from 'styled-components'
import logo from '../assets/symbol-logo.svg'
import url from '../assets/background-footer.svg'
import facebook from '../assets/social/facebook.svg'
import twitter from '../assets/social/twitter.svg'
import linkedin from '../assets/social/linkedin.svg'
import youtube from '../assets/social/youtube.svg'
import instagram from '../assets/social/instagram.svg'
import pinterest from '../assets/social/pinterest.svg'
import Button from './Button'
const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: 6rem 5rem 4rem;
  background: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1080px) {
    padding: 3rem 1.5rem 4rem;
  }
  @media screen and (max-width: 768px) {
    padding: 3rem 1rem 3rem;
  }
`
const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
const Logo = styled.img`
  margin: auto 0;
`
const Vertical = styled.div`
  border-left: 1px solid ${(props) => props.theme.lightPurple};
  height: 144px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const List = styled.ul`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.mFont};
  font-weight: bold;
  @media screen and (max-width: 768px) {
    display: none;
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
    height: 2px;
    background-color: ${(props) => props.theme.lightPurple};
    bottom: -5px;
    width: 0%;
  }
  &:hover::before {
    width: 100%;
  }
`
const Socialize = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
const ListRRSS = styled.ul`
  display: flex;
  gap: 1rem;
`
const ItemS = styled.li`
  transition: all ease-in-out 0.4s;
  &:hover {
    transform: scale(1.2);
  }
`
const Horizontal = styled.div`
  border-top: 1px solid ${(props) => props.theme.lightPurple};
  width: 100%;
`
const Copyright = styled.p`
  font-size: ${(props) => props.theme.sFont};
  color: ${(props) => props.theme.white};
`
const Authors = styled.a`
  color: ${(props) => props.theme.lightPurple};
  &:hover {
    text-decoration: underline;
  }
`

function Footer() {
  const NAVIGATION_LINKS = [
    { title: 'About', href: '#about' },
    { title: 'Services', href: '#services' },
    { title: 'Technologies', href: '#technologies' },
    { title: 'How to', href: '#how-to' }
  ]
  const HELP_LINKS = [
    { title: 'F.A.Q', href: '#' },
    { title: 'SITEMAP', href: '#' },
    { title: 'CONDITIONS', href: '#' },
    { title: 'LICENSES', href: '#' }
  ]
  const RR_SS = [
    { icon: facebook, href: 'https://www.facebook.com/' },
    { icon: twitter, href: 'https://www.twitter.com/' },
    { icon: linkedin, href: 'https://www.linkedin.com/' },
    { icon: youtube, href: 'https://www.youtube.com/' },
    { icon: instagram, href: 'https://www.instagram.com/' },
    { icon: pinterest, href: 'https://www.pinterest.com/' }
  ]
  return (
    <Container url={url}>
      <Content>
        <Logo src={logo} alt='logo hydra' />
        <Vertical />
        <List>
          {NAVIGATION_LINKS.map((item) => (
            <Item key={item.href}>
              <a href={item.href}>{item.title.toUpperCase()}</a>
            </Item>
          ))}
        </List>
        <Vertical />
        <List>
          {HELP_LINKS.map((item, index) => (
            <Item key={index}>
              <a href={item.href}>{item.title.toUpperCase()}</a>
            </Item>
          ))}
        </List>
        <Vertical />
        <Socialize>
          <h3>SOCIALIZE WITH HYDRA</h3>
          <ListRRSS>
            {RR_SS.map((item, index) => (
              <ItemS key={index}>
                <a href={item.href} target='_blank' rel='noreferrer'>
                  <img src={item.icon} alt='' />
                </a>
              </ItemS>
            ))}
          </ListRRSS>
          <Button text='Build your world' href='#' />
        </Socialize>
      </Content>
      <Horizontal />
      <Copyright>
        Hydra Landing Page designed by{' '}
        <Authors
          href='https://www.figma.com/@zinefalouti'
          target='_blank'
          rel='noreferrer'
        >
          Zine E. Falouti
        </Authors>{' '}
        and built by{' '}
        <Authors
          href='https://svam.netlify.app/'
          target='_blank'
          rel='noreferrer'
        >
          Stalin A.
        </Authors>
      </Copyright>
    </Container>
  )
}

export default Footer
