import React from "react";
import { Component } from "react";
import data from '../links/locale.json'
import '../styles/Locale.css'
class LocaleComponent extends Component {
    render() {
        const list = data["locale-links"]
        return (
            <div className="locale-body">
                <h5 className="section-title">Locale</h5>
                <div className="locale-video-list" >
                    {
                        list.map((link) => {
                            return <iframe className="locale-iframe" src={link}
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                            ></iframe>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default LocaleComponent