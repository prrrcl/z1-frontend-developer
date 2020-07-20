import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useLocation } from 'wouter'
import { ReactComponent as CardPlaceholderInfo } from 'assets/idCard.svg'
import Button from './button'
import Status from './status'
import { IImageContext } from 'shared/context/app/interfaces'
import useApp from 'shared/customHooks/useApp'
import { colors } from 'app/styles'

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
  const [location, setLocation] = useLocation();
  const { setImage } = useApp();

  const handleRetake = useCallback(() => {
    setImage({ image: null, isValid: null})
    setLocation('/scanner')
  }, [setImage, setLocation])

  if(props.image) {
    return (
      <Card>
        {!props.image.isValid &&
          <Button onClick={handleRetake} css={buttonRetake}>
            Retake picture
          </Button>
        }
        <ImgCard 
          src={props.image.image}
          alt={''} 
          style={{ 
            borderColor: props.image.isValid ? colors.green : colors.red
          }} />
        <Status isValid={props.image.isValid} />
      </Card>
    )
  }
  return (
    <Card style={{ padding: '20px'}}>
      <CardPlaceholderInfo />
      <Button 
        onClick={() => setLocation('/scanner')} 
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
