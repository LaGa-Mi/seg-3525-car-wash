import { useState } from 'react';
import { useEffect } from 'react';

import NavBar from './sub-components/NavBar';

const serviceIndex = 0;
const specialistIndex = 1;
const dateIndex = 2;
const timeIndex = 3;

function BookNow(props) {
    const [showLogin, setShowLogin] = useState(props.Login ? true : false);
    const [showSignUp, setShowSignUp] = useState(props.SignUp ? true : false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [confirmationData, setConfirmationData] = useState([]);

    function handleBookClick() {
        setShowLogin(true);
        setConfirmationData([
            document.getElementById("serviceSelect").value,
            document.getElementById("specialistSelect").value,
            document.getElementById("selectedDate").innerText,
            document.getElementById("timeSelect").value
        ]);
    }
    function handleLoginClick() {
        setShowLogin(false);
        setShowConfirmation(true);
    }
    function handleSignupClick() {
        setShowSignUp(false);
        setShowLogin(true);
    }
    function handleConfirmClick() {
        setShowConfirmation(false);
    }
    
    return (
        <>
        <NavBar active="BookNow" />
        <div className="container mt-5">
            <div className="row">
                <div className="col-3 d-flex flex-column">
                    <div className="my-auto">
                        <div className="input-group mt-auto mb-5">
                            <label className="input-group-text" htmlFor="serviceSelect"><span style={{ color: "red" }}>*</span>&nbsp;&nbsp;Service</label>
                            <select className="form-select" id="serviceSelect">
                                <option defaultValue>Choose...</option>
                                <option value="Basic Exterior Wash">Basic Exterior Wash</option>
                                <option value="Pressure Wash">Pressure Wash</option>
                                <option value="Polishing">Polishing</option>
                                <option value="Basic Interior Cleaning">Basic Interior Cleaning</option>
                                <option value="Deluxe Interior Detailing">Deluxe Interior Detailing</option>
                                <option value="Premium Interior Restoration">Premium Interior Restoration</option>
                            </select>
                        </div>
                        <div className="input-group mb-auto">
                            <label className="input-group-text" htmlFor="specialistSelect">Specialist</label>
                            <select className="form-select" id="specialistSelect">
                                <option defaultValue>Choose...</option>
                                <option value="No preference">No preference</option>
                                <option value="John Doe">John Doe</option>
                                <option value="Jane Doe">Jane Doe</option>
                                <option value="Obi-Wan Kenobi">Obi-Wan Kenobi</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/*******************************************************************************************
                 * This calendar section was made with the assistance of chat-GPT
                 *******************************************************************************************/}
                <div className="col-md-6 border p-3">
                    <div className="calendar-header">
                        <button id="prevMonth" className="btn btn-primary">Previous</button>
                        <h2 className="text-center" id="currentMonth"></h2>
                        <button id="nextMonth" className="btn btn-primary">Next</button>
                    </div>
                    <div className="calendar-controls mt-3">
                        <button id="prevYear" className="btn btn-secondary me-2">{"<"}</button>
                        <span id="currentYear" className="me-2"></span>
                        <button id="nextYear" className="btn btn-secondary me-2">{">"}</button>
                        <button id="today" className="btn btn-success">Today</button>
                    </div>
                    <div id="calendar" className="calendar mt-3"></div>
                    <p className="mt-3 text-center">Date Chosen: <span id="selectedDate">None</span></p>
                </div>
                {/*******************************************************************************************
                 * Calendar section end
                 *******************************************************************************************/}
                 <script src={require("../js/calendar")}></script>
                <div className="d-flex col-3">
                    <div className="input-group my-auto">
                        <label className="input-group-text" htmlFor="specialistSelect"><span style={{ color: "red" }}>*</span>&nbsp;&nbsp;Time</label>
                        <select className="form-select" id="timeSelect">
                            <option defaultValue>Choose...</option>
                            <option value="9:00 am">9:00 am</option>
                            <option value="12:00 pm">12:00 pm</option>
                            <option value="3:00 pm">3:00 pm</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
            <button className="btn btn-primary" onClick={handleBookClick}>Book</button>
        </div>

        {showLogin ? 
        <div className='d-flex justify-content-center align-items-center position-absolute vh-100 vw-100 bg-black top-0 z-2 bg-opacity-75'>
            <div className='position-absolute bg-white z-3 rounded'>
                <div className='d-flex justify-content-between px-4 pt-4'>
                    <h1 className='text-primary h3'>Login</h1>
                    <button className='btn btn-dark mb-3 me-1 mt-1' onClick={() => {setShowLogin(false);}}>X</button>
                </div>
                <div className='d-flex flex-column p-4'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="Email"/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="Password"/>
                    </div>
                    <button className="btn btn-primary" onClick={handleLoginClick}>Login</button>
                    <a href='#' onClick={() => {setShowLogin(false);setShowSignUp(true);}}>Don't have an account? Create one!</a>
                </div>
            </div>
        </div> : ""}
        {showSignUp ? 
            <div className='d-flex justify-content-center align-items-center position-absolute vh-100 vw-100 bg-black top-0 z-2 bg-opacity-75'>
                <div className='position-absolute bg-white z-3 rounded'>
                    <div className='d-flex justify-content-between px-4 pt-4'>
                        <h1 className='text-primary h3'>Sign Up</h1>
                        <button className='btn btn-dark mb-3 me-1 mt-1' onClick={() => { setShowSignUp(false); }}>X</button>
                    </div>
                    <div className='d-flex flex-column p-4'>
                        <div className="input-group mb-3">
                            <input id="signupFirstName" type="text" className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="First Name" />
                        </div>
                        <div className="input-group mb-3">
                            <input id="signupLastName" type="text" className="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="Last Name" />
                        </div>
                        <div className="input-group mb-3">
                            <input id="signupEmail" type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="Email" />
                        </div>
                        <div className="input-group mb-3">
                            <input id="signupPassword" type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="Password" />
                        </div>
                        <div className="input-group mb-3">
                            <input id="signupPasswordConfirm" type="text" className="form-control" placeholder="Password Confirm" aria-label="Password Confirm" aria-describedby="Password Confirm" />
                        </div>
                        <button className="btn btn-primary" onClick={handleSignupClick}>Sign Up</button>
                    </div>
                </div>
            </div> : ""}
        {showConfirmation ?
            <div className='d-flex justify-content-center align-items-center position-absolute vh-100 vw-100 bg-black top-0 z-2 bg-opacity-75'>
                <div className='position-absolute bg-white z-3 rounded'>
                    <div className='d-flex justify-content-between px-4 pt-4'>
                        <h1 className='text-primary h3 pe-5'>Confirm Booking</h1>
                        <button className='btn btn-dark mb-3 me-1 mt-1' onClick={() => { setShowConfirmation(false); }}>X</button>
                    </div>
                    <div className='d-flex flex-column justify-content-between px-4 pt-4'>
                        <p><span className='h5'>Service: </span>{confirmationData[serviceIndex]}</p>
                        <p><span className='h5'>Specialist: </span>{confirmationData[specialistIndex]}</p>
                        <p><span className='h5'>Date: </span>{confirmationData[dateIndex]}</p>
                        <p><span className='h5'>Time: </span>{confirmationData[timeIndex]}</p>
                    </div>
                    <div className='d-flex flex-column p-4'>
                        <h1>{document.getElementById("signupFirstName")}</h1>
                        <button className="btn btn-primary" onClick={handleConfirmClick}>Confirm</button>
                    </div>
                </div>
            </div>: ""}
        </>
    );
}

export default BookNow;