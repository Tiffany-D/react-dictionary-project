import React from "react";
import ReactAudioPlayer from 'react-audio-player';


export default function Phonetics(props) {
    console.log(props.phonetic);
    return (
        <div className="Phonetics">
            <span className="text">
            <p>{props.phonetic.text}
               
            </p>
            <ReactAudioPlayer src={props.phonetic.audio} onPlay controls />
          </span>  
        </div>
    );
}