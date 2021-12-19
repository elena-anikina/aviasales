export const filterTickets = (tickets, n, filter) => {
  return [...tickets].map((t) => {
    if (t.segments.some((s) => s.stops.length === n)) {
      return { ...t, visible: !filter };
    }
    if (typeof n !== 'number') {
      return { ...t, visible: !filter };
    }
    return { ...t };
  });
};
