import React from 'react'
import Button from './Button'
import HeaderSection from './HeaderSection'
import image from '../assets/about.webp'
import { Container } from '../style/Section'
import styled from 'styled-components'

const Content = styled.article`
  display: flex;
  justify-content: space-around;
  gap: 3rem;
  align-items: center;
`
const Image = styled.img`
  box-shadow: ${(props) => props.theme.box};
  border-radius: 100px 240px;
  transform: matrix(-1, 0, 0, 1, 0, 0);
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
`
const SubTitle = styled.h3`
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.xlFont};
  font-weight: bold;
`
const Span = styled.span`
  font-weight: 300;
  position: relative;
`
const Description = styled.p`
  max-width: 75ch;
`
function About() {
  return (
    <Container id='about'>
      <HeaderSection
        title='INTRODUCTION'
        span='TO HYDRA VR'
        paragraph='Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'
      />
      <Content>
        <Image src={image} alt='boy using virtual reality glasses' />
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
