import { useEffect, useRef, useState } from 'react';
import './App.css';

import * as esbuild from 'esbuild-wasm'
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin';
import { fetchPlugin } from './plugins/fetch-plugin';


const html = `
<html>
    <head></head>
    <body>
    <div id="root"></div>
    <script>
    window.addEventListener('message', (event) => {
      console.log(event.data)
      try {
         eval(event.data)
      }catch(error) {
         document.querySelector('#root')
         root.innerHTML = '<div>' + error + '</div>'
      }
    }, false)

    </script>
    </body>
</html>
`


function App() {

   const [input, setInput] = useState('')
   // const [code, setCode] = useState('')

   const ref = useRef<any>()
   const iframe = useRef<any>()

   async function onClick() {
      if (!ref.current) {
         return
      }


      iframe.current.srcdoc = html


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

      // setCode(() => result.outputFiles[0].text)

      iframe.current.contentWindow.postMessage(result.outputFiles[0].text, '*')
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
         <iframe title="code preview" ref={iframe} sandbox="allow-scripts" srcDoc={html} />
      </div>
   );
}



export default App;
