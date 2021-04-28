import React, { useState } from "react";
import axios from "axios";



export default function Dictionary() {
    let [keyword, setKeyword] = useState(null);

    function handleResponse(response) {
        
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

        </div>
    );
}