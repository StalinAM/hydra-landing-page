import simulation from '../assets/simulation.webp'
import education from '../assets/education.webp'
import selfCare from '../assets/self-care.webp'
import outdoor from '../assets/outdoor.webp'
import { Container } from '../style/Section'
import HeaderSection from './HeaderSection'
import Card from './Card'
import styled from 'styled-components'

const Content = styled.ul`
  display: flex;
  gap: 1.1rem;
  flex-wrap: wrap;
  justify-content: space-around;
`
function Services() {
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
      <HeaderSection
        title='WHY BUILD'
        span='WITH HYDRA?'
        paragraph='Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'
      />
      <Content>
        {listServices.map((item) => (
          <Card
            key={item.id}
            src={item.image}
            alt={item.alt}
            title={item.title}
            paragraph={item.paragraph}
            text={item.titleBtn}
            href={item.href}
          />
        ))}
      </Content>
    </Container>
  )
}

export default Services
