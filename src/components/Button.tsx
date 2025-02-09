interface ResetButtonProps {
  handleResetGame: () => void
}

const ResetButton = ({ handleResetGame }: ResetButtonProps) => {
  return (
    <button
      className='button-3d button-3d-click bg-[#A8BFC9] !shadow-[0_4px_0_#6B8997] active:!shadow-[0_2px_0_#6B8997] hover:bg-slate-300 text-slate-900 font-semibold'
      onClick={handleResetGame}
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
        className='lucide lucide-rotate-cw'
      >
        <path d='M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8' />
        <path d='M21 3v5h-5' />
      </svg>
    </button>
  )
}

export default ResetButton
