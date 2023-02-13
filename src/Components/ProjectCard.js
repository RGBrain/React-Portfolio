import React from "react";

function ProjectCard(props) {
    {console.log(props.image)}
    return (
        <div className="col-md-4">
        <div className="card">
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="">{props.title}</h5>
                <p className="card-text">{props.gitHub}</p>
                <a href="#" className="btn btn-primary">More Info</a>
            </div>
            <div class="card-footer">
                <small class="text-muted">{props.tech}</small>
            </div>
        </div>
    </div>
    )
}

export default ProjectCard;
