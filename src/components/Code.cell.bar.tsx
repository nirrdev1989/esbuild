import { useActionsCodeCell, useActionsModal } from '../hooks/useActions'
import { ArrowDown, ArrowUp, Delete, Read } from '../icons'
import { CodeCellInfo } from '../redux/code-cells/models'

interface CodeCellBarProps {
   codeCellInfo: CodeCellInfo
}

function CodeCellBar({ codeCellInfo }: CodeCellBarProps) {
   const { moveCodeCell, deleteCodeCell, setCurrentCodeCell } = useActionsCodeCell()
   const { openModalAction, modalOrderComponent } = useActionsModal()

   return (
      <div className="cell-bar-btns">
         <button
            title="Move cell up"
            className="btn-custom"
            onClick={() => moveCodeCell(codeCellInfo.id || '', 'up')}>
            {ArrowUp}
         </button>
         <button
            title="Move cell down"
            className="btn-custom"
            onClick={() => moveCodeCell(codeCellInfo.id || '', 'down')}>
            {ArrowDown}
         </button>
         <button
            title="Read description"
            className="btn-custom"
            onClick={() => {
               openModalAction()
               setCurrentCodeCell(codeCellInfo.id || '', codeCellInfo.title, codeCellInfo.description)
               modalOrderComponent('INFO')
            }}>
            {Read}
         </button>
         {/* <button
            title="Save code"
            className="btn-custom"
            onClick={}>
            {Save}
         </button> */}
         <button
            title="Delete cell"
            className="btn-custom"
            onClick={() => deleteCodeCell(codeCellInfo.id || '')}>
            {Delete}
         </button>
      </div>
   )
}

export default CodeCellBar
