import clsx from 'clsx'

interface TilesProps {
  value: string
  playerTurn: string
  handleClick: () => void
  isWinning: boolean
}

const Tiles = ({ value, playerTurn, handleClick, isWinning }: TilesProps) => {
  return (
    <div
      className={clsx(
        'button-3d button-3d-click w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] bg-slate-800 flex items-center justify-center text-7xl font-extrabold',
        {
          '!bg-sky-500 text-white': isWinning && value === 'X',
          'bg-yellow-500 !text-white': isWinning && value === 'O',
          'x-next': !value && playerTurn === 'X',
          'o-next': !value && playerTurn === 'O',
          'text-sky-500': value === 'X',
          'text-yellow-500': value === 'O',
          'pointer-events-none translate-y-1': value,
          '!shadow-[0_8px_0_rgba(0,0,0,0.4)]': !value
        }
      )}
      onClick={handleClick}
    >
      {value}
    </div>
  )
}

export default Tiles
