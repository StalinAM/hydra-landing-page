import Atropos from 'atropos/react'
import 'atropos/css'
import Button from './Button'
import HeaderSection from './HeaderSection'
import image from '../assets/about.webp'
import url from '../assets/background-about.svg'
import { Container, Background } from '../style/Section'
import styled from 'styled-components'

const Content = styled.article`
  display: flex;
  justify-content: space-around;
  gap: 3rem;
  align-items: center;
  flex-wrap: wrap;
`
const ContainerImg = styled.div`
  border-radius: 100px 240px;
  border: 20px solid rgba(0, 0, 0, 0.25);
  overflow: hidden;
  @media screen and (max-width: 480px) {
    border: 10px solid rgba(0, 0, 0, 0.25);
    border-radius: 50px 120px;
  }
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`
const SubTitle = styled.h3`
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.xlFont};
  font-weight: bold;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Span = styled.span`
  font-weight: 300;
  position: relative;
`
const Description = styled.p`
  max-width: 65ch;
`
function About() {
  return (
    <Container id='about'>
      <Background url={url} />
      <HeaderSection
        title='INTRODUCTION'
        span='TO HYDRA VR'
        paragraph='Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'
      />
      <Content>
        <Atropos activeOffset={20} shadow={false} highlight={false}>
          <ContainerImg>
            <img src={image} alt='boy using virtual reality glasses' />
          </ContainerImg>
        </Atropos>
        <Right>
          <SubTitle>
            ABOUT <Span>HYDRA VR</Span>
          </SubTitle>
          <Description>
            Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
            mattis rhoncus urna neque viverra justo. Vivamus at augue eget arcu
            dictum. Ultrices gravida dictum fusce ut placerat orci. Aenean et
            tortor at risus viverra adipiscing at in. Mattis aliquam faucibus
            purus in massa. Est placerat in egestas erat imperdiet sed.
            Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
            etiam erat velit scelerisque in dictum non consectetur a. Laoreet
            sit amet cursus sit amet. Vel eros donec ac odio tempor orci
            dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
            bibendum. Leo a diam sollicitudin tempor.
          </Description>
          <Button text='LET’S GET IN TOUCH' href='#' />
        </Right>
      </Content>
    </Container>
  )
}

export default About
