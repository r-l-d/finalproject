import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    receiveFriendsWannabes,
    acceptFriendRequest,
    unfriend,
    getFavorites,
    removeFavorite,
    playNow,
    addToQueue
} from "./actions";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { borders } from "@material-ui/system";
import TextField from "@material-ui/core/TextField";
import { display } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1, 2),
        margin: 10
    },
    image: {
        height: 70,
        width: 70
    },
    favoritesContainer: {
        background: "lightgrey",
        // height: 300,
        overflow: "scroll",
        // width: "25%",
        // minWidth: 300,
        border: 1,
        borderColor: "black"
    },
    paperComponent: {
        marginLeft: 10
    }
}));

export default function Favorites() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const favorites = useSelector(state => {
        return state.favorites;
    });

    useEffect(() => {
        dispatch(getFavorites());
    }, []);

    if (!favorites) {
        return null;
    }

    return (
        <div>
            <div>
                <Typography className={classes.typography} variant="h6">
                    Favorites ({favorites.length})
                </Typography>
                <div className={classes.favoritesContainer}>
                    {favorites &&
                        favorites.map(favorite => (
                            <Paper
                                component="div"
                                display="flex"
                                className={classes.root}
                                key={favorite.id}
                            >
                                <Box display="flex" alignItems="center">
                                    <div>
                                        <img
                                            className={classes.image}
                                            src={favorite.image_url}
                                        />
                                    </div>
                                    <div className={classes.paperComponent}>
                                        <div>
                                            <Typography variant="body1">
                                                {favorite.title}
                                            </Typography>
                                        </div>
                                    </div>
                                    <Box display="flex" flexDirection="column">
                                        <Button
                                            size="small"
                                            onClick={e =>
                                                dispatch(
                                                    removeFavorite(favorite.id)
                                                )
                                            }
                                        >
                                            Remove
                                        </Button>
                                        <Button
                                            size="small"
                                            onClick={e =>
                                                dispatch(
                                                    playNow(favorite.video_id)
                                                )
                                            }
                                        >
                                            Play Now
                                        </Button>
                                    </Box>
                                </Box>
                            </Paper>
                        ))}
                </div>
            </div>
        </div>
    );
}

// <Box display="flex" flexWrap="wrap">
// {favorites.map(favorite => (
//     <Card key={favorite.id} className={classes.card}>
//     <CardActionArea>
//     <CardMedia
//     component="img"
//     className={classes.media}
//     image={favorite.image_url}
//     />
//     </CardActionArea>
//     <CardContent>
//     <Typography gutterBottom variant="h6">
//     {favorite.title}
//     </Typography>
//     </CardContent>
//     <CardActions className={classes.buttonBox}>
//     <Button
//     size="small"
//     onClick={e =>
//         dispatch(
//             removeFavorite(favorite.id)
//         )
//     }
//     >
//     Remove
//     </Button>
//     </CardActions>
//     </Card>
// ))}
//
// </Box>

// <Button
// size="small"
// onClick={e =>
//     dispatch(addToQueue(favorite))
// }
// >
// Add to Queue
// </Button>
