import clsx from 'clsx'
import Tiles from './Tiles'

interface BoardProps {
  board: string[]
  playerTurn: string
  handleClick: (index: number) => void
  winningIndices: number[]
  isSingle: boolean
}

const Board = ({ board, playerTurn, handleClick, winningIndices, isSingle }: BoardProps) => {
  return (
    <div
      className={clsx('w-full grid grid-cols-3 text-center gap-3 sm:gap-5', {
        'pointer-events-none': isSingle && playerTurn === 'O'
      })}
    >
      {board.map((value, index) => (
        <Tiles
          key={index}
          value={value}
          playerTurn={playerTurn}
          handleClick={() => handleClick(index)}
          isWinning={winningIndices.includes(index)}
        />
      ))}
    </div>
  )
}

export default Board
