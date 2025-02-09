interface WinnerProps {
  winner: string
}

const Winner = ({ winner }: WinnerProps) => {
  return (
    <h2
      className='text-2xl border-4 border-dotted w-full p-2 border-sky-500 font-semibold text-sky-500 text-center'
      hidden={!winner}
    >
      {winner?.toLowerCase() !== 'draw' ? `${winner} Wins` : 'Draw'}
    </h2>
  )
}

export default Winner
