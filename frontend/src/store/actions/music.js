import actionTypes from "./actionTypes";

import * as apis from '../../apis'

export const setCurrSongId = (sid) => ({
    type: actionTypes.SET_CURR_SONG_ID,
    sid
})