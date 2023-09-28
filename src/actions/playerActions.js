export const addMoney = (choice) => {
    return { type: 'ADD_MONEY', payload: { choice } };
};

export const addCharacterName = (name) => {
    return { type: 'ADD_CHARACTER_NAME', payload: { name } };
}
