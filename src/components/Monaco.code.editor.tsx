import MonacoEditor, { EditorDidMount } from '@monaco-editor/react'
import React, { useRef } from "react";
import prettier from "prettier";
import parser from 'prettier/parser-babel'

interface MonacoCodeEditorProps {
   initialValue: string
   editorChange: (value: string) => void
}

function MonacoCodeEditor({ editorChange, initialValue }: MonacoCodeEditorProps) {

   const editorRef = useRef<any>()

   const onEditorDidMount: EditorDidMount = function (getValue, monacoEditor) {
      editorRef.current = monacoEditor
      monacoEditor.onDidChangeModelContent(() => {
         editorChange(getValue())
      })
   }

   function handleFormat() {
      const values = editorRef.current.getModel().getValue()

      const formated = prettier.format(values, {
         parser: 'babel',
         plugins: [parser],
         semi: true,
         singleQuote: true,
         useTabs: false
      }).replace(/\n$/, '')

      editorRef.current.setValue(formated)
   }

   return (
      <React.Fragment>
         <div className="editor-con">
            <button className="" onClick={handleFormat}>Format</button>
            <MonacoEditor
               editorDidMount={onEditorDidMount}
               value={initialValue}
               language="javascript"
               theme="vs-dark"
               height={'400px'}
               options={{
                  wordWrap: 'on',
                  minimap: { enabled: false },
                  showUnused: false,
                  folding: false,
                  lineNumbersMinChars: 3,
                  fontSize: 15,
                  scrollBeyondLastLine: false,
                  automaticLayout: true
               }}
            />
         </div>
      </React.Fragment>
   )
}

export default MonacoCodeEditor