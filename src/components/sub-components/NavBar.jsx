function NavBar(props) {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-opacity-75" style={{zIndex:"1"}}>
        <div className="container">
            <a className="navbar-brand" href="./">Company Name</a>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className={"nav-link" + ((props.active === "Home") ? " active":"")} href="../">Home</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link" + ((props.active === "About") ? " active":"")} href="About">About</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link" + ((props.active === "OurExperts") ? " active":"")} href="OurExperts">Our experts</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link" + ((props.active === "Services") ? " active":"")} href="Services">Services</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link" + ((props.active === "BookNow") ? " active":"")} href="BookNow">Book now</a>
                </li>
                <li className="nav-item">
                    <a className={"nav-link" + ((props.active === "Career") ? " active":"")} href="Career">Career</a>
                </li>
            </ul>
            <form className="d-flex ms-1">
                <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-secondary" type="submit">Search</button>
            </form>
            <ul className="navbar-nav ms-1">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="./" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        My Account
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Account info</a></li>
                        <li><a className="dropdown-item" href="#">My bookings</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="BookNow/Login">Login</a></li>
                        <li><a className="dropdown-item" href="BookNow/SignUp">Sign up</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
    );
}
  
export default NavBar;
  