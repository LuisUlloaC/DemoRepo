
const ListBody = ({number, name}) => { 
    return (
        <div className="list-item">
            <span className="badge">{number}</span>
            <span className="name">{name}</span>
            <span className="badge circular"/>
            <button className="plus-btn">+</button>
        </div>     
    )
}

export default ListBody