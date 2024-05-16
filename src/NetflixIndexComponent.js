
import "./NetflixIndexComponent.css";
import NetflixHeaderComponent from "./NetflixComponents/NetflixHeaderComponent";
import NetflixMainComponent from "./NetflixComponents/NetflixMainComponent"
import NetflixFooterComponent from "./NetflixComponents/NetflixFooterComponent";
import NetflixFAQComponents from "./NetflixComponents/NetflixFAQComponents";
import Gallery1 from "./NetflixComponents/SmallerComponents/Gallery1";
import Gallery2 from "./NetflixComponents/SmallerComponents/Gallery2";
import Gallery3 from "./NetflixComponents/SmallerComponents/Gallery3";
import Gallery4 from "./NetflixComponents/SmallerComponents/Gallery4";
export default function NetflixIndexComponent(){

    return(
      <div className="netflix_index">
        <div className="welcome">
          <header>
            <NetflixHeaderComponent/>
          </header>
          <main>
            <NetflixMainComponent/>
          </main>
        </div>

      
          <div className="gallery">
          <Gallery1/>
          </div>
          <div className="gallery">
          <Gallery2/>
          </div>
          <div className="gallery">
          <Gallery3/>
          </div>
          <div className="gallery">
            <Gallery4/>
          </div>
          <section><NetflixFAQComponents/></section>
          <footer> 
            <NetflixFooterComponent/>
          </footer>
        
      </div>
    );
}