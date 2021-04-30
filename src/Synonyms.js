import React from "react";


export default function Synonyms(props) {
    if (props.syn) {
        return (
            <ul className="Synonyms">
                {props.syn.map(function (syn, index) {
                    return <li key={index}>{syn}</li>
                })}
            </ul>
            
        );
    } else {
        return null;
    }
}
