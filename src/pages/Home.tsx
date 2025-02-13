import Logo from '@/components/Logo'
import { AppContext } from '@/context/appContext'
import hoverSound from '@/sound/mixkit-cool-interface-click-tone-2568.wav'
import selectSound from '@/sound/mixkit-select-click-1109.wav'
import { motion } from 'motion/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router'
import useSound from 'use-sound'

const Home = () => {
  const navigate = useNavigate()
  const [playHover] = useSound(hoverSound)
  const [playSelect] = useSound(selectSound)

  const app = useContext(AppContext)

  const handleMultiplayer = () => {
    playSelect()
    app.setOption('multiplayer')
    localStorage.setItem('gameOption', 'multiplayer')

    setTimeout(() => navigate('/multiplayer'), 500)
  }

  const handleSingleplayer = () => {
    playSelect()
    app.setOption('single')
    localStorage.setItem('gameOption', 'single')

    setTimeout(() => navigate('/single'), 500)
  }

  return (
    <motion.main
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 1, delay: 0.2 }}
      exit={{ opacity: 0, y: -20 }}
      className='m-auto min-w-[300px] flex flex-col items-center'
    >
      <Logo />
      <button
        onMouseEnter={() => playHover()}
        onClick={handleSingleplayer}
        className='button-3d button-3d-click flex items-center justify-center gap-2 w-full h-16 !px-5 bg-primary uppercase tracking-widest font-semibold text-xl !shadow-[0_8px_0_#0284c7] active:!shadow-[0_4px_0_#0284c7] hover:bg-sky-400 mt-9 mb-7'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-user'
        >
          <path d='M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' />
          <circle cx='12' cy='7' r='4' />
        </svg>
        New Game
      </button>
      <button
        onMouseEnter={() => playHover()}
        onClick={handleMultiplayer}
        className='button-3d button-3d-click flex items-center justify-center gap-2 w-full h-16 !px-5 bg-secondary uppercase tracking-widest font-semibold text-xl !shadow-[0_8px_0_#ca8a04] active:!shadow-[0_4px_0_#ca8a04] hover:bg-yellow-400'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-users'
        >
          <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
          <circle cx='9' cy='7' r='4' />
          <path d='M22 21v-2a4 4 0 0 0-3-3.87' />
          <path d='M16 3.13a4 4 0 0 1 0 7.75' />
        </svg>
        Multiplayer
      </button>
    </motion.main>
  )
}

export default Home
