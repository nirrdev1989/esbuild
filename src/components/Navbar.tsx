import React, { useState } from 'react'
import { useActionsCodeCell, useActionsModal } from '../hooks/useActions'
import { usetTypedSelector } from '../hooks/useTypedSelector'
import { Moon, Sun } from '../icons'
import { HashLink } from 'react-router-hash-link'
import DropdwonContainer from '../containers/Dropdwon.container'


function Navbar() {
   const { toggleEditorTheme, setCurrentCodeCell } = useActionsCodeCell()
   const { openModalWithOrderComponent } = useActionsModal()
   const codeCellState = usetTypedSelector((state) => state.codeCell)

   const [isDark, setIsDark] = useState<boolean>(false)

   function changeTheme() {
      setIsDark((prev) => !prev)
      window.document.documentElement.setAttribute('data-theme', `${isDark ? 'light' : 'dark'}`)
   }

   return (
      <React.Fragment>
         <nav  >
            <div className="nav-items">
               <div className="nav-btns">
                  <button
                     title="Swicth editor theme"
                     className={`${codeCellState.order.length === 0 ? 'disabled-btn' : ''} btn-custom `}
                     onClick={() => toggleEditorTheme()}>
                     {codeCellState.themeIsDark ? Sun : Moon}
                  </button>
                  <button
                     title="Create new editor cell"
                     className="btn-custom"
                     onClick={() => {
                        setCurrentCodeCell('', '', '')
                        openModalWithOrderComponent('FORM')
                     }}>
                     Add cell +
                  </button>
                  <DropdwonContainer active={codeCellState.order.length > 0}>
                     <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        {codeCellState.order.map((cellId) => {
                           let cell = codeCellState.data[cellId]
                           return <li className="dropdown-item">
                              <HashLink
                                 smooth={true}
                                 to={`#${cellId}`}>
                                 {cell.title}
                              </HashLink>
                           </li>
                        })}
                     </ul>
                  </DropdwonContainer>
               </div>
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
         </nav>
      </React.Fragment>
   )
}

export default Navbar
