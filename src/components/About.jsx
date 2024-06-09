import NavBar from './sub-components/NavBar';

function About() {
    return (
    <>
    <NavBar active="About"/>
     <div className="w-100" style={{ height: '375px', backgroundColor: "blue"}}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11201.26887632515!2d-75.6831329!3d45.4231064!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050a6db98d73%3A0x188a59c3622fdbae!2sUniversity%20of%20Ottawa!5e0!3m2!1sen!2sca!4v1717459500407!5m2!1sen!2sca"
        title="University of Ottawa map"
        width="100%"
        height="100%"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

      <div className="container d-flex">
        <img className="img-responsive d-block center-block my-auto" src={require("../resources/logo-placeholder.png")} alt="Company Logo" style={{height: "8rem"}}/>
        <h1 className="display-1 mt-4 text-primary">Company Name</h1>
      </div>

      <div className="d-flex container justify-content-center mt-4 mb-5">
        <div className="row" >
          <div className="col">
            <h2>Who We Are</h2>
            <p>
              We are a company dedicated to providing excellent services and products to our customers. Our mission is to deliver quality and satisfaction in every interaction.
            </p>
          </div>
          <div className="col">
            <img className="img-responsive d-block center-block mx-auto" src={require("../resources/green-car-wash.jpg")} alt="Company Location" style={{height: "20rem"}}/>
          </div>
          <div className="col">
            <h2>Contact Information</h2>
            <h3 className="h5">Address:</h3>
            <p>1234 Example Street<br></br>City, State, ZIP Code</p>
            <h3 className="h5">Phone:</h3>
            <p>(123) 456-7890</p>
            <h3 className="h5">Email:</h3>
            <p>info@company.com</p>
          </div>
        </div>
      </div>
    </>
    );
}

export default About;