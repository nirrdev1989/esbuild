import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useActionsCodeCell, useActionsModal } from '../hooks/useActions'


interface CodeCellFormState {
   title: string
   description: string
   id: string
}

interface CodeCellFormProps {
   initialState: CodeCellFormState
}

function CodeCellForm({ initialState }: CodeCellFormProps) {

   const { addCodeCell, updateCodeCellInfo } = useActionsCodeCell()
   const { closeModalAction } = useActionsModal()

   const [values, setValues] = useState<CodeCellFormState>(initialState)

   function handleSubmit(event: FormEvent) {
      event.preventDefault()

      if (initialState.id && initialState.title && initialState.description) {
         updateCodeCellInfo(values.id, values.title, values.description)
      } else {
         addCodeCell(values.id, values.title, values.description)
      }
      closeModalAction()
   }

   function handleChnage(event: ChangeEvent<HTMLInputElement>) {
      const { value, name } = event.target
      setValues((prev) => {
         return {
            ...prev,
            [name]: value
         }
      })
   }

   return (
      <React.Fragment>
         <form onSubmit={handleSubmit}>
            <div className="mb-3">
               <label>Title*</label>
               <input
                  type="text"
                  value={values.title}
                  name="title"
                  onChange={handleChnage}
                  className="form-control"
                  placeholder="Title"
                  required
               />
            </div>
            <div className=" mb-3">
               <label>Description*</label>
               <input
                  type="text"
                  value={values.description}
                  name="description"
                  onChange={handleChnage}
                  className="form-control"
                  placeholder="Description"
                  required
               />
            </div>
            <button className="btn-custom" type="submit" >Submit</button>
         </form>
      </React.Fragment>
   )
}

export default CodeCellForm
