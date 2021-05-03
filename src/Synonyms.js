import React from "react";


export default function Synonyms(props) {
    if (props.syn) {
        return (
            <section>
              <ul className="Synonyms">
                {props.syn.map(function (syn, index) {
                    return <li key={index}>{syn}</li>
                })}
            </ul>  
            </section>
            
            
        );
    } else {
        return null;
    }
}
