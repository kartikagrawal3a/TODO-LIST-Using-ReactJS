import React, { useState } from 'react';
import Item from './Item';
import AddIcon from '@material-ui/icons/Add';
const ToDolist = () => {

    const [item, setItem] = useState("");
    const [updatedItem, setUpdated] = useState([]);
    const update = (e) => {
        setItem(e.target.value);
    }
    const show = () => {
        if (item!=="") {
            setUpdated((old)=>{
                return [...old, item];
            });
            setItem("");
        }
        else{
            alert("Please enter some Task")
        }
    }

    const del = (id) => {
        setUpdated((old)=>{
            return old.filter((ele, index)=>{
                return index !== id;
            });
        });
    };
    return(
        <div className="main">
            <p className="heading">TODO LIST</p>
            <div className="main1">
                <input type="text" placeholder="Add an item" value={item} onChange={update} />
                <button onClick={show}><AddIcon /></button>
            </div>
            {
                updatedItem.map((val,index)=>{
                    return(
                        <Item val={val} key={index} id={index} onSelect={del} />
                    );
                })
            }
        </div>
    );
}

export default ToDolist;