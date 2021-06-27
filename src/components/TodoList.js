import React, { useEffect, useState } from 'react';
import "../App.css";
import AddTodo from './AddTodo';
import RemoveAllTodo from './RemoveAllTodo';
import ShowTodo from './ShowTodo';
function TodoList() {
    const [inputItems, setInputItems] = useState([]);    
    useEffect(() => {
        document.title = `TODO added (${inputItems.length})`;
        return () => console.log('destoryed');
    }, [inputItems]);
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <AddTodo inputItems={inputItems} setInputItems={setInputItems}/> 
                    <ShowTodo inputItems={inputItems} setInputItems={setInputItems}/>
                    <RemoveAllTodo  setInputItems={setInputItems}/>
                </div>
            </div>
        </>
    )
}

export default TodoList;
