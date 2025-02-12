import { useEffect, useState } from 'react'
import { AppContext } from './appContext'

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [option, setOption] = useState('')

  useEffect(() => {
    const gameOption = localStorage.getItem('gameOption')
    if (gameOption) {
      setOption(gameOption)
    }
  }, [])

  const value = { option, setOption }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppProvider
