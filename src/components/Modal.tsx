import { PropsWithChildren } from 'react'
import { useActionsModal } from '../hooks/useActions'


interface ModalProps extends PropsWithChildren<any> { }

export default function Modal({ children }: ModalProps) {
   const { closeModalAction } = useActionsModal()

   return (
      <div className="modal-con">
         <div className="modal-content ">
            <div className="modal-header">
               <h5 className="modal-title" style={{ color: `var(--color)` }}>Code cell info</h5>
               <span
                  style={{ cursor: 'pointer', color: `var(--color)`, fontWeight: 'bold' }}
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
