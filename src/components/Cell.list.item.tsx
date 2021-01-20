import React from 'react'
import { CodeCell } from '../redux/code-cells/models'
import CodeCellBar from './Code.cell.bar'
import CodeCellEditor from './Code.editor.cell'


interface CellListItemProps {
   cell: CodeCell
}

function CellListItem({ cell }: CellListItemProps) {
   return (
      <div className="cell-list-item">
         <div className="cell-bar-con">
            <CodeCellBar id={cell.id} />
         </div>
         <CodeCellEditor cell={cell} />
      </div>
   )
}

export default CellListItem
