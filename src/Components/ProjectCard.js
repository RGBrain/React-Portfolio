import React from "react";

function ProjectCard(props) {
    {console.log(props.image)}
    return (
        <div className="col-md-4">
            <div className="card">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3 className="text-white">{props.title}</h3>
                    <p className="card-text text-white">{props.info}</p>
                    <a href="#" className="btn btn-primary">More Info</a>
                </div>
                
                <div className="card-footer">
                    {/* Loop through technologies and render */}

                    {/* {props.tech.array.forEach(element => {
                        <small class="text-muted">{element}</small>
                    })
                    } */}

                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
