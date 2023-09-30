import React from 'react';
import ListBody from './listBody2';
import FilterSVG from '../../assets/filterSVG';

const List =({data})=>{

    /*const handleTabChange =(name)=> {
        console.log("CHANGED TO:", name)
    }*/


    return(
        <div className="ListItem">
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div className='HeaderOfList'>
                        <span style={{display: 'flex',fontWeight: 700}}>COD WARZONE</span>
                        <FilterSVG className="NavBarSVG" style={{marginBottom: '10px', maxHeight: '150cqw'}}/>
                </div>
            </div>
            <hr className="Divider" style={{alignSelf: 'center' ,backgroundColor: '#a34'}} />
            <ul className="ListContainer" >
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