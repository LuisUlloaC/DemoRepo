const ListBody = ({number, name}) => { 
    return (
        <div style={{display: 'flex', justifyContent: 'space-between', margin: '2%'}}>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                <div  style={{
                    display: 'flex',
                    minWidth: '1cqw',
                    width: '2.5cqw',
                    height: '2cqw',
                    borderRadius: 20,
                    borderColor: '#0000',
                    backgroundColor: '#050000',
                    justifyContent: 'center'
                }}>
                    {number}
                </div>
                <div className='Text' style={{display: 'flex', width: '100%', backgroundColor: '#050000'}}>
                    {name}
                </div>
            </div>
            <button style={{display: 'flex',height: '5%', backgroundColor: '#737171', borderRadius: 8}}>+</button>
        </div>
    )
}

export default ListBody