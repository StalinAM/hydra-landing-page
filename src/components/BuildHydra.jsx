import { Container } from '../style/Section'
import HeaderSection from './HeaderSection'
import arrow from '../assets/arrow.svg'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  align-items: center;
`
const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`
const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  box-shadow: ${(props) => props.theme.box};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.mLightPurple},
    ${(props) => props.theme.lightPurple}
  );
`
const Num = styled.span`
  font-size: ${(props) => props.theme.numSize};
  font-weight: bold;
  color: ${(props) => props.theme.darkPurple};
`
const Title = styled.div`
  display: flex;
  gap: 1rem;
`
const Icon = styled.img`
  width: 30px;
  height: auto;
`
const Text = styled.h3`
  font-size: ${(props) => props.theme.lFont};
  font-weight: bold;
`
function BuildHydra() {
  const stepList = [
    { id: 1, text: '3D Conception & Design' },
    { id: 2, text: 'Interaction Design' },
    { id: 3, text: 'VR World User Testing' },
    { id: 4, text: 'Hydra VR Deploy' }
  ]
  return (
    <Container>
      <HeaderSection
        title='HOW WE BUILD'
        span='WITH HYDRA VR?'
        paragraph='Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'
      />
      <List>
        {stepList.map((item) => (
          <Item key={item.id}>
            <Circle>
              <Num>0{item.id}</Num>
            </Circle>
            <Title>
              <Icon src={arrow} alt='' />
              <Text>{item.text}</Text>
            </Title>
          </Item>
        ))}
      </List>
    </Container>
  )
}

export default BuildHydra
