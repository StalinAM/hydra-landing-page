import React from 'react'
import { Container } from '../style/Section'
import unreal from '../assets/unreal.svg'
import unity from '../assets/unity.svg'
import oculus from '../assets/oculus.svg'
import vive from '../assets/vive.svg'
import styled from 'styled-components'
import tech from '../assets/background-technologies.webp'
import arrow from '../assets/small-arrow.svg'

const Banner = styled.div`
  background-image: url(${tech});
  background-position: top 33% center;
  background-size: cover;
  padding: 6rem;
  border-radius: 160px;
  position: relative;
`
const Title = styled.h2`
  font-size: ${(props) => props.theme.xlFont};
  font-weight: bold;
  text-align: center;
`
const Span = styled.h2`
  font-size: ${(props) => props.theme.xlFont};
  font-weight: 300;
`
const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 35px);
  box-shadow: ${(props) => props.theme.mBox};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.mLightPurple},
    ${(props) => props.theme.lightPurple}
  );
`
const Arrow = styled.img`
  width: 50px;
  transform: rotate(90deg);
`
const List = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-around;
`
const Item = styled.li`
  transition: all ease-in-out 0.4s;
  &:hover {
    transform: scale(1.2);
  }
`
function Technologies() {
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
    <Container>
      <Banner>
        <Title>
          TECHNOLOGIES & HARDWARE
          <Span>USED BY HYDRA VR.</Span>
        </Title>
        <Btn>
          <Arrow src={arrow} alt='' />
        </Btn>
      </Banner>
      <List>
        {listTech.map((item) => (
          <Item key={item.id}>
            <a href={item.website} target='_blank' rel='noreferrer'>
              <img src={item.img} alt={item.alt} />
            </a>
          </Item>
        ))}
      </List>
    </Container>
  )
}

export default Technologies
