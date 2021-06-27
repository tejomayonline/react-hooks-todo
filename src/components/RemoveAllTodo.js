import React from 'react';

export default function RemoveAllTodo({setInputItems}) {
    const removeAllItems = () => setInputItems([]);
    return (
        <div className="showItems">
        <button className="btn effect04" data-sm-link-text="Remove All"
            onClick={removeAllItems}>
            <span>
                Remove All
            </span>
      </button>
    </div>
    )
}
