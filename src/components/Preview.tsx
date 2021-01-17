import React, { useEffect, useRef } from 'react'

interface PreviewProps {
   code: string
}


const html = `
<html>
    <head>
    </head>
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

function Preview({ code }: PreviewProps) {

   const iframe = useRef<any>()

   useEffect(() => {
      iframe.current.srcdoc = html
      iframe.current.contentWindow.postMessage(code, '*')
   }, [code])


   return (
      <React.Fragment>
         <div className="preview-wrapper">
            <iframe
               title="code preview"
               ref={iframe}
               sandbox="allow-scripts"
               srcDoc={html}
            />
         </div>
      </React.Fragment>
   )
}

export default Preview
