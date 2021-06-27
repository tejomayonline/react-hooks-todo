import React, { useState } from 'react';

function AddTodo({setInputItems, inputItems}) {
    const [input, setInput] = useState('');
    const addItems = () => {
        if (input) {
            setInputItems([...inputItems, input]);
            setInput('');
        }
    }
    return (
        <div className="addItems">
        <input type="text" placeholder="Add Items" 
            value={input}
            onChange={e => setInput(e.target.value) }
        />
        <i className="fa fa-plus add-btn" title="Add Item"
                onClick={addItems}>
                
        </i>
    </div>
    )
}


export default AddTodo;

