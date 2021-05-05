import React from "react";
import "./Synonyms.css";



export default function Synonyms(props) {
    if (props.syn) {
        return (
           <div className="Syn">
            <section>
              <ul className="Synonyms">
                {props.syn.map(function (syn, index) {
                    return <li key={index}>{syn}</li>
                })}
            </ul>  
            </section>
            </div>
            
        );
    } else {
        return null;
    }
}
