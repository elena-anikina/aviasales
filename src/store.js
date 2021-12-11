const tickets = [
    {id: 1, price: 1100, time: 21, transfers: 3},
    {id: 4, price: 6300, time: 10, transfers: 2},
    {id: 3, price: 9500, time: 5, transfers: 1},
    {id: 5, price: 12000, time: 3, transfers: 0},
    {id: 2, price: 15300, time: 3, transfers: 0}
];


const store = {
    tickets: [...tickets].sort((a, b) => a - b),
    sort: {price: true, time: false, optimal: false},
    filters: {zero: false, one: false, two: false, three: false},
    filterAll: false
};



export default store;