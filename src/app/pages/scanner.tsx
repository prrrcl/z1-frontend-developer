/** @jsx jsx */
import { useRef, useLayoutEffect } from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import useApp from 'shared/customHooks/useApp'
import Webcam from 'react-webcam'
import useLocation from 'wouter/use-location'

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
      margin-bottom: 16px;
    }
  }
`

const scannerStyle = css`
  width: 100%;
  border-radius: 20px;
`;
const Scanner = () => {
  const { image, setNewImage }: any = useApp();
  const [location, setLocation] = useLocation();
  const video = useRef<any>()

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
      <CancelButton onClick={() => setLocation('/')}>Cancel</CancelButton>
    </ScannerWrapper>
  )
}

export default Scanner
