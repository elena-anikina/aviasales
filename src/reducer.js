import store from "./store";


const reducer = (state = store, action) => {
    const {tickets, sort, filters: {zero, one, two, three}, filterAll: all} = state;

    switch (action.type) {
        case 'SORT_PRICE':
            return {
                ...state,
                tickets: [...tickets].sort((a, b) => a.price - b.price),
                sort: {price: true, time: false, optimal: false}
            }
        case 'SORT_TIME':
            return {
                ...state,
                tickets: [...tickets].sort((a, b) => a.time - b.time),
                sort: {price: false, time: true, optimal: false}
            }
        case 'SORT_OPTIMAL':
            const timeAverage = [...tickets].reduce((acc, curr) => acc + curr.time, 0) / [...tickets].length;
            const sortPrice = [...tickets].sort((a, b) => a.price - b.price);
            const lessThanAverageTime = sortPrice.filter(i => i.time <= timeAverage);
            const moreThenAverageTime = sortPrice.filter(i => i.time > timeAverage);
            return {
                ...state,
                tickets: [...lessThanAverageTime, ...moreThenAverageTime],
                sort: {price: false, time: false, optimal: true}
            }
        case 'FILTER_ALL':
            return {
                ...state,
                filterAll: !all,
                filters: {zero: !all, one: !all, two: !all, three: !all}
            }
        case 'FILTER_ZERO':
            return {
                ...state,
                filters: {zero: !zero, one, two, three},
                filterAll: (!zero === true && one === true && two === true && three === true)
            }
        case 'FILTER_ONE':
            return {
                ...state,
                filters: {zero, one: !one, two, three},
                filterAll: (!one === true && zero === true && two === true && three === true)
            }
        case 'FILTER_TWO':
            return {
                ...state,
                filters: {zero, one, two: !two, three},
                filterAll: (!two === true && zero === true && one === true && three === true)
            }
        case 'FILTER_THREE':
            return {
                ...state,
                filters: {zero, one, two, three: !three},
                filterAll: (!three === true && zero === true && one === true && two === true)
            }
        default:
            return state;
    }
};


export default reducer;