import { useEffect, useRef, useState } from 'react';
import './App.css';

import * as esbuild from 'esbuild-wasm'
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';

function App() {

   const [input, setInput] = useState('')
   const [code, setCode] = useState('')

   const ref = useRef<any>()

   async function onClick() {
      if (!ref.current) {
         return
      }


      const result = await ref.current.build({
         entryPoints: ['index.js'],
         bundle: true,
         write: false,
         plugins: [
            unpkgPathPlugin(),
            fetchPlugin(input)
         ],
         define: {
            'process.env.NODE_ENV': '"production"',
            global: 'window'
         }
      })

      console.log(result)

      setCode(() => result.outputFiles[0].text)
   }

   async function startService() {
      ref.current = await esbuild.startService({
         worker: true,
         wasmURL: '/esbuild.wasm'
      })
   }


   useEffect(() => {
      startService()
   }, [])

   return (
      <div >
         <textarea
            cols={50}
            rows={10}
            value={input}
            name="input"
            onChange={(e) => setInput(e.target.value)} >
         </textarea>
         <div>
            <button onClick={onClick}>Submit</button>
         </div>
         <pre>{code}</pre>
      </div>
   );
}

export default App;
