import axios from "./axios";

export async function receiveFriendsWannabes() {
    const { data } = await axios.get("/friends-wannabes");
    console.log("data from receiveFriendsWannabes action: ", data);
    return {
        type: "RECEIVE_FRIENDS",
        friends: data
    };
}

export async function getFavorites() {
    const { data } = await axios.get("/favorites");
    // console.log("data from favorites action: ", data);
    return {
        type: "GET_FAVORITES",
        favorites: data
    };
}

export async function removeFavorite(id) {
    await axios.post("/remove-favorite/" + id);
    return {
        type: "REMOVE_FAVORITE",
        id
    };
}
//
export async function addFavorite(videoData) {
    console.log("videodata in actions: ", videoData);
    const { data } = await axios.post("/add-favorite/", videoData);
    console.log("data back from addfavorite: ", data);
    return {
        type: "ADD_FAVORITE",
        data
    };
}

export async function setPlaylist(songs) {
    console.log("playlist set. Songs: ", songs);
    return {
        type: "SET_PLAYLIST",
        songs
    };
}

export async function getQueue() {
    // console.log("getting the queue in actions");
    return {
        type: "GET_QUEUE"
    };
}

export async function addToQueue(song) {
    // console.log("video added to queue. song is: ", song);
    return {
        type: "ADD_TO_QUEUE",
        song
    };
}

export async function playNow(video_id) {
    // console.log("PlayNow called in actions. video_id is: ", video_id);
    return {
        type: "PLAY_NOW",
        video_id
    };
}

export async function removeFromQueue(video_id) {
    console.log("video removed from queue. video_id is: ", video_id);
    return {
        type: "REMOVE_FROM_QUEUE",
        video_id
    };
}

export async function acceptFriendRequest(id) {
    await axios.post("/update-friendship/" + id, {
        buttonText: "Accept Friend Request"
    });
    console.log("accept friend request successful in actions");
    return {
        type: "ACCEPT_FRIEND",
        id
    };
}

export async function unfriend(id) {
    await axios.post("/update-friendship/" + id, {
        buttonText: ""
    });
    return {
        type: "REMOVE_FRIEND",
        id
    };
}

export async function chatMessages(msgs) {
    return {
        type: "GET_MESSAGES",
        msgs
    };
}

export async function chatMessage(newMsg) {
    console.log("chatmessage in actions: ", newMsg);
    return {
        type: "NEW_MESSAGE",
        newMsg
    };
}

export async function friendRequest(request) {
    console.log("friendRequest in actions: ", request);
    return {
        type: "FRIEND_REQUEST",
        request
    };
}

export async function getOtherFriends(id) {
    console.log("getotherFriends in Actions. ID: ", id);
    const { data } = await axios.get("/other-friends/" + id);

    return {
        type: "OTHER_FRIENDS",
        otherFriends: data
    };
}
