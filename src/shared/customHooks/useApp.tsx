import { useContext } from 'react'
import { AppContext } from 'shared/context/app/appContext'
import { ContextData } from 'shared/context/app/interfaces'

export default (): ContextData => useContext<ContextData>(AppContext)