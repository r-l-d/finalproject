import React, { useEffect } from "react";

export default function Video(props) {
    let videoId = props.videoId;

    // useEffect(() => {
    //     if (props.songs.length) {
    //         console.log("songs in video:", props.songs);
    //         console.log("props.songs[0]: ", props.songs[0].id.videoId);
    //         videoId = props.songs[0].id.videoId;
    //     }
    // }, [props.songs);

    console.log("videoId: ", videoId);

    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}
