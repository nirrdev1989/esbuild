import React, { useEffect, useState } from 'react'
import MonacoCodeEditor from './Monaco.code.editor';
import Preview from './Preview';

import bundler from '../bundler';
import ResizeContainer from '../containers/Resize.container';



function CodeEditorItem() {
   const [input, setInput] = useState('')
   const [code, setCode] = useState('')

   async function handleSubmit() {
   }

   useEffect(() => {
      setTimeout(async () => {
         const result = await bundler(input)

         setCode(result)

      }, 1000);
   }, [input])

   return (
      <React.Fragment>
         <ResizeContainer dirrection="vertical">
            <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
               <ResizeContainer dirrection="horizontal">
                  <MonacoCodeEditor
                     initialValue="const hello = 'Hello'"
                     editorChange={(value) => setInput(value)}
                  />
               </ResizeContainer>
               <Preview code={code} />
            </div>
         </ResizeContainer>
      </React.Fragment>
   );
}

export default CodeEditorItem
