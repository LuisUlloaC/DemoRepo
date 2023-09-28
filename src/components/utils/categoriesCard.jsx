import ArrowSVG from "../../assets/arrowSVG";
import LineSVG from "../../assets/lineSVG";

const CategoriesCard = ({className, lineColor, header, text}) => {
    

    const handleClick =(url)=>{
        console.log('clicked')
    }


    return (
        <div className={className} onClick={() => handleClick()}>
            <div style={{display: "flex", flexDirection: "row"}}>
                <LineSVG className="Line" color={lineColor}/>
                <span className="Text">{header}</span>
            </div>
            <div style={{display: "flex", flexDirection: "column", flexShrink:1, padding: "5%"}}>
                <span className="Text">{text}</span>
            </div>
            <ArrowSVG className="Arrow"/>
        </div>
    );
}

export default CategoriesCard;
