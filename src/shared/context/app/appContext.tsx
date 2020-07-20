import React, { useState, useCallback } from 'react'
import { ContextData, defaultState, defaultValue, IChildren, Data } from './interfaces'

export const AppContext = React.createContext<ContextData>(defaultValue);
const { Provider } = AppContext;

const AppProvider = (props : IChildren) => {
  const [image, setImage] = useState<any>(defaultState);

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