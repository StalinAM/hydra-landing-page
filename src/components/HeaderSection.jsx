import styled from 'styled-components'
import arrow from '../assets/large-arrow.svg'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18rem;
`
const Title = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.xlFont};
  font-weight: bold;
`
const Span = styled.span`
  font-weight: 300;
  position: relative;
`
const Arrow = styled.img`
  position: absolute;
  right: -200px;
  top: -22px;
`
const Description = styled.p`
  max-width: 75ch;
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
