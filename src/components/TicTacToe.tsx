import { useAppContext } from '@/context/appContext'
import { motion } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import useSound from 'use-sound'
import Board from './Board'
import Modal from './Modal'
import ResetButton from './ResetButton'
import Score from './Score'
import Winner from './Winner'

// Sounds
import clearSound from '@/sound/mixkit-clear-mouse-clicks-2997.wav'
import alertSound from '@/sound/mixkit-video-game-mystery-alert-234.wav'
import clickSound from '@/sound/mixkit-video-game-retro-click-237.wav'
import winningSound from '@/sound/mixkit-winning-notification-2018.wav'

const TicTacToe = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null))
  const [playerTurn, setPlayerTurn] = useState<string>('X')
  const [winner, setWinner] = useState<string>('')
  const [score, setScore] = useState<{ X: number; O: number; Draw: number }>({ X: 0, O: 0, Draw: 0 })
  const [winningIndices, setWinningIndices] = useState<number[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [openQuit, setOpenQuit] = useState<boolean>(false)
  const [openNextRound, setOpenNextRound] = useState<boolean>(false)

  const [play] = useSound(clickSound)
  const [playWin] = useSound(winningSound)
  const [playClear] = useSound(clearSound)
  const [playAlert] = useSound(alertSound)

  const navigate = useNavigate()
  const app = useAppContext()

  const handleClick = useCallback(
    (index: number) => {
      if (board[index] !== null || winner) return

      const newBoard = [...board]
      newBoard[index] = playerTurn
      setBoard(newBoard)
      setPlayerTurn(playerTurn === 'X' ? 'O' : 'X')
      play()
    },
    [board, play, playerTurn, winner]
  )

  // Check for winner
  useEffect(() => {
    const winningCombinations = [
      // Rows
      { combo: [0, 1, 2] },
      { combo: [3, 4, 5] },
      { combo: [6, 7, 8] },

      // Columns
      { combo: [0, 3, 6] },
      { combo: [1, 4, 7] },
      { combo: [2, 5, 8] },

      // Diagonals
      { combo: [0, 4, 8] },
      { combo: [2, 4, 6] }
    ]

    const checkWinner = () => {
      for (const { combo } of winningCombinations) {
        const valueTile1 = board[combo[0]]
        const valueTile2 = board[combo[1]]
        const valueTile3 = board[combo[2]]

        if (valueTile1 && valueTile1 === valueTile2 && valueTile1 === valueTile3) {
          setWinner(valueTile1)
          setWinningIndices(combo)
          playWin()

          const nextRound = setTimeout(() => setOpenNextRound(true), 800)
          return () => clearTimeout(nextRound)
        }
      }

      if (board.every((tile) => tile !== null)) {
        setWinner('Draw')
        setScore((prev) => ({ ...prev, Draw: prev.Draw + 1 }))

        const nextRound = setTimeout(() => setOpenNextRound(true), 800)
        return () => clearTimeout(nextRound)
      }
    }

    checkWinner()
  }, [board, playWin])

  // Update score
  useEffect(() => {
    if (winner.toLowerCase() !== 'draw') {
      setScore((prev) => ({ ...prev, [winner]: prev[winner as 'X' | 'O' | 'Draw'] + 1 }))
    }
    return
  }, [winner])

  // Handle CPU Move
  useEffect(() => {
    if (app.option.toLowerCase() === 'single' && playerTurn === 'O') {
      const handleCPUMove = (currentBoard: string[]) => {
        const emptyIndices = currentBoard
          .map((tile, i) => (tile === null ? i : null))
          .filter((i) => i !== null) as number[]

        if (emptyIndices.length === 0 || winner) return

        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)]
        const newBoard = [...currentBoard]
        newBoard[randomIndex] = 'O'
        setBoard(newBoard)
        setPlayerTurn('X')
      }

      const cpuMove = setTimeout(() => handleCPUMove(board), 1000)
      return () => clearTimeout(cpuMove)
    }
  }, [app.option, board, playerTurn, winner])

  const handleResetGame = () => {
    setBoard(Array(9).fill(null))
    setPlayerTurn('X')
    setWinner('')
    setWinningIndices([])
    setOpenModal(false)
    setOpenNextRound(false)
    playClear()
  }

  const handleOpenModal = () => {
    setOpenModal(true)
    playAlert()
  }

  const handleCancelModal = () => {
    setOpenModal(false)
    setOpenQuit(false)
  }

  const handleQuitGame = () => {
    navigate('/')
    playClear()
  }

  const handleOpenQuitModal = () => {
    setOpenQuit(true)
    playAlert()
  }

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      exit={{ opacity: 0 }}
      className='flex flex-col items-center gap-6 w-[500px]'
    >
      <div className='flex items-center justify-between w-full'>
        <div className='text-4xl font-extrabold flex gap-1 cursor-pointer' onClick={handleOpenQuitModal}>
          <span className='text-primary'>X</span>
          <span className='text-secondary'>O</span>
        </div>
        <div className='button-3d pointer-events-none !px-6 bg-slate-800 text-lg font-bold text-gray-300 '>
          Player: {playerTurn}
        </div>
        <ResetButton handleOpenModal={handleOpenModal} />
      </div>
      <Board board={board} playerTurn={playerTurn} handleClick={handleClick} winningIndices={winningIndices} />
      <Winner winner={winner} />
      <Score score={score} />

      <Modal
        open={openModal}
        content='Restart Game?'
        btnTextRight='Yes, Restart'
        handleSubmit={handleResetGame}
        handleCancel={handleCancelModal}
      />
      <Modal
        open={openQuit}
        content='Quite game?'
        btnTextRight='Yes, Quit'
        handleCancel={handleCancelModal}
        handleSubmit={handleQuitGame}
      />
      <Modal
        open={openNextRound}
        content='Next Round?'
        btnTextLeft='No, Quit'
        btnTextRight='Yes, Next Round'
        handleCancel={handleQuitGame}
        handleSubmit={handleResetGame}
      />
    </motion.div>
  )
}

export default TicTacToe
