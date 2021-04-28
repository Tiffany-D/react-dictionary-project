import React,{ useState } from "react";



export default function Dictionary() {
    let [keyword, setKeyword] = useState(null);

    function search(event) {
        event.preventDefault();
        alert (`Searchinf for ${keyword} definition`);

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