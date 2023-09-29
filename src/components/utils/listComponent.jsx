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
                <div style={{
                    display: 'flex',
                    flexDirection: 'row', 
                    flexWrap:'wrap', 
                    justifyContent: 'space-between',
                    marginLeft: '5%', 
                    marginRight: '5%', 
                    maxHeight: '25%'}}>
                        <span style={{display: 'flex',fontWeight: 700}}>COD WARZONE</span>
                        <FilterSVG className="NavBarSVG" style={{marginBottom: '10px', maxHeight: '150cqw'}}/>
                </div>
            </div>
            <hr className="Divider" style={{alignSelf: 'center' ,backgroundColor: '#a34'}} />
            <ul className="list-container" >
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