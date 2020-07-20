/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { colors } from 'app/styles'

interface ButtonProps {
  children: React.ReactNode,
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  style?: Object,
  css?: any
}

const CustomButton = styled.button`
  border-radius: 24px;
  background: ${colors.primaryUI};
  box-shadow: 0 10px 20px -5px rgba(47,0,121,0.3);
  outline: 0;
  border: 0;
  color: white;
  font-size: 16px;
  padding: 14px 20px;
  text-transform: uppercase;
  white-space: nowrap;
`

const Button = (props: ButtonProps) => {
  const { children, onClick, style } = props;

  return (
    <CustomButton onClick={onClick} style={style} css={props.css}>
      {children}
    </CustomButton>
  )
}

export default Button
