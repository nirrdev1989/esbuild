import React from 'react'
import { useActionsCodeCell, useActionsModal } from '../hooks/useActions'
import { Edit } from '../icons'
import { CodeCell } from '../redux/code-cells/models'
import CodeCellBar from './Code.cell.bar'
import CodeCellEditor from './Code.editor.cell'


interface CellListItemProps {
   cell: CodeCell
}

function CellListItem({ cell }: CellListItemProps) {
   const { openModalAction, modalOrderComponent } = useActionsModal()
   const { setCurrentCodeCell } = useActionsCodeCell()

   let codeCellInfo = {
      title: cell.title,
      description: cell.description,
      id: cell.id
   }

   return (
      <div className={"animate-center"}>
         <div className="cell-list-item">
            <div className="cell-bar-con">
               <CodeCellBar codeCellInfo={codeCellInfo} />
               <span
                  className="code-cell-title"
                  style={{ color: 'white', marginLeft: '0.5rem' }}>
                  <span
                     style={{ cursor: 'pointer' }}
                     title="Edit title"
                     onClick={() => {
                        openModalAction()
                        setCurrentCodeCell(cell.id, cell.title, cell.description)
                        modalOrderComponent('FORM')
                     }}>
                     {Edit}&nbsp;
                  </span>
                  Title: {cell.title}
               </span>
            </div>
            <CodeCellEditor cell={cell} />
         </div>
      </div>
   )
}

export default CellListItem
