import React from 'react';
import CellList from "./components/Cell.list";
import Navbar from './components/Navbar';
import './App.css';


function App() {
   return (
      <React.Fragment>
         <Navbar />
         <main className="container">
            <div className="cell-list-con">
               <CellList />
            </div>
         </main>
      </React.Fragment>
   );
}



export default App;
