import { useCallback, useEffect, useState } from 'react'
import Board from './Board'
import Winner from './Winner'
import ResetButton from './Button'
import Score from './Score'
import useSound from 'use-sound'

// Sounds
import clickSound from '@/sound/mixkit-video-game-retro-click-237.wav'
import winningSound from '@/sound/mixkit-winning-notification-2018.wav'
import clearSound from '@/sound/mixkit-clear-mouse-clicks-2997.wav'

const TicTacToe = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(null))
  const [playerTurn, setPlayerTurn] = useState<string>('X')
  const [winner, setWinner] = useState<string>('')
  const [score, setScore] = useState<{ X: number; O: number; Draw: number }>({ X: 0, O: 0, Draw: 0 })
  const [winningIndices, setWinningIndices] = useState<number[]>([])

  const [play] = useSound(clickSound)
  const [playWin] = useSound(winningSound)
  const [playClear] = useSound(clearSound)

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
          playWin()
          setWinningIndices(combo)
          return
        }
      }

      if (board.every((tile) => tile !== null)) {
        setWinner('Draw')
        setScore((prev) => ({ ...prev, Draw: prev.Draw + 1 }))
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

  const handleResetGame = () => {
    setBoard(Array(9).fill(null))
    setPlayerTurn('X')
    setWinner('')
    setWinningIndices([])
    playClear()
  }

  return (
    <div className='flex flex-col items-center gap-9'>
      <div className='text-4xl font-extrabold flex gap-1'>
        <span className='text-sky-500'>X</span>
        <span className='text-yellow-500'>O</span>
        <span className='ml-2'>Game</span>
      </div>
      <div className='flex items-center justify-between w-full'>
        <div className='button-3d pointer-events-none !px-6 bg-slate-800 text-lg font-bold text-gray-300 '>
          Player: {playerTurn}
        </div>
        <ResetButton handleResetGame={handleResetGame} />
      </div>
      <Board board={board} playerTurn={playerTurn} handleClick={handleClick} winningIndices={winningIndices} />
      <Winner winner={winner} />
      <Score score={score} />
    </div>
  )
}

export default TicTacToe
