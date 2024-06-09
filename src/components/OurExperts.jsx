import NavBar from './sub-components/NavBar';
import ExpertCard from './sub-components/ExpertCard';

function OurExperts() {
    return (
    <>
    <NavBar active="OurExperts"/>
    <div className="container w-75 mt-3">
        <h1 className="display-1">Our Experts</h1>
        <ExpertCard
            name="John Doe"
            pic={require("../resources/JohnDoe.jpg")}
            specialty="Simple Cleaning"
            services={["Service 1", "Service 2"]}
            description="Meet John Doe, our dedicated car washing expert with a passion for making vehicles shine.
            With over five years of experience in the car detailing industry, John has honed his skills to perfection.
            His meticulous attention to detail and commitment to excellence ensure that every car he washes looks its
            absolute best."
        />
        <ExpertCard
            name="Jane Doe"
            pic={require("../resources/JaneDoe.jpg")}
            specialty="Deep Cleaning"
            services={["Service 3", "Service 4", "Service 5"]}
            description="Introducing Jane Doe, our exceptional car washing specialist dedicated to delivering top-notch
            service with every wash. With a solid background in car detailing spanning over seven years, Jane brings a
            wealth of experience and a keen eye for perfection to our team."
        />
        <ExpertCard
            name="Obi-Wan Kenobi"
            pic={require("../resources/Obi.jpg")}
            specialty="Deep Cleaning"
            services={["The force", "Swordfighting", "Having the high-ground"]}
            description="This is just for testing"
        />
    </div>
    </>
    );
}

export default OurExperts;