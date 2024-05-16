import "./Gallery2.css";

export default function Gallery2(){
    return(
        <div className="parent d-flex">
            <div id="child"> <img  alt="gallery2" /></div>
            <div className="text-white" id="gallery2text"> 
                <h1  className="fw-bold">Download your shows<br/> to watch offline</h1><br/>
                <h3>Save your favourites easily and always have something to watch.</h3>
            </div>
        </div>
    );
}