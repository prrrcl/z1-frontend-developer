import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { ReactComponent as CardPlaceholderInfo } from 'assets/idCard.svg'
import Button from './button'
import Status from './status'
import { IImageContext } from 'shared/context/app/interfaces'

const Card = styled.article`
  box-shadow: 0 10px 20px -6px rgba(0,0,0,0.15);
  border-radius: 12px;
  position: relative;
  background-size: cover;
  display:flex;
`
const ImgCard = styled.img`
  width: 100%;
  max-width: 260px;
  border: 2px solid;
  border-radius: 12px;
`
const buttonRetake = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`


interface IImageProps {
  image?: IImageContext
}
const CardTakePicture = (props: React.PropsWithChildren<IImageProps>) => {
  if(props.image) {
    return (
      <Card>
        {!props.image.isValid &&
          <Button onClick={() => null} css={buttonRetake}>
            Retake picture
          </Button>
        }
        <ImgCard 
          src={props.image.image}
          alt={''} 
          style={{ 
            borderColor: props.image.isValid ? '#69CC8B' : '#C00000'
          }} />
        <Status isValid={props.image.isValid} />
      </Card>
    )
  }
  return (
    <Card style={{ padding: '20px'}}>
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
