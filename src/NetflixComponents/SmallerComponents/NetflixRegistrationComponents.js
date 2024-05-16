

import "./NetflixRegistrationComponents.css";

export default function NetflixRegistrationComponents(){
    return (
       <div className="w-75 m-auto">
       <p className="text-center text-white fs-5">Ready to watch? Enter your email to create or restart your membership.</p>
       <div className="input-group input-group-lg text-dark">
       <div className="form-floating mb-3">
             <input type="email" className="form-control text-dark" id="floatingInput" />
             <label htmlForfor="floatingInput ">Email address</label>
        </div>
           <button className="btn btn-danger  l-10  shadow-sm p-3 mb-5  rounded" id="getstarted">Get Started <span className="bi bi-chevron-right"></span></button> 
        
       </div>

       </div>
    );

}