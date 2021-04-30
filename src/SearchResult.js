import React from "react";
import Definition from "./Definition";


export default function SearchResult(props) {
    if (props.results) {
        
        return (
            <div className="SearchResult">
                <h2>
                    {props.results.word}
                </h2>
                {props.results.meanings.map(function (results, index) {
                    return (<div key={index}>
                        <Definition value={results} />
                    </div>
                    );
                })}
            </div>
        );

    } else {
        return null;
    }
}