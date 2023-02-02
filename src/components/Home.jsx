import React, { useRef, useEffect, useState } from 'react'
import Button from './Button'
import location from '../assets/icons/location.svg'
import phone from '../assets/icons/phone.svg'
import email from '../assets/icons/email.svg'
import arrow from '../assets/arrow.svg'
import imageHome from '../assets/home.webp'
import styled from 'styled-components'
import { Container } from '../style/Section'
import useScreenSize from './ScreenSize'

const Image = styled.img`
  border-radius: 100px 100px 100px 240px;
  box-shadow: ${(props) => props.theme.box};
  transform-style: preserve-3d;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.xxlFont};
`
const Description = styled.p`
  font-size: ${(props) => props.theme.mFont};
`
const Content = styled.article`
  display: flex;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
  gap: 3rem;
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
  display: flex;
  padding: 2rem;
  background: radial-gradient(
    circle,
    rgba(64, 58, 95, 1) 13%,
    rgba(33, 30, 46, 1) 70%
  );
  border-radius: 90px;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
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
const Wrapper = styled.div`
  perspective: 1200px;
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
  const image3D = document.getElementById('image')
  // const wrapper = document.getElementById('wrapper')
  const [halfWidth, setHalfWidth] = useState(0)
  const [halfHeight, setHalfHeight] = useState(0)
  const contactRef = useRef()
  const { width, height } = useScreenSize()
  const sizeItem = () => {
    const { width, height } = contactRef.current.getBoundingClientRect()
    setHalfWidth(width / 2)
    setHalfHeight(-height / 2)
  }
  useEffect(() => {
    sizeItem()
  }, [width, height, image3D])

  const coordTransform = (event) => {
    const { offsetX, offsetY } = event.nativeEvent
    const rotationY = ((offsetX - halfWidth) / halfWidth) * 14
    const rotationX = ((offsetY + halfHeight) / halfHeight) * 14
    image3D.style.transitionDuration = '300ms'
    image3D.style.transform = `translate3d(0, 0, 120px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
    image3D.style.transitionTimingFunction = 'ease-out'
  }
  const restoreTransform = () => {
    image3D.style.transform = 'translate3d(0, 0, 0) rotateX(0deg) rotateY(0deg)'
  }
  return (
    <Container id='home'>
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
        <Wrapper
          id='wrapper'
          ref={contactRef}
          onMouseMove={(event) => coordTransform(event)}
          onMouseLeave={() => restoreTransform()}
        >
          <Image
            id='image'
            src={imageHome}
            alt='girl using virtual reality glasses'
          />
        </Wrapper>
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
    </Container>
  )
}

export default Home
