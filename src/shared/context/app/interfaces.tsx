import { ReactChild, ReactChildren } from 'react'

export const defaultValue: ContextData = {
  image: '',
  setNewImage: () => null
}
export const defaultState: IImageContext = {
  image: '',
  isValid: null
}
export interface ContextData {
  image: string,
  setNewImage: Function
}

export interface IImageContext {
  image: string,
  isValid?: boolean | null
}
export interface IChildren {
  children: ReactChild | ReactChildren
}