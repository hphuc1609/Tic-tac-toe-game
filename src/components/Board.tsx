import Tiles from './Tiles'

interface BoardProps {
  board: string[]
  playerTurn: string
  handleClick: (index: number) => void
  winningIndices: number[]
}

const Board = ({ board, playerTurn, handleClick, winningIndices }: BoardProps) => {
  return (
    <div className='w-full grid grid-cols-3 text-center gap-5'>
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
