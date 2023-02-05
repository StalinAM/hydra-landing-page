import React from 'react'
import styled from 'styled-components'
import Form from './Form'
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background: radial-gradient(
    circle,
    rgba(64, 58, 95, 1) 13%,
    rgba(33, 30, 46, 1) 70%
  );
  padding: 3rem 5rem;
  border-radius: 100px;
  @media screen and (max-width: 768px) {
    border-radius: 40px;
    padding: 2rem 2.5rem;
  }
  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`
const Title = styled.h2`
  font-size: ${(props) => props.theme.xlFont};
  font-weight: bold;
`
const Horizontal = styled.div`
  border-top: 1px solid ${(props) => props.theme.lightPurple};
  width: 25%;
`
function Contact() {
  return (
    <Container id='contact'>
      <Title>JOIN HYDRA</Title>
      <Horizontal />
      <Form />
    </Container>
  )
}

export default Contact
