import PromotionalSVG from "../../assets/promotionalSVG";
import NavigationButton from "../utils/navigationViews";

const SessionCard =()=>{
    return(
        <div className="BigCardItemLeft">
          <PromotionalSVG className="PromotionalSVG" primaryColor='#5b0cab'/>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
            <NavigationButton className="StyledCardButton" tittle="Create account" url="/"/>
            <NavigationButton className="PlainCardButton" tittle="Sign in" url="/"/>
          </div>
        </div>
    )
}

export default SessionCard;