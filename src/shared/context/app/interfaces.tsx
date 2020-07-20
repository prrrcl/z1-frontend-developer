import { ReactChild, ReactChildren } from 'react'

export const defaultValue: ContextData = {
  image: '',
  setNewImage: () => null
}
export const defaultState: Data = {
  image: '',
  isValid: null
}
export interface ContextData {
  image: string,
  setNewImage: Function
}

export interface Data {
  image: string,
  isValid: boolean | null
}
export interface IChildren {
  children: ReactChild | ReactChildren
}