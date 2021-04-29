import React from "react";
import Definition from "./Definition";


export default function Meaning(props) {
    console.log(props.results);
    <div className="Meaning">
        <h2>
            {props.results.word}
        </h2>
        {props.results.meanings.map(function(meaning, index) {
            return (<div key={index}>
                <Definition meaning={meaning} />
            </div>
        );
        })}
    </div>
}