import React from 'react';
import ListBody from './listBody2';
import FilterSVG from '../../assets/filterSVG';

const List =({data})=>{

    /*const handleTabChange =(name)=> {
        console.log("CHANGED TO:", name)
    }*/


    return(
        <div>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: 5, maxHeight: '5vh'}}>
                <div className='HeaderOfList'>
                        <span style={{display: 'flex',fontWeight: 700}}>COD WARZONE</span>
                        <FilterSVG className="FilterSVG"/>
                </div>
            </div>
            <hr className="Divider"/>
            <div className="ListItem">
                {data.map((obj, index) => {
                    return (
                        <ListBody number={index + 1} name={obj.name} />
                    )
                })}
            </div>
            <button className='ButtonBelowList'>
                Search now
            </button>
        </div>
    )
}

export default List;