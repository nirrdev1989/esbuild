import React, { useEffect } from 'react'
import MonacoCodeEditor from './Monaco.code.editor';
import PreviewIframe from './Preview.iframe';
import ResizeContainer from '../containers/Resize.container';
import { CodeCell } from '../redux/code-cells/models';
import { useActionsBundle, useActionsCodeCell } from '../hooks/useActions';
import { usetTypedSelector } from '../hooks/useTypedSelector';


interface CodeCellEditorProps {
   cell: CodeCell
}

const bundleTime: number = 1500

function CodeCellEditor({ cell }: CodeCellEditorProps) {
   const { updateCodeCell } = useActionsCodeCell()
   const { createBubdle } = useActionsBundle()

   const bundle = usetTypedSelector((state) => state.bundle[cell.id])
   const themeIsDark = usetTypedSelector((state) => state.codeCell.themeIsDark)

   useEffect(() => {
      if (!bundle) {
         createBubdle(cell.id, cell.content)
         return
      }

      let timer = setTimeout(async () => {
         createBubdle(cell.id, cell.content)
         console.log('BUNDLE')
      }, bundleTime)

      return () => {
         clearTimeout(timer)
      }
   }, [cell.content, cell.id, createBubdle])

   return (
      <React.Fragment>
         <ResizeContainer dirrection="vertical">
            <div style={{
               height: '100%',
               display: 'flex',
               flexDirection: 'row'
            }}>
               <ResizeContainer dirrection="horizontal">
                  <MonacoCodeEditor
                     isDarkTheme={themeIsDark}
                     initialValue={cell.content}
                     editorChange={(value) => updateCodeCell(cell.id, value)}
                  />
               </ResizeContainer>
               {bundle &&
                  <PreviewIframe
                     code={bundle.code}
                     errorMessageFromBundler={bundle.error}
                  />}
            </div>
         </ResizeContainer>
      </React.Fragment>
   );
}

export default CodeCellEditor
