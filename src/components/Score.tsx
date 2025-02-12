import { useAppContext } from '@/context/appContext'

interface ScoreProps {
  score: { X: number; O: number; Draw: number }
}

const Score = ({ score }: ScoreProps) => {
  const app = useAppContext()
  const isSinglePlayer = app.option === 'single'

  return (
    <div className='w-full grid grid-cols-3 gap-5 text-slate-900 text-lg font-medium pointer-events-none'>
      <div className='rounded-lg py-1 px-2 bg-sky-500 flex flex-1 flex-col items-center'>
        <p>X {isSinglePlayer ? '(You)' : 'Score'}</p>
        <p className='truncate max-w-full'>{score.X}</p>
      </div>
      <div className='rounded-lg py-1 px-2 bg-[#A8BFC9] flex flex-1 flex-col items-center'>
        <p>Draw</p>
        <span className='truncate max-w-full'>{score.Draw}</span>
      </div>
      <div className='rounded-lg py-1 px-2 bg-yellow-500 flex flex-1 flex-col items-center'>
        <p>O {isSinglePlayer ? '(CPU)' : 'Score'}</p>
        <span className='truncate max-w-full'>{score.O}</span>
      </div>
    </div>
  )
}

export default Score
