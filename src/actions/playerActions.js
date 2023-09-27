export const AddMoney = (money) => {
	return { type: 'ADD_MONEY', payload: { amount: money } };
};
