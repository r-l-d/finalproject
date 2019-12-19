export default function reducer(
    state = {
        ...state,
        queue: []
    },
    action
) {
    // console.log("state in reducer: ", state);
    if (action.type == "RECEIVE_FRIENDS") {
        state = {
            ...state,
            friends: action.friends
        };
    }

    if (action.type == "GET_FAVORITES") {
        state = {
            ...state,
            favorites: action.favorites
        };
    }

    if (action.type == "REMOVE_FAVORITE") {
        state = {
            ...state,
            favorites: state.favorites.filter(favorite => {
                if (favorite.id == action.id) {
                    return false;
                } else {
                    return true;
                }
            })
        };
    }

    if (action.type == "SET_PLAYLIST") {
        state = {
            ...state,
            songs: action.songs
        };
    }

    if (action.type == "GET_QUEUE") {
        state = {
            ...state
        };
    }

    if (action.type == "ADD_TO_QUEUE") {
        if (action.song.id.videoId) {
            let song = {
                video_id: action.song.id.videoId,
                title: action.song.snippet.title,
                image_url: action.song.snippet.thumbnails.default.url
            };
            state = {
                ...state,
                queue: state.queue.concat(song)
            };
        } else {
            state = {
                ...state,
                queue: state.queue.concat(action.song)
            };
        }
    }

    if (action.type == "PLAY_NOW") {
        state = {
            ...state,
            videoId: action.video_id
        };
    }

    if (action.type == "REMOVE_FROM_QUEUE") {
        state = {
            ...state,
            queue: state.queue.filter(song => {
                if (song.video_id == action.video_id) {
                    return false;
                } else {
                    return true;
                }
            })
        };
    }

    if (action.type == "ADD_FAVORITE") {
        state = {
            ...state,
            favorites: state.favorites.concat(action.data)
        };
    }

    if (action.type == "ACCEPT_FRIEND") {
        state = {
            ...state,
            friends: state.friends.map(user => {
                if (user.id == action.id) {
                    return {
                        ...user,
                        accepted: true
                    };
                } else {
                    return user;
                }
            })
        };
    }

    if (action.type == "REMOVE_FRIEND") {
        state = {
            ...state,
            friends: state.friends.filter(user => {
                if (user.id == action.id) {
                    return false;
                } else {
                    return true;
                }
            })
        };
    }

    if (action.type == "GET_MESSAGES") {
        state = {
            ...state,
            chatMessages: action.msgs
        };
    }

    if (action.type == "NEW_MESSAGE") {
        console.log("newMsg in reducer: ", action.newMsg);
        state = {
            ...state,
            chatMessages: state.chatMessages.concat(action.newMsg)
        };
    }

    if (action.type == "FRIEND_REQUEST") {
        console.log("Friend Request in reducer: ", action.request);
        state = {
            ...state,
            newRequest: action.request
        };
    }

    if (action.type == "OTHER_FRIENDS") {
        console.log("otherfriends data in reducer: ", action.otherfriends);
        state = {
            ...state,
            otherFriends: action.otherFriends
        };
    }

    // console.log("state after reducer: ", state);
    return state;
}
