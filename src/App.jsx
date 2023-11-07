
import './App.css'

function App() {
  return (
    <>
 {/* <!-- NavBar --> */}
 <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="img/logo.png" alt="logo" width="100px" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item topHeader">
                <a className="nav-link active" aria-current="page" href="/"
                  >Our Products</a
                >
              </li>
              <li className="nav-item topHeader">
                <a className="nav-link active" aria-current="page" href="/"
                  >Compatible Phones</a
                >
              </li>
              <li className="nav-item topHeader">
                <a className="nav-link active" aria-current="page" href="/"
                  >Support</a
                >
              </li>
              <li className="nav-item topHeader">
                <a className="nav-link active" aria-current="page" href="/"
                  >Track Order</a
                >
              </li>
              <li className="nav-item singIn">
                <a className="nav-link active" aria-current="page" href="/"
                  >Sign In</a
                >
              </li>
              <li className="nav-item singIn">
                <a className="nav-link active" aria-current="page" href="/">
                  <i className="fa-sole"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
    {/* <!-- second Section --> */}
    <section>
      <div className="bgblue">
        <div className="container">
          <div className="row paddingtopbar">
            <div className="col-lg-6">
              <div className="secondimg">
                <img src="img/leftimg.png" alt="img" width="100%" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="secheading">
                <h3>
                  Share Contact Details <br />
                  with a single tap
                </h3>
                <span>
                  For people who want to make a great first impression. Tap
                  <br />and share your contact details, gather leads and connect
                  <br />
                  to over 5,000 apps and CRM tools.
                </span>
                <p>
                  The Smart Digital Business Card <br />
                  *No App Needed.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- second row --> */}
          <div className="row paddingtopbar">
            <div className="col-lg-6">
              <div className="secheading2">
                <div className="">
                  <h3>
                    Share Contact Details <br />
                    with a single tap
                  </h3>
                  <span>
                    Included with all cards. Switch between modes, <br />
                    depending on the situation. Meet up and share your <br />
                    contact details or switch to Lead Generation mode to <br />
                    receive contact details and send them straight to your
                    <br />
                    CRM.
                  </span>
                </div>
              </div>

              <div className="btn-button">
                <button type="button" className="btn btn-light btn-lg rounded-pill">
                  ORDER YOURS
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="secondimg">
                <img src="img/rightimg.png" alt="img" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- owl carousel --> */}
    <section>
      <div className="carousel">
        <p>Industries Who Love Us</p>
      </div>
      <div className="container">
        <div className="owl-carousel owl-theme">
          <div className="item"><img src="img/slider1.png" alt="sliderimg" /></div>
          <div className="item"><img src="img/slider2.png" alt="sliderimg" /></div>
          <div className="item"><img src="img/slider3.png" alt="sliderimg" /></div>
          <div className="item"><img src="img/slider4.png" alt="sliderimg" /></div>
          <div className="item"><img src="img/slider1.png" alt="sliderimg" /></div>
          <div className="item"><img src="img/slider2.png" alt="sliderimg" /></div>
          <div className="item"><img src="img/slider3.png" alt="sliderimg" /></div>
          <div className="item"><img src="img/slider4.png" alt="sliderimg" /></div>
        </div>
      </div>
    </section>
    {/* <!-- gallery --> */}
    <div className="galleryheading">
      <p>Our Card Range</p>
    </div>
    <div className="container-fluid">
      <div className="box">
        <div className="one">
          <img src="img/Frame 20-1.jpg" alt="" width="300px"/>
        </div>
        <div className="two">
          <img src="img/Frame 21-1.jpg" alt="" width="500px"/>
        </div>
        <div className="three">
          <img src="img/Frame 20-2.jpg" alt="" width="300px"/>


        </div>
        <div className="four">
          <img src="img/Frame 21-1.jpg" alt="" width="500px"/>

        </div>
      </div>
      <div className="box1">
        <div className="one">
          <img src="img/Frame 20-2.jpg" alt="" width="500px"/>
        </div>
        <div className="two">
          <img src="img/Frame 21-2.jpg" alt="" width="300px"/>
        </div>
        <div className="three">
          <img src="img/Frame 20-8.jpg" alt="" width="500px"/>


        </div>
        <div className="four">
          <img src="img/Frame 21.jpg" alt="" width="300px"/>

        </div>
      </div>
      <div className="box2">
        <div className="one">
          <img src="img/Frame 22.jpg" alt="" width="300px"/>
        </div>
        <div className="two">
          <img src="img/Frame 20-9.jpg" alt="" width="500px"/>
        </div>
        <div className="three">
          <img src="img/Frame 21-7.jpg" alt="" width="300px"/>


        </div>
        <div className="four">
          <img src="img/Frame 20-5.jpg" alt="" width="500px"/>

        </div>
      </div>
    

    </div>

    

   
    {/* <!-- form --> */}
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label"
              >First Name</label
            >
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label"
              >Last Name</label
            >
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label"
              >Work Email</label
            >
            <input
              type="email"
              className="form-control"
              id="formGroupExampleInput2"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label"
              >Phone Number</label
            >
            <input
              type="number"
              className="form-control"
              id="formGroupExampleInput2"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput2" className="form-label"
              >Job Title</label
            >
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
            />
          </div>
          <div className="mb-3">
            <label for="formGroupExampleInput" className="form-label"
              >Website URL</label
            >
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
            />
          </div>
          <div className="btn-button-form">
            <button type="button" className="btn btn-primary btn-lg rounded-pill">
              Schedule a Demo
            </button>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="faq">
          <h1>FAQS</h1>


          </div>

        
         
        
            <div className="accordion-item">
              <div className="accordion-item-header">What is a Digital Business Card?</div>
              <div className="accordion-item-body">
                <div className="accordion-item-body-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor animi iusto sit aut id quo harum dolore quisquam ab eum molestiae culpa, amet odit labore. Labore, molestiae? Nesciunt quibusdam fugit id, sint cumque, ipsum reprehenderit itaque quos exercitationem sequi ad, ratione expedita quidem. Laboriosam, suscipit soluta? Reprehenderit earum nulla quas.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-item-header">How do I Share my business Cards? </div>
              <div className="accordion-item-body">
                <div className="accordion-item-body-content">
                  CORS, aka Cross-Origin Resource Sharing, is a mechanism that
                  enables many resources (e.g. images, stylesheets, scripts,
                  fonts) on a web page to be requested from another domain
                  outside the domain from which the resource originated.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-item-header">Are NFC Cards Business safe?  </div>
              <div className="accordion-item-body">
                <div className="accordion-item-body-content">
                  CORS, aka Cross-Origin Resource Sharing, is a mechanism that
                  enables many resources (e.g. images, stylesheets, scripts,
                  fonts) on a web page to be requested from another domain
                  outside the domain from which the resource originated.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-item-header">What are the benefits of NFC cards?  </div>
              <div className="accordion-item-body">
                <div className="accordion-item-body-content">
                  CORS, aka Cross-Origin Resource Sharing, is a mechanism that
                  enables many resources (e.g. images, stylesheets, scripts,
                  fonts) on a web page to be requested from another domain
                  outside the domain from which the resource originated.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <div className="accordion-item-header">How do I sign up? </div>
              <div className="accordion-item-body">
                <div className="accordion-item-body-content">
                  CORS, aka Cross-Origin Resource Sharing, is a mechanism that
                  enables many resources (e.g. images, stylesheets, scripts,
                  fonts) on a web page to be requested from another domain
                  outside the domain from which the resource originated.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    

    </>
  
    );
}   

export default App
