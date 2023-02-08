import simulation from '../assets/simulation.webp'
import education from '../assets/education.webp'
import selfCare from '../assets/self-care.webp'
import outdoor from '../assets/outdoor.webp'
import { Background, Container } from '../style/Section'
import HeaderSection from './HeaderSection'
import Card from './Card'
import styled from 'styled-components'
import { Slideshow } from './SlideShow'
import useScreenSize from './hooks/ScreenSize'
import url from '../assets/background-build.svg'

const List = styled.ul`
  display: flex;
  gap: 3rem 2rem;
  flex-wrap: wrap;
  justify-content: space-around;
`
const ContainerList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1080px) {
    position: relative;
    max-width: 400px;
    margin: 0 auto;
  }
  @media screen and (max-width: 480px) {
    max-width: 320px;
  }
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
function Services() {
  const { width } = useScreenSize()
  const listServices = [
    {
      id: 1,
      image: simulation,
      alt: 'girl wearing virtual reality glasses to play video games',
      title: 'simulation',
      paragraph:
        'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
      titleBtn: 'try it now',
      href: '#'
    },
    {
      id: 2,
      image: education,
      alt: 'boy wearing virtual reality glasses to study',
      title: 'education',
      paragraph:
        'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
      titleBtn: 'try it now',
      href: '#'
    },
    {
      id: 3,
      image: selfCare,
      alt: 'girl wearing virtual reality glasses to watch a yoga class',
      title: 'self-care',
      paragraph:
        'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
      titleBtn: 'try it now',
      href: '#'
    },
    {
      id: 4,
      image: outdoor,
      alt: 'boy wearing virtual reality glasses in the forest',
      title: 'outdoor',
      paragraph:
        'Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
      titleBtn: 'try it now',
      href: '#'
    }
  ]
  return (
    <Container id='services'>
      <Background url={url} />
      <HeaderSection
        title='WHY BUILD'
        span='WITH HYDRA?'
        paragraph='Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'
      />
      <ContainerList>
        {width < 1081 ? (
          <Slideshow>
            {listServices.map((item) => (
              <Item key={item.id}>
                <Card
                  src={item.image}
                  alt={item.alt}
                  title={item.title}
                  paragraph={item.paragraph}
                  text={item.titleBtn}
                  href={item.href}
                />
              </Item>
            ))}
          </Slideshow>
        ) : (
          <List>
            {listServices.map((item) => (
              <Item key={item.id}>
                <Card
                  src={item.image}
                  alt={item.alt}
                  title={item.title}
                  paragraph={item.paragraph}
                  text={item.titleBtn}
                  href={item.href}
                />
              </Item>
            ))}
          </List>
        )}
      </ContainerList>
    </Container>
  )
}

export default Services
