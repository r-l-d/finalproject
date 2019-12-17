import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function IframePlayer(props) {
    let videoId = props.videoId;
    let songList = [];
    let playListIndex = 0;

    const songs = useSelector(state => {
        return state.songs;
    });

    console.log("songs in player: ", songs);
    // let songListString = songList.toString();
    // console.log("songListString: ", songListString);

    var player;

    useEffect(() => {
        if (!songs) {
            return;
        } else {
            player = new YT.Player("ytplayer", {
                height: "360",
                width: "640",
                videoId: videoId,
                events: {
                    onReady: function() {
                        console.log("player ready");
                        player.playVideo();
                    },
                    onStateChange: function(event) {
                        console.log("songs outside of conditional: ", songs);

                        if (event.data == 0) {
                            console.log("songs in event = 0: ", songs);
                            for (var i = 0; i < songs.length; i++) {
                                songList.push(songs[i].id.videoId);
                            }
                            console.log("songList in iframeplayer: ", songList);
                            playListIndex++;
                            console.log(
                                "video has stopped. Playlist index is: ",
                                playListIndex
                            );
                            console.log(
                                "songlist in player state change: ",
                                songList
                            );
                            console.log(
                                "songList[playListIndex]: ",
                                songList[playListIndex]
                            );
                            player.loadVideoById(`${songList[playListIndex]}`);
                        }
                    }
                },
                playerVars: {
                    enablejsapi: "1"
                }
            });
        }
        console.log("songs in useEffect: ", songs);
    }, [songs]);

    if (!songs) {
        return null;
    }
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
