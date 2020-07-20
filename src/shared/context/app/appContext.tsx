import React, { useState, useCallback } from 'react'
import { ContextData, defaultState, defaultValue, IChildren } from './interfaces'
import { postImage } from 'shared/services/appService';

export const AppContext = React.createContext<ContextData>(defaultValue);
const { Provider } = AppContext;

const AppProvider = (props : IChildren) => {
  const [image, setImage] = useState<any>(defaultState);

  const setNewImage = useCallback((newImg: string) : void => {
    if(newImg) {
      postImage(newImg).then(({summary}) => {
        setImage({image: newImg, isValid: summary.outcome === 'Approved'})
      })
    }
  }, [setImage])

  return (
    <Provider 
      value={
        { 
          image, 
          setImage,
          setNewImage 
        }
      }>
      {props.children}
    </Provider>
  )
}

export default AppProvider;