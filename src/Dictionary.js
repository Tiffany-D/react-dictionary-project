import React, { useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";




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
                <section>
                    <form onSubmit={handleSubmit} >
                        <input type="search" autoFocus={true} onChange={handleKeyword} />
                    suggested words: bishop, rook, pawn, queen, king,...
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