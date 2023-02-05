import styled from 'styled-components'
import arrow from '../assets/large-arrow.svg'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18rem;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`
const Title = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.xlFont};
  font-weight: bold;
  @media screen and (max-width: 768px) {
    text-align: center;
    align-items: center;
  }
`
const Span = styled.span`
  font-weight: 300;
  position: relative;
`
const Arrow = styled.img`
  position: absolute;
  right: -250px;
  top: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Description = styled.p`
  max-width: 75ch;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
function HeaderSection({ title, span, paragraph }) {
  return (
    <Container>
      <Title>
        {title.toUpperCase()}
        <Span>
          {span.toUpperCase()}
          <Arrow src={arrow} />
        </Span>
      </Title>
      <Description>{paragraph}</Description>
    </Container>
  )
}

export default HeaderSection
