import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    receiveFriendsWannabes,
    acceptFriendRequest,
    unfriend,
    getFavorites,
    removeFavorite
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

const useStyles = makeStyles({
    card: {
        width: 200,
        margin: 10
    },
    media: {
        height: 100
    },
    typography: {
        margin: 10
    },
    buttonBox: {
        display: "flex",
        justifyContent: "flex-start"
        // alignItems: "flex-end"
    }
});

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
            <Container maxWidth="lg">
                <div>
                    <Typography className={classes.typography} variant="h4">
                        Favorites ({favorites.length})
                    </Typography>
                    <Box display="flex" flexWrap="wrap">
                        {favorites.map(favorite => (
                            <Card key={favorite.id} className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        className={classes.media}
                                        image={favorite.image_url}
                                    />
                                </CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h6">
                                        {favorite.title}
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.buttonBox}>
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
                                </CardActions>
                            </Card>
                        ))}
                    </Box>
                </div>
            </Container>
        </div>
    );
}
