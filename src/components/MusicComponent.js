import React from "react";
import { Component } from "react";
import data from '../links/locale.json'
import '../styles/Music.css'
class MusicComponent extends Component {
    render() {
        const list = data["music-links"]
        return (
            <div className="music-body">
                <h5 className="section-title">Music</h5>
                <div className="music-video-list">
                    {
                        list.map((link) => {
                            return <iframe className="music-iframe" src={link}
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            ></iframe>
                        })
                    }
                </div>
                <div className="timer">
                    <h5 className="section-title">Timer</h5>
                    <embed className="music-iframe" src='https://pomofocus.io/'>
                    </embed>
                </div>
            </div>
        )
    }
}

export default MusicComponent