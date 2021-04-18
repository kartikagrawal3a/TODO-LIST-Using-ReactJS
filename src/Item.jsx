import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';

const Item = (props) => {
    const [done,setDone] = useState({index:props.id, decorate:false, opaque:false});
    const cut = () => {
        if (done.decorate===false && done.opaque===false) {
            setDone({decorate:true,opaque:true});
        }
        else{
            setDone({decorate:false,opaque:false});
        }
    }
    
    return(
        <div className="item">
            <DeleteIcon className="delete" fontSize="large" onClick={()=>{
                props.onSelect(props.id);
            }} />
            <CheckIcon className="edit" fontSize="large" onClick={cut} />
            <p className="mainItem" style={{textDecoration: done.decorate?"line-through":"none",opacity:done.opaque?"0.7":"1"}}>{props.val}</p>
        </div>
    );
}
export default Item;