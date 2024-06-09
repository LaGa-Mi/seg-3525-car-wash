import { Outlet, Link } from "react-router-dom";

function ServiceCard(props) {
    return (
    <div className="card mx-5" style={{width: "20rem"}}>
        <div className="" style={{height:"12rem", width:"100%"}}>
            <img src={props.picture} className="card-img w-100 h-100" alt="..." style={{objectFit:"cover", overflow:"hidden"}}/>
        </div>
        <div className="card-body">
            <h5 className="card-title">{props.service}</h5>
            <ul className="text-start">
                {props.features.map((str, index) => (
                    <li key={index}>{str}</li>
                ))}
            </ul>
            <Link className="btn btn-primary mt-2" to="/BookNow">{"Book Now for " + props.price}</Link>
            <div className="bg-secondary bg-opacity-50 mt-2 w-75 rounded mx-auto">
                {props.subscription}
            </div>
        </div>
    </div>
    );
}

export default ServiceCard;