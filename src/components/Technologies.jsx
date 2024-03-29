import React from 'react'
import useScreenSize from './hooks/ScreenSize'
import { Container } from '../style/Section'
import { Slideshow } from './SlideShow'
import unreal from '../assets/unreal.webp'
import unity from '../assets/unity.webp'
import oculus from '../assets/oculus.webp'
import vive from '../assets/vive.webp'
import styled from 'styled-components'
import tech from '../assets/background-technologies.webp'

const Banner = styled.div`
  background-image: url(${tech});
  background-position: top 33% center;
  background-size: cover;
  padding: 6rem;
  border-radius: 160px;
  position: relative;

  @media screen and (max-width: 1080px) {
    padding: 4rem;
  }
  @media screen and (max-width: 768px) {
    padding: 3rem;
    border-radius: 60px;
  }
  @media screen and (max-width: 480px) {
    padding: 1.5rem;
  }
`
const Title = styled.h2`
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.xlFont};
  font-weight: bold;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.lFont};
  }
`
const Span = styled.span`
  font-size: ${(props) => props.theme.xlFont};
  font-weight: 300;
  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.xlFont};
  }
  @media screen and (max-width: 480px) {
    font-size: ${(props) => props.theme.lFont};
  }
`
const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  width: -webkit-fill-available;
`
const Item = styled.li`
  display: flex;
  align-items: center;
  transition: all ease-in-out 0.4s;
  justify-content: center;
  &:hover {
    transform: scale(1.2);
  }
  a {
    width: max-content;
    padding: 1rem 0;
  }
  @media screen and (max-width: 1080px) {
    min-width: 100%;
    z-index: 10;
    position: relative;
  }
`
const ContainerList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: -webkit-fill-available;
  @media screen and (max-width: 1080px) {
    position: relative;
    margin: 0 auto;
    width: 27rem;
  }
`
function Technologies() {
  const { width } = useScreenSize()

  const listTech = [
    {
      id: 1,
      img: unreal,
      alt: 'unreal engine company logo',
      website: 'https://www.unrealengine.com/'
    },
    {
      id: 2,
      img: unity,
      alt: 'unity company logo',
      website: 'https://www.unity.com/'
    },
    {
      id: 3,
      img: oculus,
      alt: 'oculus engine company logo',
      website: 'https://www.oculus.com/'
    },
    {
      id: 4,
      img: vive,
      alt: 'vive engine company logo',
      website: 'https://www.vive.com/'
    }
  ]
  return (
    <Container id='technologies'>
      <Banner>
        <Title>
          TECHNOLOGIES & HARDWARE
          <Span>USED BY HYDRA VR.</Span>
        </Title>
      </Banner>
      <ContainerList>
        {width < 1081 ? (
          <Slideshow>
            {listTech.map((item) => (
              <Item key={item.id}>
                <a href={item.website} target='_blank' rel='noreferrer'>
                  <img src={item.img} alt={item.alt} />
                </a>
              </Item>
            ))}
          </Slideshow>
        ) : (
          <List>
            {listTech.map((item) => (
              <Item key={item.id}>
                <a href={item.website} target='_blank' rel='noreferrer'>
                  <img src={item.img} alt={item.alt} />
                </a>
              </Item>
            ))}
          </List>
        )}
      </ContainerList>
    </Container>
  )
}

export default Technologies
