import React from 'react';
import ListBody from './listBody';

const List =({data})=>{

    /*const handleTabChange =(name)=> {
        console.log("CHANGED TO:", name)
    }*/


    return(
        <div className="ListItem">
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row', 
                    flexWrap:'wrap', 
                    justifyContent: 'space-between',
                    marginLeft: '5%', 
                    marginRight: '5%', 
                    maxHeight: '25%'}}>
                        <span style={{display: 'flex',fontWeight: 700}}>COD WARZONE</span>
                        <button style={{display: 'flex',justifyContent: 'center'}}>+</button>
                </div>
            </div>
            <hr className="Divider" style={{alignSelf: 'center' ,backgroundColor: '#a34'}} />
            <ul className="List Hoverable-list-item" style={{display: 'flex', flexDirection: 'column', overflowY: 'scroll'}}>
                {data.map((obj, index) => {
                    return (
                        <ListBody number={index + 1} name={obj.name} />
                    )
                })}
            </ul>
        </div>
    )
}

export default List;