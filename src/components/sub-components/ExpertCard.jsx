function ExpertCard(props) {
    return (
    <>
    <br></br>
    <div className="p-3 bg-secondary bg-opacity-25 rounded" style={{height:"400px", width:"100%"}}>
        <div className="position-relative top-0 start-0" style={{height:"95%", width:"95%"}}>
            <div className="mb-4" style={{height:"80%", width:"100%"}}>
                <div className="float-start" style={{width:"40%", height:"100%", overflow: "hidden"}}>
                    <img src={props.pic} style={{width:"90%", height:"100%", objectFit: "contain"}} alt={"Image of " + props.name}></img>
                </div>
                <div className="float-end flex-column" style={{width:"60%"}}>
                    <h2 className=" h2 text-end display-6">{props.name}</h2>
                    <div className="d-flex justify-content-end">
                        <div className="bg-primary bg-opacity-50 rounded w-100 text-end">
                            <h3 className="h5 px-4 py-1" >{props.specialty}</h3>
                        </div>
                    </div>
                    <ul dir="rtl">
                        {props.services.map((str, index) => (
                            <li key={index}>{str}</li>
                        ))}
                    </ul>
                    <div className="bg-secondary bg-opacity-25 px-3 float-end rounded">
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center" style={{width:"100%"}}>
                <a href="./"><button className="btn btn-primary px-5"><p className="h4">Book Now</p></button></a>
            </div>
        </div>
    </div>
    </>
    );
}

export default ExpertCard;