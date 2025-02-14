import clsx from 'clsx'
import { useEffect } from 'react'

interface ModalProps {
  open?: boolean
  content?: string
  btnTextLeft?: string
  btnTextRight?: string
  handleCancel?: () => void
  handleSubmit?: () => void
}

const Modal = ({ open, content, btnTextLeft, btnTextRight, handleCancel, handleSubmit }: ModalProps) => {
  // Disable body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  return (
    <div
      aria-label='modal'
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-500',
        open ? 'visible opacity-100' : 'invisible opacity-0'
      )}
    >
      <div
        className={clsx(
          'relative w-full p-16 max-sm:px-4 bg-primaryDark transition-all duration-700',
          open ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
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
