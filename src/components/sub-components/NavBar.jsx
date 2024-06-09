import { Outlet, Link } from "react-router-dom";

function NavBar(props) {
    return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-opacity-75" style={{zIndex:"1"}}>
        <div className="container">
            <Link className="navbar-brand" to="/">Company Name</Link>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link className={"nav-link" + ((props.active === "Home") ? " active":"")} to="/">Home</Link>
                    {/*<a className={"nav-link" + ((props.active === "Home") ? " active":"")} href="../">Home</a>*/}
                </li>
                <li className="nav-item">
                    <Link className={"nav-link" + ((props.active === "About") ? " active":"")} to="/#/About">About</Link>
                </li>
                <li className="nav-item">
                    <Link className={"nav-link" + ((props.active === "OurExperts") ? " active":"")} to="/#/OurExperts">Our experts</Link>
                </li>
                <li className="nav-item">
                    <Link className={"nav-link" + ((props.active === "Services") ? " active":"")} to="/#/Services">Services</Link>
                </li>
                <li className="nav-item">
                    <Link className={"nav-link" + ((props.active === "BookNow") ? " active":"")} to="/#/BookNow">Book now</Link>
                </li>
                <li className="nav-item">
                    <Link className={"nav-link" + ((props.active === "Career") ? " active":"")} to="/#/Career">Career</Link>
                </li>
            </ul>
            <form className="d-flex ms-1">
                <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-secondary" type="submit">Search</button>
            </form>
            <ul className="navbar-nav ms-1">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">My Account</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link className="dropdown-item" to="#">Account info</Link>
                        <Link className="dropdown-item" to="#">My bookings</Link>
                        <li><hr className="dropdown-divider"/></li>
                        <Link className="dropdown-item" to="/#/BookNow/Login">Login</Link>
                        <Link className="dropdown-item" to="/#/BookNow/SignUp">Sign up</Link>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>

    <Outlet/>
    </>
    );
}
  
export default NavBar;
  