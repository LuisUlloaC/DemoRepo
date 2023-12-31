import PromotionalSVG from "../../assets/promotionalSVG"
import CardContainer from "../utils/cardContainer"

const LoginForm =()=> {
 return(
    <div class="SessionBackground">
        <CardContainer className='MainCardContainerSession'>
            <PromotionalSVG className="PromotionalSVG" primaryColor='#5b0cab'/>
            <div className="BigCardItemRight">
                <div className='CardSessionLayout'>
                    <span style={{display: "flex",fontSize: '5vh', fontWeight: 700, justifyContent: "center"}}>Sign in</span>
                    <div className="DataLayout">
                        <label for="uname"><b>Username:</b></label>
                        <input className="input"placeholder="Enter Username" name="uname" required/>
                    </div>
                    <div className="DataLayout">
                        <label for="psw"><b>Password:</b></label>
                        <input className="input" type="password" placeholder="Enter Password" name="psw" required/>
                    </div>
                    <button className="StyledCardButton" type="submit">  Login  </button>
                </div>
            </div>
        </CardContainer>
    </div>
   )
}


export default LoginForm


  