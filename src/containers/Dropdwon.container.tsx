import { PropsWithChildren } from 'react'

interface DropdwonContainerProps extends PropsWithChildren<any> {
   active: boolean
}

export default function DropdwonContainer({ active, children }: DropdwonContainerProps) {
   return (
      <div className="dropdown">
         <button

            className={`${active ? '' : 'disabled-btn'} btn-custom dropdown-toggle `}
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Cells
         </button>
         {children}
      </div>
   )
}
