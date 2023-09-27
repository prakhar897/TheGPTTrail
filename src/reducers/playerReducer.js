import { getNextPage } from '../helpers/pageHelpers';

const HEALTH = {
	good: {
		value: 4,
		name: 'Good',
	},
	adequate: {
		value: 3,
		name: 'Adequate',
	},
	poor: {
		value: 2,
		name: 'Poor',
	},
	verypoor: {
		value: 1,
		name: 'Very poor',
	},
	dead: {
		value: 0,
		name: 'Asleep forever', // (dead is not nice)
	},
};
const OCCUPATION = {
	banker: {
		wealth: 1600,
		weight: 1,
	},
	carpenter: {
		wealth: 800,
		weight: 2,
	},
	farmer: {
		wealth: 400,
		weight: 3,
	},
};
const STORE = {
	yoke: 20,
	clothing: 10,
	food: 10,
	ammunition: 2,
	wheels: 10,
	axle: 10,
	tongue: 10,
};
const PACE = {
	steady: {
		value: 2,
		name: 'Steady',
	},
	slow: {
		value: 1,
		name: 'Slow',
	},
	stopped: {
		value: 0,
		name: 'Stopped',
	},
};

const initialState = {
	leader: {
		name: '',
		health: HEALTH.good,
	},
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
	money: 0,
	inventory: {
		oxen: {
			name: 'Oxen',
			count: 0,
		},
		clothing: {
			name: 'Clothing',
			count: 0,
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
			return {
				...state,
				money: state.money + action.payload.amount,
			};
		}

		default:
			return state;
	}
};

export default playerReducer;
