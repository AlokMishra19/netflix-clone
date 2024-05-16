import "./NetflixFooterComponent.css";
import LanguageSelectionComponent from "./SmallerComponents/LanguageSelectionComponent";

export default function NetflixFooterComponent(){
    return(
        <div className="text-white bg-black footerComp">
            Questions? Call <u> 000-800-919-1694</u>

            <div className="row text-decoration-underline">
                <div className="col">
                    <ul className="list-unstyled">
                        <li>FAQ</li>
                        <li>Investor Relation</li>
                        <li>Privacy</li>
                        <li>Speed Test</li>
                    </ul>
                    </div>
                   <div className="col">
                   <ul className="list-unstyled">
                        <li>
                            Help center
                        </li>
                        <li>Job</li>
                        <li>Cookie Preference</li>
                        <li>Legal notice</li>
                    </ul>
                   </div>
                   <div className="col">
                   <ul className="list-unstyled">
                        <li>
                            Account
                        </li>
                        <li>Ways to watch</li>
                        <li>Corporate information</li>
                        <li>Only On Netflix</li>
                    </ul>
                   </div>

                   <div className="col">
                   <ul className="list-unstyled">
                        <li>
                           Media Center
                        </li>
                        <li>Terms of use</li>
                        <li>Contact us</li>
                        
                    </ul>
                   </div>
            </div>
            <div className="row">
                <LanguageSelectionComponent/>
            </div>
            <div className="row">
                <ul className="list-unstyled">
                    <li>Netflix India</li>
                </ul>
            </div>
           
        </div>
    );
}