import { Route, Routes } from 'react-router'
import { useAppContext } from './context/appContext'
import Home from './pages/Home'
import StartGame from './pages/StartGame'

function App() {
  const app = useAppContext()

  return (
    <div className='min-h-screen bg-slate-900 flex justify-center text-white p-5'>
      <Routes>
        <Route index element={<Home />} />
        <Route path={app.option === 'multiplayer' ? 'multiplayer' : 'single'} element={<StartGame />} />
      </Routes>
    </div>
  )
}

export default App
