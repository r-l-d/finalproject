import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { addFavorite, playNow, setPlaylist } from "./actions";
import Grid from "@material-ui/core/Grid";
import axios from "./axios";

export default function IframePlayer() {
    // let videoId = props.videoId;
    // let songList = [];
    let playListIndex = 0;
    let favoritesIndex = 0;
    const [player, setPlayer] = useState({});
    const [songList, setSongList] = useState([]);
    const dispatch = useDispatch();

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

    // console.log("videoId in player: ", videoId);
    // console.log("queue in player: ", queue);
    console.log("favorites in player: ", favorites);
    // console.log("songs in player: ", songs);
    // let songListString = songList.toString();
    // console.log("songListString: ", songListString);

    // var player;
    let videoData;
    //
    // if (YT.PlayerState.Playing) {
    //     console.log("player is playing");
    // }

    // console.log("videodata before useEffect: ", videoData);

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
                // console.log("queue.length: ", queue.length);
                // if (queue.length > 0) {
                //     console.log("queue being added to songList: ", queue);
                //     for (var j = 0; j < queue.length; j++) {
                //         setSongList(songList.unshift(queue[j].video_id));
                //     }
                //     console.log("songList after queue added: ", songList);
                // }
                // console.log("videoId in player useEffect: ", videoId);
                // console.log("videodata inside useEffect: ", videoData);
                setPlayer(
                    new YT.Player("ytplayer", {
                        height: "480",
                        width: "854",
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
                                if (event.data == 0) {
                                    console.log("songs in event = 0: ", songs);

                                    console.log(
                                        "video has stopped. Playlist index is: ",
                                        playListIndex
                                    );

                                    if (!songs) {
                                        console.log(
                                            "song playing from favorites"
                                        );
                                        event.target.loadVideoById(
                                            `${favorites[favoritesIndex].video_id}`
                                        );
                                        favoritesIndex++;
                                    } else {
                                        playListIndex++;
                                        console.log("song playing from songs");
                                        event.target.loadVideoById(
                                            `${songs[playListIndex].id.videoId}`
                                        );
                                    }
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
    }, [videoId]);

    function nextSong() {
        // console.log("player: ", player, "songs: ", songs);
        // player.loadVideoById(`${songs[playListIndex].id.videoId}`);
        if (!songs) {
            favoritesIndex++;
            player.loadVideoById(`${favorites[favoritesIndex].video_id}`);
        } else {
            playListIndex++;
            player.loadVideoById(`${songs[playListIndex].id.videoId}`);
        }
    }

    function addToFavorites(currentVideoData) {
        console.log("currentVideoData", currentVideoData);
        const currentVideoId = currentVideoData.video_id;
        console.log("currentvideoId: ", currentVideoId);
        const currentTitle = currentVideoData.title;
        for (let i = 0; i < songs.length; i++) {
            if (currentVideoId == songs[i].id.videoId) {
                var currentImage_Url = songs[i].snippet.thumbnails.default.url;
            }
        }
        dispatch(
            addFavorite({ currentVideoId, currentTitle, currentImage_Url })
        );
    }

    async function moreLikeThis(video_id) {
        try {
            console.log("more like this called for: ", video_id);
            const { data } = await axios.get(`/api/more/${video_id}`);
            console.log("data in from moreLikeThis: ", data);
            dispatch(setPlaylist(data));
            // console.log("data.items: ", data);
            dispatch(playNow(data[0].id.videoId));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <div id="ytplayer"></div>
            {videoId && (
                <Grid
                    container
                    direction="row"
                    justify="center"
                    // alignItems="center"
                    spacing={3}
                >
                    <Grid item>
                        <Button
                            size="large"
                            variant="outlined"
                            color="primary"
                            onClick={() => addToFavorites(player.l.videoData)}
                        >
                            Add to favorites
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            size="large"
                            variant="outlined"
                            color="primary"
                            onClick={() =>
                                moreLikeThis(player.l.videoData.video_id)
                            }
                        >
                            Play More Like This Song
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button
                            size="large"
                            variant="outlined"
                            color="primary"
                            onClick={nextSong}
                        >
                            Play Next Song
                        </Button>
                    </Grid>
                </Grid>
            )}
        </div>
    );
}

// dispatch(addFavorite(player.l.videoData))
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
