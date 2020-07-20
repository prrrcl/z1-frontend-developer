/** @jsx jsx */
import { useRef, useLayoutEffect, useEffect } from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import Webcam from 'react-webcam'
import useLocation from 'wouter/use-location'
import useApp from 'shared/customHooks/useApp'
import { colors } from 'app/styles'
import { ReactComponent as PictureTakenIcon } from 'assets/pictureTaken.svg'

const CancelButton = styled.button`
position: absolute;
bottom: 5%;
left: 50%;
transform: translateX(-50%);
border: 0;
outline: 0;
background: none;
font-size: 16px;
color: white;
text-transform: uppercase;
letter-spacing: 2px;
font-weight: bold;
`

const ScannerWrapper = styled.section`
  width: 100%;
  height: 100vh;
  background-color: rgba(20,28,38,0.75);
  position:relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    background: url('assets/scannerBg.png');
    background-size: cover;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    filter: blur(10px);
    width: 110%;
    height: 110%;
    left: -5%;
    top: -5%;
  }
  h2{
    margin-bottom: 16px;
  }
  p {
    font-size: 16px;
    &:last-of-type{
      margin-bottom: 56px;
    }
  }
`
const Scanner = () => {
  const { image, setNewImage }: any = useApp();
  const [location, setLocation] = useLocation();
  const video = useRef<any>()

  const scannerStyle = css`
    width: 100%;
    border-radius: 20px;
    border: 2px solid ${!image.isValid && image.image ? colors.red : !image.image ? 'transparent' : colors.green};
    margin-bottom: 15px;
  `;

  useLayoutEffect(() => {
    const request = setInterval(() => {
      if (!image.isValid && video.current){
        const imageSrc = video.current.getScreenshot();
        setNewImage(imageSrc)
      } else {
        clearInterval(request)
      }

    }, 1500)
    return () => clearInterval(request)
  }, [image.image, image.isValid, setNewImage])

  useEffect(() => {
    if (image.isValid) {
      setTimeout(()=> setLocation('/'), 2500)
    }
  }, [image.isValid, setLocation])

  return (
    <ScannerWrapper>
      <h2>Take picture</h2>
      <p>Fit your ID card inside the frame.</p>
      <p>The picture will be taken automatically.</p>
      <Webcam 
        css={scannerStyle}
        ref={video}
        screenshotFormat="image/jpeg"
      />
      {image.isValid && (
        <div 
          css={css`
            display: flex;
            align-items: center;
            margin-top: 15px;
            `}>
            <PictureTakenIcon/>
            <span>Picture taken!</span>
        </div>
        )}
        {!image.isValid &&
          <CancelButton onClick={() => setLocation('/')}>Cancel</CancelButton>
        }
    </ScannerWrapper>
  )
}

export default Scanner
