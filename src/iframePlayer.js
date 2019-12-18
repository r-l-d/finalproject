import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export default function IframePlayer() {
    // let videoId = props.videoId;
    let songList = [];
    let playListIndex = 0;
    const [player, setPlayer] = useState({});

    const songs = useSelector(state => {
        return state.songs;
    });

    const videoId = useSelector(state => {
        return state.videoId;
    });

    const queue = useSelector(state => {
        return state.queue;
    });

    const favorites = useSelector(state => {
        return state.favorites;
    });

    console.log("videoId in player: ", videoId);
    console.log("queue in player: ", queue);
    console.log("favorites in player: ", favorites);
    console.log("songs in player: ", songs);
    // let songListString = songList.toString();
    // console.log("songListString: ", songListString);

    // var player;
    let videoData;
    //
    // if (YT.PlayerState.Playing) {
    //     console.log("player is playing");
    // }

    console.log("videodata before useEffect: ", videoData);

    useEffect(() => {
        if (player.l) {
            // console.log("player.l in useEffect: ", player.l.videoData.video_id);
            if (videoId !== player.l.videoData.video_id) {
                // console.log("new videoId is different than playing");
                // console.log("player in new video: ", player);
                player.stopVideo();
                player.loadVideoById(videoId);
            }
        } else {
            if (!videoId) {
                return;
            } else {
                if (queue.length) {
                    console.log("queue being added to songList: ", queue);
                    for (var j = 0; j < queue.length; j++) {
                        songList.unshift(queue[j].video_id);
                    }
                    console.log("songList after queue added: ", songList);
                }
                // console.log("videoId in player useEffect: ", videoId);
                // console.log("videodata inside useEffect: ", videoData);
                setPlayer(
                    new YT.Player("ytplayer", {
                        height: "360",
                        width: "640",
                        videoId: videoId,
                        events: {
                            onReady: function(event) {
                                console.log(
                                    "Starting play for videoId: ",
                                    videoId
                                );
                                console.log(
                                    "event.target in onready: ",
                                    event.target
                                );
                                event.target.playVideo();
                                console.log(
                                    "event in onready: ",
                                    event.target.l.videoData.video_id
                                );
                                videoData = event.target.getVideoData();
                                console.log(
                                    "videoData in onReady function ",
                                    videoData
                                );
                            },
                            onStateChange: function(event) {
                                console.log;
                                if (event.data == 0) {
                                    console.log("songs in event = 0: ", songs);
                                    console.log(
                                        "queue in onstatechage = 0: ",
                                        queue
                                    );

                                    for (var i = 1; i < songs.length; i++) {
                                        songList.push(songs[i].id.videoId);
                                    }
                                    console.log(
                                        "songList in iframeplayer: ",
                                        songList
                                    );
                                    playListIndex++;
                                    console.log(
                                        "video has stopped. Playlist index is: ",
                                        playListIndex
                                    );

                                    console.log(
                                        "songList[playListIndex]: ",
                                        songList[playListIndex]
                                    );
                                    event.target.loadVideoById(
                                        `${songList[playListIndex]}`
                                    );
                                }
                            }
                        },
                        playerVars: {
                            enablejsapi: "1"
                        }
                    })
                );
                console.log("videodata after player constructor: ", videoData);
            }
        }
        // console.log("songs in useEffect: ", songs);
    }, [videoId, queue]);

    // if (!songs) {
    //     return null;
    // }
    //
    // function onPlayerReady() {
    //     console.log("player ready");
    //     player.playVideo();
    //     // player.loadPlaylist({
    //     //     listType: "playlist",
    //     //     list: songListString
    //     // });
    // }
    //
    // function onPlayerStateChange(event) {
    //     // console.log("player state change event: ", event);
    //     console.log("songs outside of conditional: ", songs);
    //
    //     if (event.data == 0) {
    //         console.log("songs in event = 0: ", songs);
    //         for (var i = 0; i < songs.length; i++) {
    //             songList.push(songs[i].id.videoId);
    //         }
    //         console.log("songList in iframeplayer: ", songList);
    //         playListIndex++;
    //         console.log(
    //             "video has stopped. Playlist index is: ",
    //             playListIndex
    //         );
    //         console.log("songlist in player state change: ", songList);
    //         console.log("songList[playListIndex]: ", songList[playListIndex]);
    //         player.loadVideoById(`${songList[playListIndex]}`);
    //     }
    // }

    return (
        <div>
            <div id="ytplayer"></div>
        </div>
    );
}

//
// window.onYouTubePlayerAPIReady = function onYouTubePlayerAPIReady() {
//     // player = new YT.Player("ytplayer", {
//     //     height: "360",
//     //     width: "640",
//     //     videoId: "uXza21eCeOM",
//     //     events: {
//     //         onReady: onPlayerReady,
//     //         onStateChange: onPlayerStateChange
//     //     }
//     // });
// };
