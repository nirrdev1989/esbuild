import React from 'react'
import { CodeCellInfo } from '../redux/code-cells/models'

interface CodeCellInfoProps {
   info: CodeCellInfo
}

function CodeCellInformation({ info }: CodeCellInfoProps) {
   return (
      <React.Fragment>
         <h4>
            {info.title}
         </h4>
         <blockquote>
            {info.description}
         </blockquote>
      </React.Fragment>
   )
}

export default CodeCellInformation
