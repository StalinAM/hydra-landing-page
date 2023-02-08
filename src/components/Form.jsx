import React from 'react'
import styled from 'styled-components'
const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`
const Title = styled.h3`
  font-size: ${(props) => props.theme.xlFont};
  font-weight: 300;
  text-align: center;
`
const Separator = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`
const Input = styled.input`
  width: 100%;

  border-radius: 40px;
  border: 2px solid ${(props) => props.theme.white};
  background: none;
  padding: 1rem 2rem;
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.sFont};
  &::placeholder {
    color: ${(props) => props.theme.lightPurple};
  }
`
const TextArea = styled.textarea`
  width: 100%;
  border: 2px solid ${(props) => props.theme.white};
  border-radius: 40px;
  background: none;
  padding: 1.5rem 2rem;
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.sFont};
  &::placeholder {
    color: ${(props) => props.theme.lightPurple};
  }
`
const Btn = styled.button`
  color: ${(props) => props.theme.darkPurple};
  padding: 1rem 2rem;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.mLightPurple} 0%,
    ${(props) => props.theme.lightPurple} 100%
  );
  border-radius: 40px;
  font-weight: bold;
  font-size: ${(props) => props.theme.sFont};
  &:hover {
    color: ${(props) => props.theme.white};
    background: none;
    box-shadow: inset 0 0 0 3px ${(props) => props.theme.white};
  }
`
function Form() {
  return (
    <Container onSubmit={() => {}}>
      <Title>Let’s Build Your VR Experience</Title>
      <Separator>
        <Input type='text' name='name' placeholder='First name' required />
        <Input type='text' name='last-name' placeholder='Last name' required />
      </Separator>
      <Separator>
        <Input type='email' name='email' placeholder='Email' required />
        <Input type='tel' name='phone' placeholder='Phone Number' required />
      </Separator>
      <Input type='text' name='subject' placeholder='Subject' required />
      <TextArea
        name='project'
        cols={30}
        rows={10}
        placeholder='Tell Us Something'
        required
      />
      <Btn href='#contact'>SEND TO HYDRA</Btn>
    </Container>
  )
}

export default Form
