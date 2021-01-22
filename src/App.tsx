import React from 'react';
import CellList from "./components/Cell.list";
import Navbar from './components/Navbar';
import Note from './components/Note';
import Modal from './components/Modal';
import { usetTypedSelector } from './hooks/useTypedSelector';
import CodeCellForm from './components/Code.cell.form';
import CodeCellInformation from "./components/Code.cell.info";
import './App.css';
import { OrderComponentName } from './redux/modal/models';


function App() {
   const modal = usetTypedSelector((state) => state.modal)
   const currentCodeCell = usetTypedSelector((state) => state.codeCell.activeEditCellInfo)

   console.log(modal)

   function modalOrder(componentName: OrderComponentName) {
      switch (componentName) {
         case 'FORM':
            return <CodeCellForm initialState={currentCodeCell} />
         case 'INFO':
            return <CodeCellInformation info={currentCodeCell} />
         default:
            break;
      }
   }

   return (
      <React.Fragment>
         <Navbar />
         <main className="container">
            <div className="cell-list-con">
               <Note />
               <CellList />
            </div>
         </main>
         {modal.isOpen &&
            <React.Fragment>
               <Modal> {modalOrder(modal.orderComponent)}</Modal >
            </React.Fragment>}
      </React.Fragment>
   )
}



export default App;
