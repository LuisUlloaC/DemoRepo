import React, { useState } from 'react';
import ListBody from './listBody';

const List =({data})=>{

    const handleTabChange =(name)=> {
        console.log("CHANGED TO:", name)
    }


    return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-between', margin: '5%'}}>
                <span style={{fontWeight: 700}}>COD WARZONE</span>
                <button>+</button>
            </div>
            <hr className="Divider" />
            {data.map((obj, index) => {
                return (
                    <ListBody number={index + 1} name={obj.name} />
                )
            })}
            
          
        </div>
    )
}

export default List;