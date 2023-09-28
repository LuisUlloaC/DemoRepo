import { useNavigate } from 'react-router-dom';


const NavigationButton = ({className, tittle, url}) => {
    const navigate = useNavigate()

    const handleClick =(url)=>{
        navigate(url)
    }

    return (
        <div className={className} onClick={() => handleClick(url)}>
            <span className="Text">{tittle}</span>
        </div>
    );
}

export default NavigationButton;
