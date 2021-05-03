import React, { useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import "./Dictionary.css";




export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function load() {
        setLoaded(true);
    }

    function search() {
        
       
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }
    
    if (loaded) {
        return (
            <div className="Dictionary-App">
                  <h1>
        Dictionary
        </h1>
                <section>
                
                   
        <h2>
          What word do you want to look up ? 
       </h2>
                    <form onSubmit={handleSubmit} >
                        <input type="search" autoFocus={true} onChange={handleKeyword} />
                        <span>
                    suggested words: bishop, rook, pawn, queen, king,...
                      </span>  
            </form>
                </section>

                <SearchResult results={results} />
            </div>
    
        );
    } else {
        load();
        return null;
    }
}