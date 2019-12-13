import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
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
    container: {
        display: "flex"
    },
    bioBox: {
        margin: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    }
});

export default function Profile(props) {
    const classes = useStyles();
    console.log("props in profile: ", props);
    return (
        <div>
            <Container className={classes.container} maxWidth="m">
                <div>
                    <Typography className={classes.typography} variant="h4">
                        {props.first} {props.last}
                    </Typography>
                </div>
            </Container>
        </div>
    );
}
