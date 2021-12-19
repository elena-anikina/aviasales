export const sortFunctions = (state, tickets, price) => {
  let order = true;

  return (state, tickets, price) => {
    order = price ? !order : true;
    return {
      ...state,
      tickets: [...tickets].sort((a, b) => (order ? a.price - b.price : b.price - a.price)),
      sort: { price: true, time: false, optimal: false },
    };
  };
};
export const sortPriceFunc = sortFunctions();

export const sortTimeFunction = (state, tickets, time) => {
  let order = true;

  return (state, tickets, time) => {
    order = time ? !order : true;

    return {
      ...state,
      tickets: [...tickets].sort((a, b) => {
        const aDuration = a.segments[0].duration + a.segments[1].duration;
        const bDuration = b.segments[0].duration + b.segments[1].duration;
        return order ? aDuration - bDuration : bDuration - aDuration;
      }),
      sort: { price: false, time: true, optimal: false },
    };
  };
};
export const sortTimeFunc = sortTimeFunction();

export const sortOptimalFunction = (state, tickets, optimalSort) => {
  let order = true;

  return (state, tickets, optimal) => {
    order = optimal ? !order : true;
    const timeAverage =
      [...tickets].map((t) => t.segments[0].duration + t.segments[1].duration).reduce((a, b) => a + b) /
      (tickets.length * 2);
    const sortPrice = [...tickets].sort((a, b) => a.price - b.price);
    const filterMinPriceAndTime = [...sortPrice].filter((t) => {
      return order
        ? t.segments[0].duration <= timeAverage && t.segments[1].duration <= timeAverage
        : t.segments[0].duration > timeAverage && t.segments[1].duration > timeAverage;
    });
    const optimalSort = new Set([...filterMinPriceAndTime, ...sortPrice]);

    return {
      ...state,
      tickets: [...optimalSort],
      sort: { price: false, time: false, optimal: true },
    };
  };
};
export const sortOptimalFunc = sortOptimalFunction();
