import { PropsWithChildren } from 'react'
import { useActionsModal } from '../hooks/useActions'


interface ModalProps extends PropsWithChildren<any> { }

function Modal({ children }: ModalProps) {
   const { closeModalAction } = useActionsModal()

   return (
      <div className="modal-con animate-center-half">
         <div className="modal-content ">
            <div className="modal-header">
               <h5 className="modal-title"></h5>
               <span
                  style={{ cursor: 'pointer', fontWeight: 'bold' }}
                  onClick={() => closeModalAction()} >
                  X
               </span>
            </div>
            <div className="modal-body">
               {children}
            </div>
         </div>
      </div>
   )
}

export default Modal
