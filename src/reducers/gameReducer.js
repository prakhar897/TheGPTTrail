import { getNextPage } from '../helpers/pageHelpers';

const initialState = {
    activePage: "mainMenu",
    sound: "true",
    scale: 4
};

const gameReducer = (state = initialState, action) => {
    //console.log(state);
    console.log(action);
    switch (action.type) {
        case 'CHANGE_PAGE': {
            const newPage = getNextPage(action.payload.currentPage, action.payload.choice);
            console.log("New page: " + newPage);
            return {
                ...state,
                activePage: newPage
            };
        }

        default:
            return state;
    }
};

export default gameReducer;