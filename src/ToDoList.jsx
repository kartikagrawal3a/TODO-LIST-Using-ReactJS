import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
const ToDolist = () => {

    const [done] = useState({decorate:false, opaque:false});
    const [item, setItem] = useState({name:"", textDecoration: "", opacity:""});
    const [updatedItem, setUpdated] = useState([]);
    const update = (e) => {
        setItem({...item,name:e.target.value});
    }
    const show = () => {
        if (item!=="") {
            const res = {name:item.name,textDecoration:done.decorate,opacity:done.opaque}
            setUpdated([...updatedItem,res]);
            setItem({name:"",textDecoration:"",opacity:""});
            console.log(updatedItem);
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
        console.log(updatedItem);
    };

    const done1 = (id) => {
        const newArr = updatedItem.map((val,index)=>{
            if (index===id) {
                if (val.textDecoration === false && val.opacity === false) {
                    val.textDecoration = true;
                    val.opacity = true;   
                }
                else{
                    val.textDecoration = false;
                    val.opacity = false;
                }
            }
            return val;
        })
        setUpdated(newArr);
    }
    return(
        <div className="main">
            <p className="heading">TODO LIST</p>
            <div className="main1">
                <input type="text" placeholder="Add an item" value={item.name} onChange={update} />
                <button onClick={show}><AddIcon /></button>
            </div>
            {
                updatedItem.map((val,index)=>{
                    return(
                        <div className="item" key={index}>
                            <DeleteIcon className="delete" fontSize="large" onClick={()=>{
                                del(index);
                            }} />
                            <CheckIcon className="edit" fontSize="large" onClick={()=>{
                                done1(index);
                            }} />
                            <p className="mainItem" style={{textDecoration:val.textDecoration?"line-through":"none",opacity:val.opacity?"0.7":"1"}}>{val.name}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default ToDolist;