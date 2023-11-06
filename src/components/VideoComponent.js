import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
class VideoComponent extends Component{
    render(){
        return(
            <iframe width="560" height="315" src="https://www.youtube.com/embed/HYUiahljMMc?si=YdXcWjDw2vaNHLXw"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        )
    }
}

export default Footer