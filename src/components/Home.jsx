import Button from './Button'
import arrow from '../assets/arrow.svg'
import imageHome from '../assets/home.webp'
import styled from 'styled-components'
import { Container } from '../style/Section'
import Wrapper from './Wrapper'
import { coordTransform, restoreTransform } from './Item3D'
import { useState } from 'react'
import ContactHome from './ContactHome'

const Image = styled.img`
  border-radius: 100px 100px 100px 240px;
  box-shadow: ${(props) => props.theme.box};
  transform-style: preserve-3d;
  @media screen and (max-width: 480px) {
    box-shadow: ${(props) => props.theme.mBox};
  }
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

function Home() {
  const [coordTransformS, setCoordTransformS] = useState()

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
          coordTransform={coordTransform}
          restoreTransform={restoreTransform}
          setCoordTransformS={setCoordTransformS}
        >
          <Image
            style={coordTransformS}
            src={imageHome}
            alt='girl using virtual reality glasses'
          />
        </Wrapper>
      </Content>
      <ContactHome />
    </Container>
  )
}

export default Home
