import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Web = () => {
const navigat=useNavigate();
    const [value, setvalue] = useState("");
const handleJoinRoom=useCallback(()=>{
    if(value){
navigat(`/room/${value}`)
    }
},[navigat,value])
    return (
        <div>
            <input type="text"
                value={value}
                placeholder='enter room code'
                onChange={(e)=>setvalue(e.target.value)} />
                <button onClick={handleJoinRoom}>join</button>
        </div>
    )
}

export default Web