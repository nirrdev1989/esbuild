import { HashLink } from 'react-router-hash-link'

interface CellTitlesBarProps {
   title: string
   id: string
}

function CellTitlesBar({ title, id }: CellTitlesBarProps) {
   return (
      <HashLink
         className="btn-custom"
         smooth={true}
         to={`#${id}`}>
         {title}
      </HashLink>
   )
}

export default CellTitlesBar
