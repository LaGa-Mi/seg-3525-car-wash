function PositionCard(props) {
    return (
        <div className="col-md-4">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p><strong>Type:</strong>{" " + props.type}</p>
            <a href="#" className="btn btn-primary" onClick={props.func}>Apply Now</a>
          </div>
        </div>
      </div>
    );
}

export default PositionCard;