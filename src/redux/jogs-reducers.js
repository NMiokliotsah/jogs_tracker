const SELECTED_JOG = "SELECTED_JOG";
const SHOW_FILTER_BAR = "SHOW_FILTER_BAR";

const initialState = {
    selectedJog: null,
    filterBar: false
}

const jogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_JOG: {
            return {
                selectedJog: action.jog
            }
        }
        case SHOW_FILTER_BAR: {
            return {
                ...state,
                filterBar: !state.filterBar
            }
        }
        default: {
            return state;
        }
    }
}

export const setSelectedJog = jog => ({ type: SELECTED_JOG, jog });
export const showFilterBar = () => ({type: SHOW_FILTER_BAR});

export default jogsReducer;