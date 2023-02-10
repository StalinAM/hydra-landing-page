import { Container } from '../style/Section'
import url from '../assets/background-how-build.svg'
import HeaderSection from './HeaderSection'
import arrow from '../assets/arrow.svg'
import styled from 'styled-components'
import useScreenSize from './hooks/ScreenSize'
import { Slideshow } from './SlideShow'
const Background = styled.div`
  position: absolute;
  background: url(${(props) => props.url});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
  left: 0;
  z-index: -1;
`
const List = styled.ul`
  width: 100%;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  position: relative;
`
const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1080px) {
    min-width: 100%;
    z-index: 10;
    position: relative;
  }
`
const Circle = styled.div`
  margin-top: 1.5rem;
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
  @media screen and (max-width: 768px) {
    width: 130px;
    height: 130px;
    box-shadow: ${(props) => props.theme.mBox};
  }
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const Text = styled.h3`
  font-size: ${(props) => props.theme.lFont};
  font-weight: bold;
`
const ContainerList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1080px) {
    position: relative;
    width: min-content;
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    width: auto;
    margin: 0;
  }
`
function BuildHydra() {
  const stepList = [
    { id: 1, text: '3D Conception & Design' },
    { id: 2, text: 'Interaction Design' },
    { id: 3, text: 'VR World User Testing' },
    { id: 4, text: 'Hydra VR Deploy' }
  ]
  const { width } = useScreenSize()
  return (
    <Container id='how-to'>
      <HeaderSection
        title='HOW WE BUILD'
        span='WITH HYDRA VR?'
        paragraph='Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'
      />
      <ContainerList>
        {width < 1081 ? (
          <Slideshow>
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
          </Slideshow>
        ) : (
          <List>
            <Background url={url} />
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
        )}
      </ContainerList>
    </Container>
  )
}

export default BuildHydra
