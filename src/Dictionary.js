import React, { useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import Phonetics from "./Phonetics";



export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    let [phonetic, setPhonetic] = useState(null);

    function handleResponse(response) {
        setResults(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
       
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);

    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary-App">
            <form onSubmit={search} >
                <input type="search" autoFocus={true} onChange={handleKeyword} />
            </form>
            <SearchResult results={results} />
            <Phonetics phonetic={phonetic}/>
        </div>
    );
}