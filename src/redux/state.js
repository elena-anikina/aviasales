const state = {
  searchId: null,
  tickets: [],
  howManyTicketsToShow: 5,
  stop: false,
  sort: { price: true, time: false, optimal: false },
  filters: { zero: true, one: true, two: true, three: true },
  filterAll: true,
  loading: true,
  loadingProgress: 0,
  loadingProgressDelete: false,
  error: 0,
};

export default state;
