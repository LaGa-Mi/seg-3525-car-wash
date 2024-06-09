import NavBar from './sub-components/NavBar';

function Main() {
    return (
    <>
    <NavBar active="Home"/>
    <div className="d-flex flex-column align-items-center position-absolute" style={{top:"0"}}>
        <img className="img-fluid" src={require("../resources/main-bg.jpg")} alt="Background" style={{ width: '100%', zIndex:"-1", objectFit:"contain", overflow:"hidden"}}/>
        <div className="position-absolute top-50 start-50 translate-middle text-center rounded-pill p-5" style={{backgroundColor:"rgba(255, 255, 255, 85%)"}}>
            <img className="img-fluid" src={require('../resources/logo-placeholder.png')} alt="Company Logo" style={{opacity:"100%"}}/>
            <h1 className="display-1 mt-4 text-primary" style={{ fontFamily: 'Helvetica' }}>Company Name</h1>
            <p className="h3">Slogan Slogan Slogan Slogan Slogan <br /> Slogan Slogan Slogan</p>
            <h2 className="display-4 mt-4">Hours of Operation</h2>
            <p className="h4">Monday - Friday: 9 AM - 5 PM</p>
            <p className="h4">Saturday: 10 AM - 4 PM</p>
            <p className="h4">Sunday: Closed</p>
            <a href="./BookNow"><button className="btn btn-primary btn-lg mt-3"><p className="h5">Book Now</p></button></a>
        </div>
    </div>
    </>
    );
}

export default Main;