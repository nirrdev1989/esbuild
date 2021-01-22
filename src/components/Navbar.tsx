import React, { useState } from 'react'
import { useActionsCodeCell, useActionsModal } from '../hooks/useActions'
import { usetTypedSelector } from '../hooks/useTypedSelector'
import { Moon, Sun } from '../icons'

export default function Navbar() {
   const { toggleEditorTheme, setCurrentCodeCell } = useActionsCodeCell()
   const { openModalAction, modalOrderComponent } = useActionsModal()
   const codeCellState = usetTypedSelector((state) => state.codeCell)

   const [isDark, setIsDark] = useState<boolean>(false)

   function changeTheme() {
      setIsDark((prev) => !prev)
      window.document.documentElement.setAttribute('data-theme', `${isDark ? 'light' : 'dark'}`)
   }

   return (
      <React.Fragment>
         <nav>
            <div className="nav-items">
               <div className="nav-btns">
                  <button
                     title="Create new editor cell"
                     className="btn-custom"
                     onClick={() => {
                        openModalAction()
                        setCurrentCodeCell('', '', '')
                        modalOrderComponent('FORM')
                     }}>
                     Add cell +
                  </button>
                  <button
                     title="Swicth editor theme"
                     className={`${codeCellState.order.length === 0 ? 'disabled-btn' : ''} btn-custom `}
                     onClick={() => toggleEditorTheme()}>
                     {codeCellState.themeIsDark ? Sun : Moon}
                  </button>
               </div>
               <div>
                  <div
                     onClick={changeTheme}
                     className="toggle-icon"
                     style={{
                        color: 'yellow',
                        fontSize: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        margin: '0.2 auto'
                     }}>
                     {isDark ? Sun : Moon}
                  </div>
               </div>
            </div>
         </nav>
      </React.Fragment>
   )
}
