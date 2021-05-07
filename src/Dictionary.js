import React, { useState } from "react";
import axios from "axios";
import SearchResult from "./SearchResult";
import "./Dictionary.css";
import Photos from "./Photos";




export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
    

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
        
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handlePhotosResponse(response) {
        console.log(response.data);
        setPhotos(response.data.photos);
    }

    function load() {
        setLoaded(true);
        search();
    }

    function search() {
        
       
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f91700001000001cc8f0eb1e319408288af5e3df9618698";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
        let headers = { "Authorization": `Bearer ${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handlePhotosResponse);

    }

    function handleKeyword(event) {
        setKeyword(event.target.value);
    }
    
    if (loaded) {
        return (
            <div className="Dictionary">
                <section>
                  <h1>
                   Dictionary
        </h1>
              </section>  
                <section>
                
                   
        <h2>
          What word do you want to look up ? 
       </h2>
                    <form onSubmit={handleSubmit} >
                        <input type="search" autoFocus={true} onChange={handleKeyword} defaultValue={props.defaultKeyword}/>
                     
                    </form>
                    <br/>
                    <p>
                    suggested words: bishop, rook, pawn, queen, king,...
                    </p>
                </section>

                <SearchResult results={results} />
                <Photos photos={photos}/>
            </div>
    
        );
    } else {
        load();
        return null;
    }
}