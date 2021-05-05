import React from "react";
import Synonyms from "./Synonyms";
import "./Definition.css";

export default function Definition(props) {
    return (
        <div className="Definition">
            <h3>
                {props.value.partOfSpeech}
            </h3>
            {props.value.definitions.map(function (results, index) {
                return (
                    <div key={index}>
                        <p>
                            {props.value.definitions[0].definition}
                            <em>
                                {props.value.definitions[0].example}
                                <Synonyms syn={results.synonyms}/>
                            </em>
                        </p>
                    </div>
                );
            })}
        </div>
    );
    
}