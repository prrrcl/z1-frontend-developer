import React, { useEffect } from 'react'
import useApp from 'shared/customHooks/useApp'

const Scanner = () => {
  const { image, setNewImage }: any = useApp();

  useEffect(() => {
    const request = setInterval(() => {
      if (!image.isValid && !image.image){
        setNewImage()
      } else {
        clearInterval(request)
      }
    }, 1500)
    return () => clearInterval(request)
  }, [image.image, image.isValid, setNewImage])


  return (
    <div>
      adios
    </div>
  )
}

export default Scanner
