import PromotionalSVG from "../../assets/promotionalSVG";
import NavigationButton from "../utils/navigationViews";

const SessionCard =()=>{
  console.log(global.GlobalTheme)
    return(
        <div className="BigCardItemLeft">
          <PromotionalSVG className="PromotionalSVG" primaryColor={global.GlobalTheme ==='dark' ? '#5b0cab' : ''}/>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
            <NavigationButton className="StyledCardButton" tittle="Create account" url="/signup"/>
            <NavigationButton className="PlainCardButton" tittle="Sign in" url="/signin"/>
          </div>
        </div>
    )
}

export default SessionCard;