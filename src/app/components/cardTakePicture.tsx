import React from 'react'
import styled from '@emotion/styled'
import { ReactComponent as CardPlaceholderInfo } from 'assets/idCard.svg';
import Button from './button';

const Card = styled.article`
  padding: 20px;
  box-shadow: 0 10px 20px -6px rgba(0,0,0,0.15);
  border-radius: 12px;
  position: relative;
`

const CardTakePicture = () => {
  return (
    <Card>
      <CardPlaceholderInfo />
      <Button 
        onClick={() => null} 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          Take picture
      </Button>
    </Card>
  )
}

export default CardTakePicture
