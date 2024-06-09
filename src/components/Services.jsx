import NavBar from './sub-components/NavBar';
import ServiceCard from './sub-components/ServiceCard';

function Services() {
    return (
    <>
    <NavBar active="Services"/>
    <img src={require("../resources/services.png")} style={{width:"100%", height:"40vh", objectFit:"cover", overflow:"hidden"}} alt="background"></img>
    <div className='container text-center'>
        <div className='mx-auto mt-4' style={{width:"80%"}}>
            <h1 className="display-1">Services</h1>
            <p>At our company, we offer a comprehensive range of services to keep your vehicle looking its best. From our basic
            exterior wash to a full-service detailing, we have packages to suit every need and budget. Our state-of-the-art facilities
            feature eco-friendly products and the latest technology to ensure a thorough, scratch-free clean. Choose from our premium hand
            wash, waxing, interior vacuuming, and upholstery cleaning services to give your car a showroom shine. We also offer specialized
            treatments like clay bar detailing, headlight restoration, and paint protection to enhance and preserve your vehicle’s appearance.
            Visit us today and experience the ultimate in car care!</p>
        </div>
        <h2 className='h2 mt-5'>Exterior</h2>
        <div className='d-flex justify-content-center mt-3'>
            <ServiceCard
                picture={require("../resources/generic-car-wash.jpg")}
                service="Basic Exterior Wash"
                features={
                    ["Exterior Wash With Soap",
                    "Rinse And Scrub",
                    "Drying"]}
                price="$25.00"
                subscription="Or unlimited as a part of our $5.00/month deluxe package"
            />
            <ServiceCard
                picture={require("../resources/generic-presure-wash.png")}
                service="Pressure Wash"
                features={
                    ["Pressure Wash",
                    "Cleaning Rims",
                    "Underside Cleaning",
                    "Drying"]}
                price="$100.00"
            />
            <ServiceCard
                picture={require("../resources/generic-polishing.png")}
                service="Polishing"
                features={
                    ["Polishing",
                    "Protect's Paint"]}
                price="$175.00"
            />
        </div>
        <h2 className='h2 mt-5'>Interior</h2>
        <div className='d-flex justify-content-center mb-5'>
            <ServiceCard
                picture={require("../resources/basic-interior-wash.jpg")}
                service="Basic Interior Cleaning"
                features={
                    ["Vacuum seats, carpets, floor mats",
                    "Wipe dashboard and console",
                    "Clean interior windows",
                    "Dust vents and trim"]}
                price="$25.00"
            />
            <ServiceCard
                picture={require("../resources/deluxe-interior-wash.png")}
                service="Deluxe Interior Detailing"
                features={
                    ["Comprehensive vacuuming",
                    "Clean and condition seats",
                    "Detailed dashboard and console cleaning",
                    "Streak-free window cleaning",
                    "Deodorizing treatment"]}
                price="$75.00"
                subscription="Or unlimited as a part of our $5.00/month deluxe package"
            />
            <ServiceCard
                picture={require("../resources/premium-interior-wash.png")}
                service="Premium Interior Restoration"
                features={
                    ["Full vacuuming, including trunk",
                    "Steam clean carpets, treat seats",
                    "Detailed dashboard, console, and trim cleaning",
                    "Clean and disinfect vents",
                    "Headliner cleaning",
                    "Apply fabric or leather protectant",
                    "Complete deodorizing and sanitizing"]}
                price="$150.00"
            />
        </div>
    </div>
    </>
    );
}

export default Services;