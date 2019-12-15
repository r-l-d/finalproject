import React from "react";
import { useSelector } from "react-redux";

export default function Video() {
    const songs = useSelector(state => state && state.songs);

    return (
        <div>
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/G0YlVZTOc4g"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}
