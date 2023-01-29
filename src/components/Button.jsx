import React from 'react'
import styled from 'styled-components'

const Btn = styled.a`
  color: ${(props) => props.theme.darckPurple};
  padding: 0.5rem 1rem;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.mLightPurple} 0%,
    ${(props) => props.theme.lightPurple} 100%
  );
  border-radius: 40px;
  font-weight: bold;
  font-size: ${(props) => props.theme.xsFont};
`
function Button({ href, text }) {
  return <Btn href={href}>{text.toUpperCase()}</Btn>
}

export default Button
