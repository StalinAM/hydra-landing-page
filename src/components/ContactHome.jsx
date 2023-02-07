import React from 'react'
import styled from 'styled-components'
import location from '../assets/icons/location.svg'
import phone from '../assets/icons/phone.svg'
import email from '../assets/icons/email.svg'
import useScreenSize from './hooks/ScreenSize'
import { Slideshow, Slide } from './SlideShow'
const Container = styled.div`
  display: flex;
  padding: 2rem;
  background: radial-gradient(
    circle,
    rgba(64, 58, 95, 1) 13%,
    rgba(33, 30, 46, 1) 70%
  );
  border-radius: 90px;
  align-items: center;
  justify-content: center;
  position: relative;
`
const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
  @media screen and (max-width: 1080px) {
    justify-content: center;
  }
`
const Line = styled.div`
  border-left: 1px solid ${(props) => props.theme.lightPurple};
  height: 57px;
  @media screen and (max-width: 1080px) {
    display: none;
  }
`
const TitleF = styled.p`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: ${(props) => props.theme.lFont};
`
const SpanT = styled.span`
  font-weight: normal;
  font-size: ${(props) => props.theme.sFont};
`
function ContactHome() {
  const { width } = useScreenSize()
  const footerHome = [
    {
      id: 1,
      icon: location,
      title: 'Pay Us a Visit',
      span: 'Union St, Seattle, WA 98101, United States',
      alt: 'location symbol on a map'
    },
    {
      id: 2,
      icon: phone,
      title: 'Give Us a Call',
      span: '(110) 1111-1010',
      alt: 'telephone symbol'
    },
    {
      id: 3,
      icon: email,
      title: 'Send Us a Message',
      span: 'Contact@HydraVTech.com',
      alt: 'email symbol'
    }
  ]
  return (
    <>
      <Container>
        {width < 1080 ? (
          <Slideshow>
            {footerHome.map((item) => (
              <Slide key={item.id}>
                <Item>
                  {item.id !== 1 && <Line />}
                  <img src={item.icon} alt={item.alt} />
                  <TitleF>
                    {item.title}
                    <SpanT>{item.span}</SpanT>
                  </TitleF>
                </Item>
              </Slide>
            ))}
          </Slideshow>
        ) : (
          <List>
            {footerHome.map((item) => (
              <li key={item.id}>
                <Item>
                  {item.id !== 1 && <Line />}
                  <img src={item.icon} alt={item.alt} />
                  <TitleF>
                    {item.title}
                    <SpanT>{item.span}</SpanT>
                  </TitleF>
                </Item>
              </li>
            ))}
          </List>
        )}
      </Container>
    </>
  )
}

export default ContactHome
