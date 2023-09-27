export const changePage = (currentPage, choice) => {
    return ({ type: 'CHANGE_PAGE', payload: { currentPage, choice } });
}