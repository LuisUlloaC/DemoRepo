import AvatarSVG from "../../assets/avatarSVG"

const ListBody = ({number, name}) => { 
    return (
        <li style={{display: 'flex', justifyContent: 'space-evenly', alignContent: 'baseline'}}>
            <span className="w3-badge">{number}</span>
            <div className="Text">
                {name}
            <AvatarSVG className="w3-badge" circleColor='#4287f5' style={{display: 'flex'}}/> 
            </div>
            <button style={{display: 'flex',height: '5%', borderRadius: 8}}>+</button>
        </li>
    )
}

export default ListBody