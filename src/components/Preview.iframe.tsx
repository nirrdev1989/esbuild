import React, { useEffect, useRef } from 'react'

interface PreviewProps {
   code: string
   errorMessageFromBundler: string
}

const html: string = `
<html>
    <head>
    </head>
    <body>
    <div id="root"></div>
    <script>
      
    function handleError(error) {
      document.querySelector('#root')
      root.innerHTML = '<div style="color: red;">' + error + '</div>'
   }

    window.addEventListener('message', (event) => {
     // console.log(event.data, 'IFRAME')
      try {
         eval(event.data)
      }catch(error) {
         handleError(error)
      }
    }, false)

    </script>
    </body>
</html>
`

function PreviewIframe({ errorMessageFromBundler, code }: PreviewProps) {
   const iframe = useRef<any>()

   useEffect(() => {
      iframe.current.srcdoc = html

      setTimeout(() => {
         iframe.current.contentWindow.postMessage(code, '*')
      }, 100);
   }, [code])


   return (
      <React.Fragment>
         <div className="preview-wrapper">
            <iframe
               frameBorder="0"
               title="code preview"
               ref={iframe}
               sandbox="allow-scripts"
               srcDoc={html}
            />
            {errorMessageFromBundler && <div className="preview-error "> {errorMessageFromBundler} </div>}
         </div>
      </React.Fragment>
   )
}

export default PreviewIframe
