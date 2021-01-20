import React from 'react'
import { usetTypedSelector } from '../hooks/useTypedSelector'
import CellListItem from './Cell.list.item'

function CellList() {
   const cells = usetTypedSelector((state) => {
      return state.codeCell.order.map((id) => {
         return state.codeCell.data[id]
      })
   })

   return (
      <React.Fragment>
         {cells.map((cell) => {
            return <CellListItem
               key={cell.id}
               cell={cell}
            />
         })}
      </React.Fragment>
   )
}

export default CellList