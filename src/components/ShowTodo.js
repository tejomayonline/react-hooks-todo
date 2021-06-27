import React from 'react';

export default function ShowTodo({ inputItems, setInputItems }) {
    const deleteItem = (id) => {
        const newItems = inputItems.filter((item, index) => index !== id);
        setInputItems(newItems);
    }  
    return (
        <div className="showItems">
        {
            inputItems.map((value, i) => {
                return (
                <div className="eachItem" key={i}>
                    <h3>{value}</h3>
                    <i className="far fa-trash-alt add-btn" title="Delete Item"
                        onClick={() => deleteItem(i)}>   
                    </i>
                </div>
                )
            })
        }
    </div>
    )
}
