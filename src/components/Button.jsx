import React from 'react'
import styled from 'styled-components'

const Btn = styled.a`
  color: ${(props) => props.theme.darckPurple};
  padding: 0.75rem 1.5rem;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.mLightPurple} 0%,
    ${(props) => props.theme.lightPurple} 100%
  );
  border-radius: 40px;
  font-weight: bold;
  font-size: ${(props) => props.theme.xsFont};
  &:hover {
    color: ${(props) => props.theme.white};
    background: none;
    box-shadow: inset 0 0 0 3px ${(props) => props.theme.white};
  }
`
function Button({ href, text }) {
  return <Btn href={href}>{text.toUpperCase()}</Btn>
}

export default Button
