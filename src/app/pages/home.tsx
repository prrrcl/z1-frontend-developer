import React from 'react'
import styled from '@emotion/styled'

import Header from 'app/components/header'
import useApp from 'shared/customHooks/useApp'
import CardTakePicture from 'app/components/cardTakePicture'

const Section = styled.section`
  padding: 20px;
  text-align: center;
  display:flex;
  align-items:center;
  flex-direction: column;
  
  h2 {
    margin-bottom: 16px;
  }

  p{
    margin-bottom: 27px;
  }
`
const Home = () => {
  const { image } = useApp();
  console.log(image)

  return (
    <>
      <Header />
      <Section>
        <h2>Scan your ID</h2>
        <p>Take a picture. It may take time to validate your personal information</p>
        <CardTakePicture />
      </Section>
    </>
  )
}

export default Home
