import styled from 'styled-components'
import Button from './Button'

const Container = styled.li`
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
`
const Image = styled.img`
  border-radius: 50%;
  box-shadow: ${(props) => props.theme.box};
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
    <Container>
      <Image src={src} alt={alt} />
      <Title>{title.toUpperCase()}</Title>
      <Line length={title.length} />
      <Description>{paragraph}</Description>
      <Button text={text} href={href} />
    </Container>
  )
}

export default Card