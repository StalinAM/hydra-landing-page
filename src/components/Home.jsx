import Atropos from 'atropos/react'
import 'atropos/css'
import styled from 'styled-components'
import Button from './Button'
import ContactHome from './ContactHome'
import { Container } from '../style/Section'
import imageHome from '../assets/home.webp'
import url from '../assets/background-home.svg'
import arrow from '../assets/arrow.svg'

const Background = styled.div`
  position: absolute;
  background: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
`
const ContainerImg = styled.div`
  border-radius: 100px 100px 100px 240px;
  border: 20px solid rgba(0, 0, 0, 0.25);
  overflow: hidden;
  @media screen and (max-width: 480px) {
    border: 10px solid rgba(0, 0, 0, 0.25);
  }
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.xxlFont};
  span {
    color: ${(props) => props.theme.mLightPurple};
  }
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
  return (
    <Container id='home'>
      <Background url={url} />
      <Content>
        <Left>
          <Title>
            <span>Dive</span> Into The Depths of <span>Virtual Reality</span>
          </Title>
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
        <Atropos activeOffset={20} shadow={false} highlight={false}>
          <ContainerImg>
            <img src={imageHome} alt='girl using virtual reality glasses' />
          </ContainerImg>
        </Atropos>
      </Content>
      <ContactHome />
    </Container>
  )
}

export default Home
