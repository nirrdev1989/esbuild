import React, { useState } from 'react'
import MonacoCodeEditor from './Monaco.code.editor';
import Preview from './Preview';

import bundler from '../bundler';


function CodeEditorItem() {
    const [input, setInput] = useState('')
    const [code, setCode] = useState('')

    async function handleSubmit() {
        const result = await bundler(input)

        setCode(result)
    }

    return (
        <React.Fragment>
            <div>
                <MonacoCodeEditor
                    initialValue="const hello = 'Hello'"
                    editorChange={(value) => setInput(value)}
                />
                <div>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                <Preview code={code} />
            </div>
        </React.Fragment>
    );
}

export default CodeEditorItem
