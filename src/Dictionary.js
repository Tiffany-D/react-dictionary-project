import React, { useState } from "react";
import axios from "axios";
import Meaning from "./Meaning";



export default function Dictionary() {
    let [keyword, setKeyword] = useState(null);
    let [meaning, setMeaning] = useState({});

    function handleResponse(response) {
        setMeaning(response.data[0]);
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
            <Meaning results={meaning}/>
        </div>
    );
}