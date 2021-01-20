import React, { useRef, useState } from 'react'
import { useActionsCodeCell } from '../hooks/useActions'
import { usetTypedSelector } from '../hooks/useTypedSelector'
import { Moon, Sun } from '../icons'

export default function Navbar() {
   const { addCodeCell, toggleEditorTheme } = useActionsCodeCell()
   const themeIsDark = usetTypedSelector((state) => state.codeCell.themeIsDark)

   const [isDark, setIsDark] = useState<boolean>(false)

   function changeTheme() {
      setIsDark((prev) => !prev)
      window.document.documentElement.setAttribute('data-theme', `${isDark ? 'light' : 'dark'}`)
   }

   return (
      <React.Fragment>
         <nav>
            <div>
               <span
                  onClick={changeTheme}
                  className="toggle-icon"
                  style={{
                     color: 'yellow',
                     fontSize: '30px',
                     float: 'right',
                     cursor: 'pointer',
                     marginRight: '2rem'
                  }}>
                  {isDark ? Sun : Moon}
               </span>
            </div>
            <div>
               <button
                  title="Create new editor cell"
                  className="btn-custom"
                  onClick={() => addCodeCell('dsds')}>
                  Add cell +
             </button>
               <button
                  title="Swicth editor theme"
                  className="btn-custom"
                  onClick={() => toggleEditorTheme()}>
                  {themeIsDark ? Sun : Moon}
               </button>
            </div>
         </nav>
      </React.Fragment>
   )
}
