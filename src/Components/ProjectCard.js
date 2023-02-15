import React from "react";

function ProjectCard(props) {
    {console.log(props.image)}
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card border rounded">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="text-white">{props.title}</h3>
                    <p id="card-info" className="card-text text-white">{props.info}</p>
                    <div className="button-area">
                        <a href={props.gitHub} className="btn-lg btn btn-primary" id="gitBtn">GitHub</a>
                        { props.liveUrl !== "not live" ? <a href={props.liveUrl} className="btn-lg btn btn-primary" id="liveBtn">Live</a> : <a href={props.liveUrl} className="disabled btn-lg btn btn-primary" id="liveBtn">CLA</a>
                        }
                    </div>
                </div>
                <div className="card-footer d-flex">
                    {props.tech.map((tech, index) => (
                    <small className="text-muted" id="tech" key={index}> {tech} </small>
                ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
