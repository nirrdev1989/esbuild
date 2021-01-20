import { useActionsCodeCell } from '../hooks/useActions'
import { usetTypedSelector } from '../hooks/useTypedSelector'
import { ArrowDown, ArrowUp, Delete, Moon, Sun } from '../icons'

interface CodeCellBarProps {
   id: string
}

function CodeCellBar({ id }: CodeCellBarProps) {
   const { moveCodeCell, deleteCodeCell } = useActionsCodeCell()

   return (
      <div className="cell-bar-btns">
         <button
            title="Move cell up"
            className="btn-custom"
            onClick={() => moveCodeCell(id, 'up')}>
            {ArrowUp}
         </button>
         <button
            title="Move cell down"
            className="btn-custom"
            onClick={() => moveCodeCell(id, 'down')}>
            {ArrowDown}
         </button>
         <button
            title="Delete cell"
            className="btn-custom"
            onClick={() => deleteCodeCell(id)}>
            {Delete}
         </button>
      </div>
   )
}

export default CodeCellBar
