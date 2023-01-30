import React from 'react'
import Button from './Button'
import location from '../assets/icons/location.svg'
import phone from '../assets/icons/phone.svg'
import email from '../assets/icons/email.svg'
import arrow from '../assets/arrow.svg'
import iamgeHome from '../assets/home.svg'
import styled from 'styled-components'

const Image = styled.img`
  border-radius: 100px 100px 100px 240px;
  box-shadow: ${(props) => props.theme.box};
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.xxlFont};
`
const Description = styled.p`
  font-size: ${(props) => props.theme.mFont};
`
const Content = styled.article`
  display: flex;
  justify-content: space-around;
`
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 45ch;
`
const ContainerBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
const Contact = styled.ul`
  margin-top: 5rem;
  display: flex;
  padding: 2rem ;
  background: radial-gradient(
    circle,
    rgba(64, 58, 95, 1) 13%,
    rgba(33, 30, 46, 1) 70%
  );
  border-radius: 90px;
  align-items: center;
  justify-content: space-around;
`
const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`
const Line = styled.div`
  border-left: 1px solid ${(props) => props.theme.lightPurple};
  height: 57px;
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
function Home() {
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
    <section id='home'>
      <Content>
        <Left>
          <Title>Dive Into The Depths of Virtual Reality</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
            Lectus mauris eros in vitae .
          </Description>
          <ContainerBtn>
            <Button text='build your world' href='#' />
            <img src={arrow} />
          </ContainerBtn>
        </Left>
        <Image src={iamgeHome} alt='girl using virtual reality glasses' />
      </Content>
      <Contact>
        {footerHome.map((item) => (
          <Item key={item.id}>
            {item.id !== 1 && <Line />}
            <img src={item.icon} alt={item.alt} />
            <TitleF>
              {item.title}
              <SpanT>{item.span}</SpanT>
            </TitleF>
          </Item>
        ))}
      </Contact>
    </section>
  )
}

export default Home
