import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        return (
            <section className="Photos">
                <div className="row">
                {props.photos.map(function (photo, index) {
                    return (
                        <span className="col-3" key={index}>
                            <a href={photo.src.original} target="_blank" rel="noreferrer">
                            <img src={photo.src.landscape} className="img-fluid" alt="#" width="210"/>
                            </a>
                            </span>

                    );
                })}
                </div>
            </section>
            
        );
    } else {
        return null;
    }

}