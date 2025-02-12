import { createContext, Dispatch, SetStateAction, useContext } from 'react'

type AppContextType = {
  option: string
  setOption: Dispatch<SetStateAction<string>>
}

export const AppContext = createContext<AppContextType>({ option: '', setOption: () => {} })
export const useAppContext = () => useContext(AppContext)
