import React from "react";
import Definition from "./Definition";
import Phonetics from "./Phonetics";
import "./SearchResult.css";

export default function SearchResult(props) {
    if (props.results) {
        
        return (
            
                <div className="SearchResult">
                  <section>  
                <h2>
                    {props.results.word}
                </h2>
                {props.results.phonetics.map(function (phonetic, index) {
                    return (
                        <div key={index}>
                            
                            <Phonetics phonetic={phonetic} />
                            
                        </div>
                        
                    );
                })}
                   </section> 
                {props.results.meanings.map(function (results, index) {
                    return (<section key={index}>
                        <Definition value={results} />
                    </section>
                    );
                })}
                   
                    
            </div>
                
            
        );

    } else {
        return null;
    }
}