
import actionTypes from '../actions/actionTypes';

const initialState = {
    currSongId: null,
};


const musicReducer = (state = initialState, action) => {
    switch (action.type) { 
        case actionTypes.SET_CURR_SONG_ID:
            return {
                ...state,
                currSongId: action.sid || null
            }
           
        default:
            return state
    }
}

export default musicReducer;