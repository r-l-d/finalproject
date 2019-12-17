import React, { useEffect } from "react";

export default function Video(props) {
    let videoId = props.videoId;
    let songs = props.songs;
    let songList = [];

    for (var i = 0; i < songs.length; i++) {
        songList.push(songs[i].id.videoId);
    }

    console.log("songList in iframeplayer: ", songList);

    // useEffect(() => {
    //     if (props.songs.length) {
    //         console.log("songs in video:", props.songs);
    //         console.log("props.songs[0]: ", props.songs[0].id.videoId);
    //         videoId = props.songs[0].id.videoId;
    //     }
    // }, [props.songs);

    console.log("videoId: ", videoId);
    console.log("songList: ", songList);
    let songListString = songList.toString();
    console.log("songListString: ", songListString);

    return (
        <div>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
                frameBorder="0"
                playlist={`${songListString}`}
                loop="1"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}
