import Atropos from 'atropos/react'
import 'atropos/css'
import styled from 'styled-components'
import Button from './Button'
const Container = styled.div`
  transform-style: preserve-3d;
  width: 330px;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1.5rem;
  align-items: center;
  gap: 1.5rem;
  background: radial-gradient(
    circle,
    rgba(64, 58, 95, 1) 13%,
    rgba(33, 30, 46, 1) 70%
  );
  border-radius: 40px;
  @media screen and (max-width: 1080px) {
    margin: 3rem 0;
  }
  @media screen and (max-width: 480px) {
    width: 280px;
  }
`
const Image = styled.img`
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.box};
  transform: translateZ(60px);
  transition: all 0.3s ease-out;
  @media screen and (max-width: 480px) {
    width: 50%;
    transform: translateZ(50px);
  }
`
const Title = styled.h3`
  font-size: ${(props) => props.theme.lFont};
  font-weight: bold;
`
const Line = styled.hr`
  width: 11ch;
  background-color: ${(props) => props.theme.lightPurple};
  border: none;
  height: 1px;
`
const Description = styled.p`
  font-size: ${(props) => props.theme.xsFont};
  font-weight: normal;
`
function Card({ src, alt, title, paragraph, text, href }) {
  return (
    <Atropos activeOffset={50} shadow={false} highlight={false}>
      <Container>
        <Image data-atropos-offset='-4' src={src} alt={alt} />
        <Title data-atropos-offset='15'>{title.toUpperCase()}</Title>
        <Line length={title.length} />
        <Description data-atropos-offset='3'>{paragraph}</Description>
        <Button data-atropos-offset='-4' text={text} href={href} />
      </Container>
    </Atropos>
  )
}

export default Card
