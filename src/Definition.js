import React from "react";

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
                            </em>
                        </p>
                    </div>
                );
            })}
        </div>
    );
    
}