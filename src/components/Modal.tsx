import clsx from 'clsx'

interface ModalProps {
  open?: boolean
  content?: string
  btnTextLeft?: string
  btnTextRight?: string
  handleCancel?: () => void
  handleSubmit?: () => void
}

const Modal = ({ open, content, btnTextLeft, btnTextRight, handleCancel, handleSubmit }: ModalProps) => {
  return (
    <div
      aria-label='modal'
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-300',
        open ? 'visible opacity-100' : 'invisible opacity-0'
      )}
    >
      <div
        className={clsx(
          'relative w-full p-16 bg-primaryDark transition-all duration-500',
          open ? 'translate-y-0' : 'translate-y-full'
        )}
      >
        <div className='max-w-lg mx-auto'>
          <h2 className='text-4xl tracking-widest uppercase text-slate-300 font-semibold text-center'>{content}</h2>
          <div className='flex justify-center gap-4 mt-8'>
            <button
              type='button'
              className='button-3d button-3d-click uppercase !py-3 !px-6 bg-third !shadow-[0_4px_0_#6B8997] active:!shadow-[0_2px_0_#6B8997] hover:bg-slate-300 text-slate-800 tracking-wider font-bold'
              onClick={handleCancel}
            >
              {btnTextLeft || 'No, Cancel'}
            </button>
            <button
              type='button'
              className='button-3d button-3d-click uppercase !py-3 !px-6 bg-secondary !shadow-[0_4px_0_#ca8a04] active:!shadow-[0_2px_0_#ca8a04] hover:bg-yellow-400 text-slate-800 tracking-wider font-bold'
              onClick={handleSubmit}
            >
              {btnTextRight}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
