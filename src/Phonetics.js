import React from "react";
import ReactAudioPlayer from 'react-audio-player';


export default function Phonetics(props) {
    console.log(props.phonetic);
    return (
        <div className="Phonetics">
            <span className="text">
        {props.phonetic.text}
               
            </span> 
            <ReactAudioPlayer src={props.phonetic.audio} onPlay controls volume={0.5}/>
           
        </div>
    );
}