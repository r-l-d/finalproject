import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import Paper from "@material-ui/core/Paper";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        padding: theme.spacing(0.5)
    },
    chip: {
        margin: theme.spacing(0.5)
    }
}));

export default function Chips(props) {
    const classes = useStyles();
    let setQuery = props.setQuery;
    let query = props.query;

    const videoId = useSelector(state => {
        return state.videoId;
    });

    const [chipData, setChipData] = React.useState([
        { key: 0, label: "1950s" },
        { key: 1, label: "1960s" },
        { key: 2, label: "1970s" },
        { key: 3, label: "1980s" },
        { key: 4, label: "1990s" },
        { key: 5, label: "2000s" },
        { key: 6, label: "2010s" },
        { key: 7, label: "Pop" },
        { key: 8, label: "Rock" },
        { key: 9, label: "Jazz" },
        { key: 10, label: "Broadway" },
        { key: 11, label: "Hip Hop" },
        { key: 12, label: "Country" },
        { key: 13, label: "Alternative" },
        { key: 14, label: "Rap" },
        { key: 15, label: "Indie" },
        { key: 16, label: "Disco" },
        { key: 17, label: "Reggae" },
        { key: 18, label: "Blues" },
        { key: 19, label: "Funk" },
        { key: 20, label: "Metal" },
        { key: 21, label: "R&B" }
    ]);

    const handleClick = input => {
        console.log("input", input);
        setQuery(query + " " + input.label);
        handleDelete(input);
    };

    const handleDelete = chipToDelete => {
        setChipData(chips =>
            chips.filter(chip => chip.key !== chipToDelete.key)
        );
    };

    if (videoId) {
        return null;
    }

    return (
        <Paper className={classes.root}>
            {chipData.map(data => {
                return (
                    <Chip
                        key={data.key}
                        label={data.label}
                        color="primary"
                        clickable
                        className={classes.chip}
                        onClick={() => handleClick(data)}
                    />
                );
            })}
        </Paper>
    );
}
//
//
// const useStyles = makeStyles(theme => ({
//     root: {
//         display: "flex",
//         justifyContent: "center",
//         flexWrap: "wrap",
//         "& > *": {
//             margin: theme.spacing(0.5)
//         }
//     }
// }));
//
// export default function Chips(props) {
//     const classes = useStyles();
//     let setQuery = props.setQuery;
//
//     const handleDelete = () => {
//         console.info("You clicked the delete icon.");
//     };
//
//     const handleClick = query => {
//         console.log("query", query);
//         setQuery(query + "karaoke");
//     };
//
//     return (
//         <div className={classes.root}>
//             <Chip label="Basic" variant="outlined" />
//             <Chip label="Disabled" disabled variant="outlined" />
//             <Chip
//                 avatar={<Avatar>M</Avatar>}
//                 label="1970s"
//                 onClick={() => handleClick("1970s")}
//                 variant="outlined"
//             />
//             <Chip
//                 avatar={
//                     <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />
//                 }
//                 label="Deletable"
//                 onDelete={handleDelete}
//                 variant="outlined"
//             />
//             <Chip
//                 icon={<FaceIcon />}
//                 label="Clickable deletable"
//                 onClick={handleClick}
//                 onDelete={handleDelete}
//                 variant="outlined"
//             />
//             <Chip
//                 label="Custom delete icon"
//                 onClick={handleClick}
//                 onDelete={handleDelete}
//                 deleteIcon={<DoneIcon />}
//                 variant="outlined"
//             />
//             <Chip
//                 label="Clickable link"
//                 component="a"
//                 href="#chip"
//                 clickable
//                 variant="outlined"
//             />
//             <Chip
//                 avatar={<Avatar>M</Avatar>}
//                 label="Primary clickable"
//                 clickable
//                 color="primary"
//                 onDelete={handleDelete}
//                 deleteIcon={<DoneIcon />}
//                 variant="outlined"
//             />
//             <Chip
//                 icon={<FaceIcon />}
//                 label="Primary clickable"
//                 clickable
//                 color="primary"
//                 onDelete={handleDelete}
//                 deleteIcon={<DoneIcon />}
//                 variant="outlined"
//             />
//             <Chip
//                 label="Deletable primary"
//                 onDelete={handleDelete}
//                 color="primary"
//                 variant="outlined"
//             />
//             <Chip
//                 icon={<FaceIcon />}
//                 label="Deletable secondary"
//                 onDelete={handleDelete}
//                 color="secondary"
//                 variant="outlined"
//             />
//         </div>
//     );
// }
