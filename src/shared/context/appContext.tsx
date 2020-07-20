import React, { useState, useCallback, ReactChild, ReactChildren } from 'react'

export const AppContext = React.createContext({});
const { Provider } = AppContext;

type Data = {
  image: string,
  isValid: boolean
}
type propsType = {
  children: ReactChild | ReactChildren
}

const AppProvider = (props : propsType) => {
  const [image, setImage] = useState<Data | null>(null);
  const setNewImage = useCallback((newImg: string) : void => {
    // TODO: fetch
    const value = { image: newImg, isValid: true }
    setImage(value)
  }, [setImage])

  return (
    <Provider 
      value={
        { 
          image, 
          setNewImage 
        }
      }>
      {props.children}
    </Provider>
  )
}

export default AppProvider;