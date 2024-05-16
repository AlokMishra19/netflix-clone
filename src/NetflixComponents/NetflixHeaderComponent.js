import "./NetflixHeaderComponent.css";
import LanguageSelectionComponent from "./SmallerComponents/LanguageSelectionComponent";
export default function NetflixHeaderComponent(){

   return(
    <div className="netflix_header">
       
       <div className="d-flex justify-content-between">
            <div>
             <img width="180" alt="Netflix logo" />
                 </div>

                 <div  className="d-flex">
             <LanguageSelectionComponent/>
             <button className="signin-btn">Sign In</button>
                </div>
       </div>
    </div>
   );
}