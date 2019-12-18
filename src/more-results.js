import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import Paper from "@material-ui/core/Paper";
import { borders } from "@material-ui/system";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { display } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    receiveFriendsWannabes,
    acceptFriendRequest,
    unfriend,
    getFavorites,
    removeFavorite,
    addToQueue,
    playNow
} from "./actions";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

// const useStyles = makeStyles({
//     image: {
//         height: 40
//     }
// });

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 2),
        margin: 10
    },
    image: {
        height: 70,
        width: 70
    },
    chatContainer: {
        background: "lightgrey",
        height: 600,
        overflow: "scroll",
        width: "70%",
        border: 1,
        borderColor: "black"
    },
    paperComponent: {
        marginLeft: 10
    },
    chatField: {
        width: "70%",
        marginTop: 10
    },
    card: {
        width: 200,
        margin: 10
    },
    media: {
        height: 150
    },
    typography: {
        margin: 10
    },
    buttonBox: {
        display: "flex",
        justifyContent: "flex-start"
        // alignItems: "flex-end"
    }
}));

export function MoreResults() {
    const elemRef = useRef();
    const classes = useStyles();
    const dispatch = useDispatch();
    const songs = useSelector(state => {
        return state.songs;
    });

    // console.log("props.results in MoreResults: ", props.results);
    // let songs = props.results;

    useEffect(() => {
        console.log("songs in more results:", songs);
    }, [songs]);
    //
    // const keyCheck = e => {
    //     if (e.key == "Enter") {
    //         // console.log("e.target.value: ", e.target.value);
    //         // console.log("e.key: ", e.key);
    //         e.target.value = "";
    //     }
    // };

    // console.log("chatMessages in Chat: ", chatMessages);
    if (!songs) {
        return null;
    }

    return (
        <div>
            <Container maxWidth="md">
                <Typography variant="h5">More Results</Typography>
                <Box display="flex" flexWrap="wrap">
                    {songs.slice(1).map(song => (
                        <Card key={song.id.videoId} className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    className={classes.media}
                                    image={song.snippet.thumbnails.default.url}
                                />
                            </CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="body1">
                                    {song.snippet.title}
                                </Typography>
                            </CardContent>

                            <CardActions className={classes.buttonBox}>
                                <Button
                                    size="small"
                                    onClick={e => dispatch(addToQueue(song))}
                                >
                                    Add to Queue
                                </Button>
                                <Button
                                    size="small"
                                    onClick={e =>
                                        dispatch(playNow(song.id.videoId))
                                    }
                                >
                                    Play Now
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            </Container>
        </div>
    );
}

// {songs.map(song => (
//     <div key={song.id.videoId}>{song.snippet.title}</div>
// ))}

// <div ref={elemRef} className={classes.chatContainer}>
// {chatMessages &&
//     chatMessages.map(msg => (
//         <Paper
//         component="div"
//         display="flex"
//         className={classes.root}
//         key={msg.msg_id}
//         >
//         <Box display="flex" alignItems="center">
//         <div>
//         <Link to={`/user/${msg.id}`}>
//         <img
//         className={classes.image}
//         src={msg.image_url}
//         />
//         </Link>
//         </div>
//         <div className={classes.paperComponent}>
//         <div>
//         <Typography variant="body1">
//         {msg.first} {msg.last}
//         </Typography>
//         </div>
//         <div>
//         <Typography variant="h6">
//         {msg.message}
//         </Typography>
//         </div>
//         <Typography variant="body2">
//         {moment(msg.created_at).calendar()}
//         </Typography>
//         </div>
//         </Box>
//         </Paper>
