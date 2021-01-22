import React, { PropsWithChildren, useEffect, useState } from 'react'
import { ResizableBox, ResizableBoxProps } from "react-resizable";

interface ResizableContainerProps extends PropsWithChildren<any> {
   dirrection: 'horizontal' | 'vertical'
}

function ResizeContainer({ dirrection, children }: ResizableContainerProps) {

   const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight)
   const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth)

   let resizeOptions: ResizableBoxProps

   if (dirrection === 'horizontal') {
      resizeOptions = {
         className: 'resize-horizontal',
         maxConstraints: [windowWidth * 0.75, Infinity],
         minConstraints: [windowWidth * 0.2, Infinity],
         resizeHandles: ['e'],
         height: Infinity,
         width: windowWidth * 0.75,
      }
   } else {
      resizeOptions = {
         maxConstraints: [Infinity, windowHeight * 0.67],
         minConstraints: [Infinity, 50],
         resizeHandles: ['s'],
         height: 300,
         width: Infinity,
      }
   }

   useEffect(() => {
      let timer: any

      function resizeEvent() {
         if (timer) {
            clearTimeout(timer)
         }
         timer = setTimeout(() => {
            setWindowHeight(window.innerHeight)
            setWindowWidth(window.innerWidth)
         }, 100);
      }

      window.addEventListener('resize', resizeEvent)

      return () => {
         window.removeEventListener('resize', resizeEvent)
      }

   }, [])

   return (
      <React.Fragment>
         <ResizableBox {...resizeOptions}>
            {children}
         </ResizableBox>
      </React.Fragment>
   )
}

export default ResizeContainer
