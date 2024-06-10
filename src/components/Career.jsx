import { useState } from 'react';

import NavBar from './sub-components/NavBar';
import PositionCard from './sub-components/PositionCard';

function Career() {
  const [showAlert, setShowAlert] = useState(false);

  function toggleAlertOff() {
    setShowAlert(false);
  }
  function toggleAlertOn() {
    setShowAlert(true);
  }

  return (
  <>
  <NavBar active="Career"/>
  <header className="bg-primary text-white text-center py-5">
    <div className="container">
      <h1>Join Our Team!</h1>
      <p className="lead">We’re always looking for passionate individuals to join our growing team. Explore our current job openings below.</p>
    </div>
  </header>

  <section className="container my-5">
    <div className="row">
      <PositionCard title="Car Wash Attendant" description="Responsibilities include washing and detailing vehicles, customer service, and maintaining equipment." type="Full-time" func={toggleAlertOn}/>
      <PositionCard title="Customer Service Representative" description="Responsibilities include greeting customers, answering questions, and handling transactions." type="Part-time" func={toggleAlertOn}/>
      <PositionCard title="Detailing Specialist" description="Responsibilities include detailed interior and exterior cleaning, polishing, and applying protective treatments." type="Full-time" func={toggleAlertOn}/>
    </div>
  </section>

  <div id="nonFunctionalAlert" className="alert alert-warning position-absolute" role="alert" style={ {display:(showAlert ? '' : 'none'), top:"10vh"}}>
    Functionality not implemented on this page! <button className='btn btn-dark ms-3' onClick={toggleAlertOff}>x</button>
  </div>
    </>
    );
}

export default Career;