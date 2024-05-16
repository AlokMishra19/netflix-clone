import "./NetflixFAQComponents.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";

export default function NetflixFAQComponents(){
    return(
   
        <div className="netflix-faq text-white bg-black">
                 <div>
                    <h1 className="text-center fw-bold mb-5 faq_header">Frequently Asked Questions</h1>
                </div>
            <div className="bg-secondary">
            <div class="accordion " id="accordionExample">
  <div class="accordion-item bg-black fw-bold ">
    <h2 class="accordion-header">
      <button class="accordion-button p-3 mb-2 bg-dark  text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is Netflix?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body text-white ">
        <strong>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item bg-black  ">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed p-3 mb-2 bg-dark text-white fw-bold fs-15" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       How much does netflix Cost?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body text-white fw-bold">
      Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
      </div>
    </div>
  </div>
  <div class="accordion-item bg-black ">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed p-3 mb-2 bg-dark text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Where can i Watch?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body text-white fw-bold">
      Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.      </div>
    </div>
  </div>
  <div class="accordion-item bg-black ">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed p-3 mb-2 bg-dark text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        How do I cancel?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body text-white fw-bold">
      Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
      </div>
    </div>
  </div>
  <div class="accordion-item bg-black ">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed p-3 mb-2 bg-dark text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       What can I watch On Netflix?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body text-white fw-bold">
      Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.      </div>
    </div>
  </div>
  <div class="accordion-item bg-black ">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed p-3 mb-2 bg-dark text-white fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Is Neflix good for Kids?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body text-white fw-bold">
      The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.      </div>
    </div>
  </div>
</div>
            </div>
        </div>

    );
}