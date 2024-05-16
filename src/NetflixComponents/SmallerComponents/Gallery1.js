import "./Gallery1.css";

export  default function  Gallery1(){

    return(

        <div className="parent">
            <div className="child text-white">
                <h1 className="fw-bold">Enjoy on your TV</h1> <br/>
                <h3>Watch on smart TVs, PlayStation, Xbox, Chromecast,  <br/>Apple TV, Blu-ray players and more.</h3>
            </div>
            <div>
                <img  alt="gallery1" width={"450px"} height={"400px"} id="gallery1image"/>
            </div>
        </div>
    );
}