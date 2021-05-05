import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import "./Phonetics.css";



export default function Phonetics(props) {
    console.log(props.phonetic);
    return (
        
            <div className="Phonetics">
              <span className="text">
           
        {props.phonetic.text}
               
           </span>
            <section className="player">
            <ReactAudioPlayer src={props.phonetic.audio} onPlay controls volume={0.5}/>
           </section>
        </div>
        
    );
}
