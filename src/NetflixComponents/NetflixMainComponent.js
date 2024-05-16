
import "./NetflixMainComponent.css";
import NetflixRegistrationComponent from "./SmallerComponents/NetflixRegistrationComponents"
export default  function NetflixMainComponent(){
    return(
       
        <div className="Netflix_Main">

                 <div className="Netflix_Content">
                    <div className="text-center text-white">
                   <h1 className="fw-bold p-2">Unlimited movies, TV shows and more</h1>
                     <h3  className="p-2">Watch anywhere. Cancel anytime.</h3>
             </div>
                     <NetflixRegistrationComponent/>
             </div>
        </div>
    );
}