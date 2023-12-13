import HEALTH from '../data/health.json';
import PACE from '../data/pace.json';
import OCCUPATION from '../data/occupation.json';

const initialState = {
    passengers: [
        {
            name: '',
            health: HEALTH.good,
        },
        {
            name: '',
            health: HEALTH.good,
        },
        {
            name: '',
            health: HEALTH.good,
        },
        {
            name: '',
            health: HEALTH.good,
        },
        {
            name: '',
            health: HEALTH.good,
        },
    ],
    money: 100,
    inventory: {
        oxen: {
            name: 'Oxen',
            count: 10,
        },
        clothing: {
            name: 'Clothing',
            count: 5,
        },
        food: {
            name: 'Food',
            count: 0,
        },
        ammunition: {
            name: 'Ammunition',
            count: 0,
        },
        wheels: {
            name: 'Wheels',
            count: 0,
        },
        axel: {
            name: 'Axel',
            count: 0,
        },
        tongue: {
            name: 'Tongue',
            count: 0,
        },
    },
    wagon: {
        location: [
            {
                //if want to track on map
                x: 0,
            },
            {
                y: 0,
            },
        ],
        pace: PACE.steady,
    },
    distance: 0, // total distance traveled
    landmark: 0, // distance to next landmark
    score: 0, // score based on education, distance traveled, number of surviving passengers
};

const playerReducer = (state = initialState, action) => {
    console.log(state);
    //console.log(action);
    switch (action.type) {
        case 'ADD_MONEY': {
            const newMoney = state.money + Object.values(OCCUPATION)[action.payload.choice - 1]['wealth']
            return {
                ...state,
                money: newMoney,
            };
        }

        case 'ADD_CHARACTER_NAME': {
            const newPassengers = state.player.passengers;
            newPassengers.forEach((passenger, index) => {
                if (passenger.name === '') {
                    passenger.name = action.payload.name;
                }
            });

            return {
                ...state,
                passengers: newPassengers
            }

        }

        default:
            return state;
    }
};

export default playerReducer;
