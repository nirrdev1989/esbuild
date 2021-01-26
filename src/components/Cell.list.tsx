import React from 'react'
import { usetTypedSelector } from '../hooks/useTypedSelector'
import CellListItem from './Cell.list.item'
import CellTitlesBar from './Cell.titles.bar';
import { ArrowLeft, ArrowRight } from '../icons'


function CellList() {
   const cells = usetTypedSelector((state) => {
      return state.codeCell.order.map((id) => {
         return state.codeCell.data[id]
      })
   })

   return (
      <React.Fragment>
         {/* {cells.length > 0 && <div className="cell-titles-bar">
            <div className="grid-bar-item-first">{ArrowLeft}</div>
            <div className="grid-bar-item-title-btn">
               {cells.map((cell) => {
                  return <CellTitlesBar
                     key={cell.title}
                     title={cell.title}
                     id={cell.id}
                  />
               })}
            </div>
            <div className="grid-bar-item-last">{ArrowRight}</div>
         </div>} */}
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